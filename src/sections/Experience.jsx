import AnimatedContent from '../components/reactbits/AnimatedContent.jsx';
import { useLanguage } from '../hooks/useLanguage.js';

const Experience = () => {
  const { c } = useLanguage();

  return (
    <section className="section section--line" id="experience">
      <div className="shell">
        <span className="eyebrow">
          <span className="eyebrow__num">05</span> {c.experience.eyebrow}
        </span>
        <AnimatedContent distance={40} duration={0.9}>
          <h2 className="h-section">{c.experience.title}</h2>
        </AnimatedContent>

        <ol className="tl">
          {c.experience.items.map((item, i) => (
            <li className="tl__item" key={`${item.org}-${i}`}>
              <AnimatedContent className="tl__row" distance={30} duration={0.8} delay={0.04}>
                <div className="tl__period">
                  <span className="mono-label">{item.period}</span>
                </div>

                <div className="tl__rail">
                  <span className="tl__chip">
                    {item.logo ? (
                      <img src={item.logo} alt="" loading="lazy" />
                    ) : (
                      <span className="tl__mono">{item.org.charAt(0)}</span>
                    )}
                  </span>
                </div>

                <div className="tl__body">
                  <h3 className="tl__org">
                    {item.org}
                    {item.note && <span className="tl__note"> — {item.note}</span>}
                  </h3>
                  <p className="tl__role">{item.role}</p>
                  <p className="tl__text muted">{item.body}</p>
                </div>

                <div className="tl__side">
                  <div className="tl__tags">
                    {item.tags.map(t => (
                      <span className="pill" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedContent>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
};

export default Experience;
