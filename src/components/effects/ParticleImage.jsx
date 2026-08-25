import { useEffect, useRef, useState } from 'react';
import { Geometry, Mesh, Program, Renderer } from 'ogl';

/**
 * Particle Image — una imagen disuelta en partículas de GPU que se dispersan
 * y se vuelven a armar. Escrito a mano con ogl (el componente de React Bits Pro
 * requiere licencia). Si no hay WebGL, se cae con elegancia al <img> normal.
 */

const VERT = /* glsl */ `
attribute vec2 position;
attribute vec3 aColor;
attribute vec4 aSeed;

uniform float uTime;
uniform float uProgress;
uniform vec2 uScale;
uniform vec2 uPointer;
uniform float uPointerActive;
uniform float uPointSize;
uniform float uDispersion;
uniform float uBrightness;
uniform float uPointerRadius;
uniform float uPointerPush;

varying vec3 vColor;
varying float vAlpha;

void main() {
  vColor = clamp(aColor * uBrightness, 0.0, 1.0);

  // Posición dispersa: cada partícula sale disparada en su propia dirección,
  // con un giro que depende de la distancia al centro (de ahí el remolino).
  float angle = aSeed.x * 6.2831853;
  float radius = 0.35 + aSeed.y * 1.15;
  float swirl = length(position) * 2.4 + aSeed.z * 1.6;
  vec2 scattered = position + vec2(cos(angle + swirl), sin(angle + swirl)) * radius * uDispersion;

  float t = clamp(uProgress, 0.0, 1.0);
  // Escalonado: unas llegan antes que otras, así el armado no es un bloque.
  float staggered = clamp((t - aSeed.w * 0.35) / 0.65, 0.0, 1.0);
  float eased = 1.0 - pow(1.0 - staggered, 3.0);

  vec2 pos = mix(scattered, position, eased);

  // Deriva en reposo: la imagen nunca queda completamente quieta. La onda
  // depende de la POSICIÓN, no de la semilla: si cada partícula derivara por su
  // cuenta se separarían más que su propia distancia y la foto saldría picada.
  pos += vec2(
    sin(uTime * 0.5 + position.y * 2.6),
    cos(uTime * 0.42 + position.x * 2.6)
  ) * 0.004 * eased;

  // Repulsión del puntero.
  vec2 toPointer = pos - uPointer;
  float d = length(toPointer);
  // Arena, no un agujero. Si todas las partículas huyen en línea recta del
  // cursor se abre un hueco negro; aquí cada grano sale en SU propia dirección
  // (radial + tangencial + ruido por partícula), así el área queda revuelta
  // pero sigue cubierta.
  // OJO: smoothstep con edge0 > edge1 es comportamiento INDEFINIDO en GLSL.
  float influence = 1.0 - smoothstep(0.0, uPointerRadius, d);
  influence = pow(influence, 1.5) * uPointerActive;

  vec2 radial = normalize(toPointer + 0.0001);
  vec2 tangent = vec2(-radial.y, radial.x);
  vec2 grain = vec2(aSeed.x, aSeed.y) * 2.0 - 1.0;
  vec2 kick = normalize(radial * 0.8 + tangent * 0.5 + grain * 1.15);

  // Cada grano tiene su propio peso: unos saltan, otros casi no se mueven.
  float weight = 0.45 + aSeed.z * 0.95;
  pos += kick * influence * uPointerPush * weight;

  // En reposo las partículas son opacas y del mismo tamaño: así la foto se
  // lee limpia. El desorden sólo existe mientras se está armando.
  vAlpha = eased * (1.0 + influence * 0.35);

  gl_Position = vec4(pos * uScale, 0.0, 1.0);
  float sizeJitter = mix(0.55 + aSeed.z * 0.9, 1.0, eased);
  // La arena removida atrapa un poco más de luz.
  gl_PointSize = uPointSize * sizeJitter * (1.0 + influence * 1.45);
}
`;

const FRAG = /* glsl */ `
precision highp float;

varying vec3 vColor;
varying float vAlpha;

void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float d = dot(uv, uv);
  if (d > 0.25) discard;
  // Borde apenas suavizado. Con los bordes al revés (0.25, 0.17) el resultado
  // es indefinido por spec y sale ruido: va ascendente e invertido.
  float edge = 1.0 - smoothstep(0.17, 0.25, d);
  gl_FragColor = vec4(vColor, vAlpha * edge);
}
`;

const loadImage = src =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });

const ParticleImage = ({
  src,
  alt = '',
  /** Columnas de muestreo por cada 100 px de ancho renderizado. */
  resolution = 0.72,
  minColumns = 140,
  maxColumns = 340,
  /** Cuánto se solapan las partículas. 1 = justo, >1 = más denso. */
  overlap = 1.35,
  dispersion = 1,
  brightness = 1.14,
  /** Radio del efecto del cursor, en unidades de la imagen (2 = ancho completo). */
  pointerRadius = 0.34,
  /** Cuánto se aparta cada partícula del cursor. */
  pointerPush = 0.075,
  /** Segundos que tarda en armarse. */
  assemble = 2.4,
  className = ''
}) => {
  const hostRef = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || !src) return;

    let renderer;
    let raf = 0;
    let disposed = false;
    const pointer = { x: 999, y: 999, active: 0 };

    const run = async () => {
      const img = await loadImage(src);
      if (disposed) return;

      // 1. Muestrear la imagen en una rejilla del tamaño al que se va a ver:
      // pocas columnas para un contenedor chico, muchas para uno grande.
      const hostWidth = host.clientWidth || 520;
      // En pantallas chicas se muestrea más grueso: 280 columnas son ~98.000
      // partículas, demasiado trabajo de hilo principal para un teléfono.
      const density = hostWidth < 520 ? resolution * 0.62 : resolution;
      const cols = Math.round(Math.min(maxColumns, Math.max(minColumns, hostWidth * density)));
      const rows = Math.max(1, Math.round((cols * img.height) / img.width));
      const sampler = document.createElement('canvas');
      sampler.width = cols;
      sampler.height = rows;
      const ctx = sampler.getContext('2d', { willReadFrequently: true });
      // Un pelo de desenfoque antes de muestrear quita el ruido del JPEG, que
      // de otro modo se convierte en partículas de colores al azar.
      ctx.filter = 'blur(1.3px) saturate(1.14) contrast(1.05)';
      ctx.drawImage(img, 0, 0, cols, rows);
      ctx.filter = 'none';
      const { data } = ctx.getImageData(0, 0, cols, rows);

      const positions = [];
      const colors = [];
      const seeds = [];
      const aspect = cols / rows;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = (y * cols + x) * 4;
          const a = data[i + 3];
          if (a < 24) continue;

          const r = data[i] / 255;
          const g = data[i + 1] / 255;
          const b = data[i + 2] / 255;
          // Los píxeles casi negros no aportan y sí cuestan: fuera.
          if (r + g + b < 0.09) continue;

          positions.push((x / (cols - 1)) * 2 - 1, -((y / (rows - 1)) * 2 - 1));
          colors.push(r, g, b);
          seeds.push(Math.random(), Math.random(), Math.random(), Math.random());
        }
      }

      if (!positions.length) return;

      renderer = new Renderer({ alpha: true, dpr: Math.min(window.devicePixelRatio, 2), antialias: false });
      const gl = renderer.gl;
      gl.clearColor(0, 0, 0, 0);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      host.appendChild(gl.canvas);
      // Fuera del flujo. ogl escribe `style.width` en píxeles en cada setSize;
      // si el canvas participara del layout, ese ancho fijo anclaría la columna
      // del grid y la página no podría encoger al pasar a móvil.
      const fitCanvas = () => {
        Object.assign(gl.canvas.style, {
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          display: 'block'
        });
      };
      fitCanvas();

      const geometry = new Geometry(gl, {
        position: { size: 2, data: new Float32Array(positions) },
        aColor: { size: 3, data: new Float32Array(colors) },
        aSeed: { size: 4, data: new Float32Array(seeds) }
      });

      const program = new Program(gl, {
        vertex: VERT,
        fragment: FRAG,
        transparent: true,
        depthTest: false,
        uniforms: {
          uTime: { value: 0 },
          uProgress: { value: 0 },
          uScale: { value: [1, 1] },
          uPointer: { value: [999, 999] },
          uPointerActive: { value: 0 },
          uPointSize: { value: 2.6 },
          uDispersion: { value: dispersion },
          uBrightness: { value: brightness },
          uPointerRadius: { value: pointerRadius },
          uPointerPush: { value: pointerPush }
        }
      });

      const mesh = new Mesh(gl, { mode: gl.POINTS, geometry, program });

      // Encaje "contain" de la imagen dentro del contenedor.
      const resize = () => {
        const w = host.clientWidth;
        const h = host.clientHeight;
        if (!w || !h) return;
        renderer.setSize(w, h);
        fitCanvas();
        const canvasAspect = w / h;
        program.uniforms.uScale.value =
          canvasAspect > aspect ? [aspect / canvasAspect, 1] : [1, canvasAspect / aspect];
        // Tamaño de punto = separación real entre partículas × solape, para que
        // la imagen se lea sin dejar de verse hecha de partículas.
        const dpr = renderer.dpr;
        const drawnW = (canvasAspect > aspect ? h * aspect : w) * dpr;
        const drawnH = (canvasAspect > aspect ? h : w / aspect) * dpr;
        const spacing = Math.max(drawnW / cols, drawnH / rows);
        const size = Math.max(1.5, spacing * overlap);
        program.uniforms.uPointSize.value = size;
      };

      const ro = new ResizeObserver(resize);
      ro.observe(host);
      resize();

      const onMove = e => {
        const rect = host.getBoundingClientRect();
        const [sx, sy] = program.uniforms.uScale.value;
        pointer.x = (((e.clientX - rect.left) / rect.width) * 2 - 1) / sx;
        pointer.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1) / sy;
        pointer.active = 1;
      };
      const onLeave = () => {
        pointer.active = 0;
      };
      host.addEventListener('pointermove', onMove);
      host.addEventListener('pointerleave', onLeave);

      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const start = performance.now();
      let smoothActive = 0;
      const smoothPointer = { x: 999, y: 999 };

      // Fuera de pantalla no se dibuja: el retrato vive en el hero y no tiene
      // sentido gastar un rAF a 60 fps mientras se lee el resto de la página.
      let visible = true;
      const io = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !raf) raf = requestAnimationFrame(frame);
      });
      io.observe(host);

      function frame(now) {
        if (!visible) {
          raf = 0;
          return;
        }
        raf = requestAnimationFrame(frame);
        const elapsed = (now - start) / 1000;
        program.uniforms.uTime.value = elapsed;
        program.uniforms.uProgress.value = reduced ? 1 : Math.min(elapsed / assemble, 1);
        smoothActive += (pointer.active - smoothActive) * 0.11;
        program.uniforms.uPointerActive.value = smoothActive;
        // Seguimiento con retraso: el montón de arena tiene inercia.
        smoothPointer.x += (pointer.x - smoothPointer.x) * 0.22;
        smoothPointer.y += (pointer.y - smoothPointer.y) * 0.22;
        program.uniforms.uPointer.value = [smoothPointer.x, smoothPointer.y];
        renderer.render({ scene: mesh });
      }
      raf = requestAnimationFrame(frame);

      host._cleanup = () => {
        io.disconnect();
        ro.disconnect();
        host.removeEventListener('pointermove', onMove);
        host.removeEventListener('pointerleave', onLeave);
      };
    };

    run().catch(err => {
      if (import.meta.env.DEV) console.warn('[ParticleImage]', err);
      setFailed(true);
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      host._cleanup?.();
      if (renderer) {
        const gl = renderer.gl;
        if (gl.canvas.parentNode === host) host.removeChild(gl.canvas);
        gl.getExtension('WEBGL_lose_context')?.loseContext();
      }
    };
  }, [src, resolution, minColumns, maxColumns, overlap, dispersion, brightness, pointerRadius, pointerPush, assemble]);

  if (failed) {
    return <img className={className} src={src} alt={alt} />;
  }

  return (
    <div
      ref={hostRef}
      className={className}
      style={{ position: 'relative', minWidth: 0 }}
      role={alt ? 'img' : undefined}
      aria-label={alt || undefined}
    />
  );
};

export default ParticleImage;
