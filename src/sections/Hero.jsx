import { Suspense, lazy } from 'react';

const ParticleImage = lazy(() => import('../components/effects/ParticleImage.jsx'));
import ShinyText from '../components/reactbits/ShinyText.jsx';
import SplitText from '../components/reactbits/SplitText.jsx';
import RotatingText from '../components/reactbits/RotatingText.jsx';
import CountUp from '../components/reactbits/CountUp.jsx';
import StarBorder from '../components/reactbits/StarBorder.jsx';
import { useLanguage } from '../hooks/useLanguage.js';
import { PROFILE } from '../data/content.js';

const Hero = () => {
  const { c, language } = useLanguage();
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="top">
      <div className="hero__wash" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="shell hero__inner">
        <div className="hero__text">
          <div className="rise" style={{ '--rise-delay': '0.02s' }}>
            <div className="hero__eyebrow">
              <span className="hero__dot" aria-hidden="true" />
              <ShinyText text={c.hero.available} speed={4} color="#8f95a1" shineColor="#ffffff" />
            </div>
          </div>

          {/* GSAP SplitText escribe aria-label en el span que parte, y aria-label
              está prohibido en un <span> genérico. El nombre accesible lo damos
              en el <h1> y ocultamos las piezas visuales del árbol. */}
          <h1 className="hero__title h-display" aria-label={`${c.hero.titleA}${c.hero.titleAccent}${c.hero.titleB}`}>
            <span aria-hidden="true">
            <SplitText
              key={`a-${language}`}
              text={c.hero.titleA}
              tag="span"
              className="hero__title-part"
              delay={22}
              duration={1}
              splitType="chars"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="left"
            />
            {/* La palabra acentuada no se parte en caracteres: entra con un
                barrido, que contrasta con el escalonado de la primera línea. */}
            <span key={`b-${language}`} className="hero__title-part serif hero__title-accent">
              {c.hero.titleAccent}
            </span>
              <span className="hero__title-part">{c.hero.titleB}</span>
            </span>
          </h1>

          <div className="rise" style={{ '--rise-delay': '0.16s' }}>
            <div className="hero__role">
              <span className="mono-label">{c.hero.eyebrow}</span>
              <span className="hero__role-sep" aria-hidden="true" />
              <RotatingText
                texts={c.hero.roles}
                mainClassName="hero__rotating"
                staggerFrom="last"
                staggerDuration={0.02}
                splitLevelClassName="hero__rotating-line"
                transition={{ type: 'spring', damping: 28, stiffness: 340 }}
                rotationInterval={2800}
              />
            </div>
          </div>

          <div className="rise" style={{ '--rise-delay': '0.2s' }}>
            <p className="hero__lede lede">{c.hero.lede}</p>
          </div>

          <div className="rise" style={{ '--rise-delay': '0.28s' }}>
            <div className="hero__ctas">
              <StarBorder as="button" color="#e3b23c" speed="5s" thickness={2} onClick={() => go('work')}>
                {c.hero.ctaWork}
              </StarBorder>
              <a className="btn btn--ghost" href={`mailto:${PROFILE.email}`}>
                {c.hero.ctaTalk}
                <span className="btn__arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero__portrait">
          <Suspense fallback={<div className="hero__particles" />}>
            <ParticleImage
              src={PROFILE.photo}
              alt={PROFILE.name}
              className="hero__particles"
              overlap={2.05}
              dispersion={1.05}
              assemble={2.6}
            />
          </Suspense>
          <span className="hero__portrait-caption mono-label">
            {PROFILE.short} — {PROFILE.location}
          </span>
        </div>
      </div>

      <div className="shell">
        <div className="rise" style={{ '--rise-delay': '0.36s' }}>
          <dl className="metrics">
            {c.metrics.map((m, i) => (
              <div className="metric" key={i}>
                <dt className={`metric__value ${m.text ? 'metric__value--text' : ''}`}>
                  {m.text ? (
                    <span>{m.text}</span>
                  ) : (
                    <>
                      <CountUp to={m.value} duration={1.1} delay={0.12 + i * 0.08} />
                      <span className="metric__suffix">{m.suffix}</span>
                    </>
                  )}
                </dt>
                <dd className="metric__label">{m.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Hero;
