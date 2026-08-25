import { useEffect, useRef, useState } from 'react';

/**
 * Un hilo continuo que baja por toda la página. Se ve siempre la silueta
 * completa, muy tenue, y el trazo vivo se dibuja al ritmo del scroll: al llegar
 * al final la figura está completa. La ruta se genera con las medidas reales
 * del documento, así que no se deforma en ningún ancho de pantalla.
 */

/* Puntos de paso en fracciones del ancho y del alto del documento. */
const WAYPOINTS = [
  [0.52, 0.0],
  [0.16, 0.07],
  [0.84, 0.15],
  [0.28, 0.24],
  [0.9, 0.33],
  [0.18, 0.42],
  [0.66, 0.5],
  [0.1, 0.59],
  [0.86, 0.67],
  [0.32, 0.76],
  [0.78, 0.84],
  [0.2, 0.9],
  [0.58, 0.965]
];

/* Catmull-Rom → Bézier: curva suave que pasa por todos los puntos. */
const smoothPath = pts => {
  if (pts.length < 2) return '';
  let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d;
};

const ScrollThread = () => {
  const [box, setBox] = useState({ w: 0, h: 0 });
  const pathRef = useRef(null);
  const headRef = useRef(null);
  const lengthRef = useRef(0);

  /* Medir el documento y rehacer la ruta cuando cambie de tamaño. */
  useEffect(() => {
    const measure = () => {
      setBox({
        w: document.documentElement.clientWidth,
        h: document.documentElement.scrollHeight
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  /* Dibujar al ritmo del scroll. */
  useEffect(() => {
    const path = pathRef.current;
    if (!path || !box.h) return;

    const len = path.getTotalLength();
    lengthRef.current = len;
    path.style.strokeDasharray = `${len}`;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      path.style.strokeDashoffset = '0';
      if (headRef.current) headRef.current.style.opacity = '0';
      return;
    }

    let raf = 0;
    let queued = false;

    const draw = () => {
      queued = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      // Se adelanta un poco al scroll: el trazo va por delante de la lectura.
      const drawn = Math.min(1, p * 1.06);
      path.style.strokeDashoffset = `${len * (1 - drawn)}`;

      const head = headRef.current;
      if (head) {
        const pt = path.getPointAtLength(len * drawn);
        head.setAttribute('cx', pt.x);
        head.setAttribute('cy', pt.y);
        head.style.opacity = drawn > 0.004 && drawn < 0.999 ? '1' : '0';
      }
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      raf = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, [box]);

  if (!box.w || !box.h) return <div className="thread" aria-hidden="true" />;

  const pts = WAYPOINTS.map(([fx, fy]) => [fx * box.w, fy * box.h]);
  const d = smoothPath(pts);

  return (
    <div className="thread" aria-hidden="true" style={{ height: box.h }}>
      <svg width={box.w} height={box.h} viewBox={`0 0 ${box.w} ${box.h}`} fill="none">
        {/* Silueta: siempre visible, muy tenue. */}
        <path className="thread__ghost" d={d} />
        {/* Trazo vivo: se dibuja con el scroll. */}
        <path ref={pathRef} className="thread__line" d={d} />
        {/* Nodos en los puntos de paso. */}
        {pts.filter((_, i) => i % 2 === 1).map(([x, y], i) => (
          <circle key={i} className="thread__node" cx={x} cy={y} r="4" />
        ))}
        <circle ref={headRef} className="thread__head" r="5" />
      </svg>
    </div>
  );
};

export default ScrollThread;
