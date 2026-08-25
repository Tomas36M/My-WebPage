import SpotlightCard from '../components/reactbits/SpotlightCard.jsx';
import AnimatedContent from '../components/reactbits/AnimatedContent.jsx';
import CardMotif from '../components/effects/CardMotif.jsx';
import { useLanguage } from '../hooks/useLanguage.js';

const MOTIFS = ['neural', 'blueprint', 'topography', 'orbit'];

const Capabilities = () => {
  const { c } = useLanguage();

  return (
    <section className="section section--line" id="capabilities">
      <div className="shell">
        <span className="eyebrow">
          <span className="eyebrow__num">03</span> {c.capabilities.eyebrow}
        </span>
        <AnimatedContent distance={40} duration={0.9}>
          <h2 className="h-section">{c.capabilities.title}</h2>
        </AnimatedContent>

        <div className="caps">
          {c.capabilities.items.map((item, i) => (
            <AnimatedContent key={item.title} distance={34} duration={0.85} delay={i * 0.07}>
              <SpotlightCard className="cap" spotlightColor="rgba(227, 178, 60, 0.16)">
                <CardMotif name={MOTIFS[i]} />
                <div className="cap__inner">
                  <span className="cap__num mono-label">0{i + 1}</span>
                  <h3 className="h-card cap__title">{item.title}</h3>
                  <p className="cap__body muted">{item.body}</p>
                  <div className="cap__tags">
                    {item.tags.map(tag => (
                      <span className="pill" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
