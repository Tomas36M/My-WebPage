import { useLanguage } from '../hooks/useLanguage.js';
import { PROFILE } from '../data/content.js';

const Footer = () => {
  const { c } = useLanguage();

  return (
    <footer className="foot">
      <div className="shell foot__inner">
        <div className="foot__brand">
          <span className="foot__name">{PROFILE.name}</span>
          <span className="foot__tagline muted">{c.footer.tagline}</span>
        </div>

        <nav className="foot__links" aria-label="Footer">
          <a href={`mailto:${PROFILE.email}`}>Email</a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={PROFILE.cv} target="_blank" rel="noreferrer">
            {c.nav.cv}
          </a>
        </nav>

        <div className="foot__legal mono-label">
          <span>
            © {new Date().getFullYear()} {PROFILE.short}. {c.footer.rights}
          </span>
          <span>{c.footer.built}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
