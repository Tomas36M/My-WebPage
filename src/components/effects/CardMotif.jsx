/**
 * Motivos gráficos de fondo para las tarjetas de "Qué hago".
 * Uno distinto por tarjeta: hairlines a muy baja opacidad que despiertan al
 * pasar el mouse. Nada de imágenes de stock.
 */

const Neural = () => (
  <svg viewBox="0 0 220 180" fill="none" aria-hidden="true">
    {[
      [20, 40, 90, 30],
      [20, 90, 90, 30],
      [20, 140, 90, 90],
      [90, 30, 160, 60],
      [90, 90, 160, 60],
      [90, 90, 160, 130],
      [90, 30, 160, 130],
      [160, 60, 205, 90],
      [160, 130, 205, 90]
    ].map(([x1, y1, x2, y2], i) => (
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" />
    ))}
    {[
      [20, 40],
      [20, 90],
      [20, 140],
      [90, 30],
      [90, 90],
      [160, 60],
      [160, 130],
      [205, 90]
    ].map(([cx, cy], i) => (
      <circle key={i} className="motif__node" cx={cx} cy={cy} r="3.5" fill="currentColor" style={{ animationDelay: `${i * 0.22}s` }} />
    ))}
  </svg>
);

const Blueprint = () => (
  <svg viewBox="0 0 220 180" fill="none" aria-hidden="true">
    <rect x="16" y="20" width="86" height="54" rx="6" stroke="currentColor" />
    <rect x="16" y="88" width="86" height="72" rx="6" stroke="currentColor" />
    <rect x="118" y="20" width="86" height="140" rx="6" stroke="currentColor" />
    <line x1="28" y1="104" x2="90" y2="104" stroke="currentColor" />
    <line x1="28" y1="120" x2="72" y2="120" stroke="currentColor" />
    <line x1="130" y1="40" x2="192" y2="40" stroke="currentColor" />
    <line x1="130" y1="56" x2="170" y2="56" stroke="currentColor" />
    <path className="motif__sweep" d="M16 20h188v140H16z" stroke="currentColor" strokeDasharray="8 6" />
  </svg>
);

const Topography = () => (
  <svg viewBox="0 0 220 180" fill="none" aria-hidden="true">
    {[0, 1, 2, 3, 4, 5].map(i => (
      <path
        key={i}
        className="motif__wave"
        style={{ animationDelay: `${i * 0.35}s` }}
        d={`M-10 ${34 + i * 24} C 40 ${14 + i * 24}, 80 ${54 + i * 24}, 120 ${30 + i * 24} S 200 ${8 + i * 24}, 230 ${38 + i * 24}`}
        stroke="currentColor"
      />
    ))}
  </svg>
);

const Orbit = () => (
  <svg viewBox="0 0 220 180" fill="none" aria-hidden="true">
    <circle cx="110" cy="90" r="20" stroke="currentColor" />
    {[42, 64, 86].map((r, i) => (
      <ellipse
        key={r}
        className="motif__ring"
        style={{ animationDelay: `${i * 0.5}s` }}
        cx="110"
        cy="90"
        rx={r}
        ry={r * 0.62}
        stroke="currentColor"
        transform={`rotate(${-18 - i * 14} 110 90)`}
      />
    ))}
    <circle className="motif__node" cx="152" cy="90" r="4" fill="currentColor" />
    <circle className="motif__node" cx="62" cy="72" r="3" fill="currentColor" style={{ animationDelay: '0.4s' }} />
  </svg>
);

const MOTIFS = { neural: Neural, blueprint: Blueprint, topography: Topography, orbit: Orbit };

const CardMotif = ({ name }) => {
  const Motif = MOTIFS[name];
  if (!Motif) return null;
  return (
    <span className="motif" aria-hidden="true">
      <Motif />
    </span>
  );
};

export default CardMotif;
