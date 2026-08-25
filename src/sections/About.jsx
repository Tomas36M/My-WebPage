import ScrollReveal from '../components/reactbits/ScrollReveal.jsx';
import AnimatedContent from '../components/reactbits/AnimatedContent.jsx';
import { useLanguage } from '../hooks/useLanguage.js';

const About = () => {
  const { c } = useLanguage();

  return (
    <section className="section section--line" id="about">
      <div className="shell">
        <span className="eyebrow">
          <span className="eyebrow__num">02</span> {c.about.eyebrow}
        </span>

        <AnimatedContent distance={40} duration={0.9}>
          <h2 className="h-section about__title">{c.about.title}</h2>
        </AnimatedContent>

        <div className="about__grid">
          <div className="about__col">
            <div className="about__reveal">
              <ScrollReveal baseOpacity={0.1} baseRotation={1.5} blurStrength={4} enableBlur>
                {c.about.reveal}
              </ScrollReveal>
            </div>

            {c.about.body.map((p, i) => (
              <AnimatedContent key={i} distance={26} duration={0.8} delay={i * 0.06}>
                <p className="about__p">{p}</p>
              </AnimatedContent>
            ))}
          </div>

          <aside className="about__side">
            <AnimatedContent distance={26} duration={0.8}>
              <div className="nowcard">
                <span className="mono-label nowcard__label">
                  <span className="nowcard__pulse" aria-hidden="true" />
                  {c.about.nowLabel}
                </span>
                <ul className="nowcard__list">
                  {c.about.now.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </AnimatedContent>

            <AnimatedContent distance={26} duration={0.8} delay={0.08}>
              <div className="facts">
                <span className="mono-label facts__label">{c.about.factsLabel}</span>
                <dl className="facts__list">
                  {c.about.facts.map(([k, v]) => (
                    <div className="facts__row" key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </AnimatedContent>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
