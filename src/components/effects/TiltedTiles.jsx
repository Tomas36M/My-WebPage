import { useEffect, useMemo, useRef } from 'react';

/**
 * Tilted Tiles — rejilla inclinada de columnas de imágenes que derivan con el
 * scroll, en direcciones alternas. Escrito a mano (el de React Bits Pro
 * requiere licencia). Respeta prefers-reduced-motion.
 */
const TiltedTiles = ({
  items = [],
  columns = 5,
  /** Cuántas veces se repite la lista para llenar cada columna. */
  repeat = 3,
  /** Píxeles que recorre la columna más rápida de punta a punta. */
  amplitude = 260,
  tiltX = 34,
  tiltZ = -22,
  className = ''
}) => {
  const hostRef = useRef(null);
  const colRefs = useRef([]);

  const grid = useMemo(() => {
    if (!items.length) return [];
    const cols = Array.from({ length: columns }, () => []);
    for (let r = 0; r < repeat; r++) {
      items.forEach((item, i) => {
        cols[(i + r) % columns].push({ ...item, key: `${r}-${i}-${item.name}` });
      });
    }
    return cols;
  }, [items, columns, repeat]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    let queued = false;

    const update = () => {
      queued = false;
      const rect = host.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 0 cuando la sección entra por abajo, 1 cuando termina de salir por arriba.
      const progress = (vh - rect.top) / (vh + rect.height);
      const p = Math.max(0, Math.min(1, progress)) - 0.5;

      colRefs.current.forEach((el, i) => {
        if (!el) return;
        const dir = i % 2 === 0 ? 1 : -1;
        // Las columnas de los bordes se mueven un poco menos: da profundidad.
        const falloff = 0.65 + 0.35 * (1 - Math.abs(i - (grid.length - 1) / 2) / Math.max(1, grid.length));
        el.style.transform = `translate3d(0, ${(p * amplitude * dir * falloff).toFixed(2)}px, 0)`;
      });
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [grid.length, amplitude]);

  return (
    <div ref={hostRef} className={`tt ${className}`}>
      <div className="tt__stage" style={{ transform: `rotateX(${tiltX}deg) rotateZ(${tiltZ}deg)` }}>
        {grid.map((col, i) => (
          <div
            className="tt__col"
            key={i}
            ref={el => {
              colRefs.current[i] = el;
            }}
          >
            {col.map(item => (
              <figure className="tt__tile" key={item.key}>
                <img src={item.src} alt="" loading="lazy" />
                <figcaption>{item.name}</figcaption>
              </figure>
            ))}
          </div>
        ))}
      </div>
      <span className="tt__fade tt__fade--top" aria-hidden="true" />
      <span className="tt__fade tt__fade--bottom" aria-hidden="true" />
    </div>
  );
};

export default TiltedTiles;
