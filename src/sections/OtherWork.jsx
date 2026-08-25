import AnimatedContent from '../components/reactbits/AnimatedContent.jsx';
import { useLanguage } from '../hooks/useLanguage.js';

const Row = ({ item }) => {
  const inner = (
    <>
      <span className="other__year mono-label">{item.year}</span>
      <span className="other__name">{item.name}</span>
      <span className="other__detail muted">{item.detail}</span>
      {item.href && (
        <span className="other__arrow" aria-hidden="true">
          ↗
        </span>
      )}
    </>
  );

  return item.href ? (
    <a className="other__row other__row--link" href={item.href} target="_blank" rel="noreferrer">
      {inner}
    </a>
  ) : (
    <div className="other__row">{inner}</div>
  );
};

const OtherWork = () => {
  const { c } = useLanguage();

  return (
    <section className="section section--line" id="other">
      <div className="shell">
        <span className="eyebrow">
          <span className="eyebrow__num">07</span> {c.other.eyebrow}
        </span>
        <AnimatedContent distance={40} duration={0.9}>
          <h2 className="h-section">{c.other.title}</h2>
        </AnimatedContent>
        <p className="lede other__subtitle">{c.other.subtitle}</p>

        <div className="other">
          {c.other.items.map((item, i) => (
            <AnimatedContent key={item.name} distance={22} duration={0.7} delay={i * 0.04}>
              <Row item={item} />
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherWork;
