import { useCallback, useEffect, useState } from 'react';
import SpotlightCard from '../components/reactbits/SpotlightCard.jsx';
import AnimatedContent from '../components/reactbits/AnimatedContent.jsx';
import { useLanguage } from '../hooks/useLanguage.js';
import { PROJECTS } from '../data/content.js';

const ProjectCard = ({ project, copy, index, onOpen }) => (
  <SpotlightCard className="work-card" spotlightColor={`${project.accent}26`}>
    <button className="work-card__btn" onClick={() => onOpen(project.id)}>
      <div className="work-card__media">
        {project.image ? (
          <img
            src={project.image}
            alt=""
            loading="lazy"
            onError={e => {
              e.currentTarget.closest('.work-card__media')?.classList.add('is-blank');
            }}
          />
        ) : (
          // Sin captura pública: en vez de un hueco, un monograma.
          <span className="work-card__mono" style={{ color: project.accent }} aria-hidden="true">
            {project.name.charAt(0)}
          </span>
        )}
        <span className="work-card__wash" style={{ background: `linear-gradient(140deg, ${project.accent}2e, transparent 65%)` }} />
      </div>

      <div className="work-card__body">
        <div className="work-card__top">
          <span className="work-card__num mono-label">{String(index + 1).padStart(2, '0')}</span>
          <span className="work-card__year mono-label">{project.years}</span>
        </div>
        <h3 className="h-card work-card__name">{project.name}</h3>
        <p className="work-card__tagline muted">{copy.tagline}</p>
        <div className="work-card__tech">
          {project.tech.slice(0, 4).map(t => (
            <span className="pill" key={t}>
              {t}
            </span>
          ))}
          {project.tech.length > 4 && <span className="pill">+{project.tech.length - 4}</span>}
        </div>
        <span className="work-card__cta">
          <span className="work-card__cta-line" style={{ background: project.accent }} />
        </span>
      </div>
    </button>
  </SpotlightCard>
);

const Work = () => {
  const { c } = useLanguage();
  const [openId, setOpenId] = useState(null);

  const close = useCallback(() => setOpenId(null), []);

  useEffect(() => {
    if (!openId) return;
    const onKey = e => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [openId, close]);

  const project = PROJECTS.find(p => p.id === openId);
  const copy = project ? c.projects[project.id] : null;

  return (
    <section className="section section--line" id="work">
      <div className="shell">
        <span className="eyebrow">
          <span className="eyebrow__num">04</span> {c.work.eyebrow}
        </span>
        <AnimatedContent distance={40} duration={0.9}>
          <h2 className="h-section">{c.work.title}</h2>
        </AnimatedContent>
        <AnimatedContent distance={26} duration={0.8} delay={0.08}>
          <p className="lede work__subtitle">{c.work.subtitle}</p>
        </AnimatedContent>

        <div className="work-grid">
          {PROJECTS.map((p, i) => (
            <AnimatedContent key={p.id} distance={36} duration={0.85} delay={(i % 3) * 0.07}>
              <ProjectCard project={p} copy={c.projects[p.id]} index={i} onOpen={setOpenId} />
            </AnimatedContent>
          ))}
        </div>
      </div>

      {project && copy && (
        <div className="case" role="dialog" aria-modal="true" aria-label={project.name}>
          <div className="case__scrim" onClick={close} />
          <article className="case__panel">
            <header className="case__head">
              <div>
                <span className="mono-label">{project.years}</span>
                <h3 className="case__title h-section">{project.name}</h3>
                <p className="case__tagline" style={{ color: project.accent }}>
                  {copy.tagline}
                </p>
              </div>
              <button className="case__close" onClick={close} aria-label={c.work.close}>
                <span />
                <span />
              </button>
            </header>

            {project.image && (
              <div className="case__media" style={{ borderColor: `${project.accent}44` }}>
                <img
                  src={project.image}
                  alt={project.name}
                  onError={e => {
                    e.currentTarget.parentElement.style.display = 'none';
                  }}
                />
              </div>
            )}

            <div className="case__grid">
              <div className="case__main">
                <p className="case__summary">{copy.summary}</p>

                <h4 className="case__h4 mono-label">{c.work.highlights}</h4>
                <ul className="case__list">
                  {copy.highlights.map((h, i) => (
                    <li key={i}>
                      <span className="case__bullet" style={{ background: project.accent }} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="case__aside">
                <div className="case__block">
                  <h4 className="case__h4 mono-label">{c.work.role}</h4>
                  <p>{copy.role}</p>
                </div>
                <div className="case__block">
                  <h4 className="case__h4 mono-label">{c.work.builtWith}</h4>
                  <div className="case__tech">
                    {project.tech.map(t => (
                      <span className="pill" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                {project.confidential && <p className="case__note">{c.work.confidential}</p>}
                <div className="case__links">
                  {project.href && (
                    <a className="btn btn--solid" href={project.href} target="_blank" rel="noreferrer">
                      {c.work.visit}
                      <span className="btn__arrow" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  )}
                  {project.repo && (
                    <a className="btn btn--ghost" href={project.repo} target="_blank" rel="noreferrer">
                      {c.work.repo}
                    </a>
                  )}
                </div>
              </aside>
            </div>
          </article>
        </div>
      )}
    </section>
  );
};

export default Work;
