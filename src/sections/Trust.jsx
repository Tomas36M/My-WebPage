import LogoLoop from '../components/reactbits/LogoLoop.jsx';
import { useLanguage } from '../hooks/useLanguage.js';
import { ORGS } from '../data/content.js';

const Trust = () => {
  const { c } = useLanguage();

  const items = ORGS.map(o => ({
    node: o.wordmark ? (
      // Un wordmark ya dice el nombre: repetirlo al lado se ve redundante.
      <span className="trust__item trust__item--word">
        <img className="trust__wordmark" src={o.logo} alt={o.name} loading="lazy" />
      </span>
    ) : (
      <span className="trust__item">
        <span className="trust__chip">
          <img src={o.logo} alt="" loading="lazy" />
        </span>
        <span className="trust__name">{o.name}</span>
      </span>
    ),
    title: o.name,
    ariaLabel: o.name
  }));

  return (
    <section className="trust" id="trust" aria-label={c.trust.label}>
      <div className="shell trust__head">
        <span className="mono-label">{c.trust.label}</span>
      </div>
      <LogoLoop
        logos={items}
        speed={34}
        direction="left"
        logoHeight={48}
        gap={64}
        pauseOnHover
        fadeOut
        fadeOutColor="#07080a"
        ariaLabel={c.trust.label}
        className="trust__loop"
      />
    </section>
  );
};

export default Trust;
