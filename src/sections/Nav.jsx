import { useEffect, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage.js';
import { PROFILE } from '../data/content.js';

const scrollTo = id => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Nav = () => {
  const { c, language, toggleLanguage } = useLanguage();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const links = [
    { id: 'work', label: c.nav.work },
    { id: 'about', label: c.nav.about },
    { id: 'experience', label: c.nav.experience },
    { id: 'contact', label: c.nav.contact }
  ];

  const go = id => {
    setOpen(false);
    // Deja cerrar el overlay antes de desplazar, si no el scroll queda bloqueado.
    window.setTimeout(() => scrollTo(id), open ? 260 : 0);
  };

  return (
    <>
      <header className={`nav ${solid ? 'nav--solid' : ''}`}>
        <div className="nav__inner">
          <button className="nav__brand" onClick={() => go('top')} aria-label={PROFILE.short}>
            <span className="nav__mark" aria-hidden="true">
              <span />
            </span>
            <span className="nav__wordmark">{PROFILE.short}</span>
          </button>

          <nav className="nav__links" aria-label="Primary">
            {links.map(l => (
              <button key={l.id} className="nav__link" onClick={() => go(l.id)}>
                {l.label}
              </button>
            ))}
            <a className="nav__link" href={PROFILE.cv} target="_blank" rel="noreferrer">
              {c.nav.cv}
            </a>
          </nav>

          <div className="nav__actions">
            {/* Sin aria-label: el nombre accesible se compone del texto visible
                más el aclaratorio oculto, así coinciden. */}
            <button className="nav__lang" onClick={toggleLanguage}>
              <span className={language === 'en' ? 'is-on' : ''}>EN</span>
              <i aria-hidden="true" />
              <span className={language === 'es' ? 'is-on' : ''}>ES</span>
              <span className="sr-only">{c.nav.langLabel}</span>
            </button>
            <button
              className={`nav__burger ${open ? 'is-open' : ''}`}
              onClick={() => setOpen(o => !o)}
              aria-expanded={open}
              aria-label="Menu"
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* `inert` además de aria-hidden: si no, los enlaces del menú cerrado
          siguen siendo enfocables con el tabulador. */}
      <div className={`navsheet ${open ? 'is-open' : ''}`} aria-hidden={!open} {...(open ? {} : { inert: '' })}>
        <div className="navsheet__inner">
          {links.map((l, i) => (
            <button
              key={l.id}
              className="navsheet__link"
              style={{ transitionDelay: `${80 + i * 60}ms` }}
              onClick={() => go(l.id)}
            >
              <span className="navsheet__num">0{i + 1}</span>
              {l.label}
            </button>
          ))}
          <a
            className="navsheet__link"
            style={{ transitionDelay: `${80 + links.length * 60}ms` }}
            href={PROFILE.cv}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            <span className="navsheet__num">05</span>
            {c.nav.cv}
          </a>
          <div className="navsheet__foot">
            <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
