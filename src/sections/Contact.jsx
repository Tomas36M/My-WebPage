import AnimatedContent from '../components/reactbits/AnimatedContent.jsx';
import ShinyText from '../components/reactbits/ShinyText.jsx';
import TiltCard from '../components/effects/TiltCard.jsx';
import StarBorder from '../components/reactbits/StarBorder.jsx';
import { useLanguage } from '../hooks/useLanguage.js';
import { PROFILE } from '../data/content.js';

const Contact = () => {
  const { c } = useLanguage();

  return (
    <section className="section section--line contact" id="contact">
      <div className="contact__glow" aria-hidden="true" />

      <div className="shell contact__inner">
        <span className="eyebrow">
          <span className="eyebrow__num">08</span> {c.contact.eyebrow}
        </span>

        <div className="contact__grid">
          <div className="contact__col">
            <AnimatedContent distance={44} duration={0.95}>
              <h2 className="h-section contact__title">{c.contact.title}</h2>
            </AnimatedContent>

            <AnimatedContent distance={26} duration={0.8} delay={0.08}>
              <p className="lede contact__body">{c.contact.body}</p>
            </AnimatedContent>

            <AnimatedContent distance={30} duration={0.9} delay={0.14}>
              <a className="contact__mail" href={`mailto:${PROFILE.email}`}>
                <span className="contact__mail-text">{PROFILE.email}</span>
                <span className="contact__mail-rule" aria-hidden="true" />
              </a>
            </AnimatedContent>

            <AnimatedContent distance={24} duration={0.8} delay={0.2}>
              <div className="contact__ctas">
                <StarBorder as="a" href={PROFILE.cv} target="_blank" rel="noreferrer" color="#e3b23c" speed="5s" thickness={2}>
                  {c.contact.cv}
                </StarBorder>
                <a className="btn btn--ghost" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                  {c.contact.linkedin}
                  <span className="btn__arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
                <a className="btn btn--ghost" href={PROFILE.github} target="_blank" rel="noreferrer">
                  {c.contact.github}
                  <span className="btn__arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>
            </AnimatedContent>
          </div>

          <AnimatedContent distance={26} duration={0.9} delay={0.16} className="contact__aside">
            <TiltCard className="vcard">
              <div className="vcard__face">
                <div className="vcard__head">
                  <img className="vcard__photo" src={PROFILE.photoFace} alt={PROFILE.name} loading="lazy" />
                  <div>
                    <span className="vcard__name">{PROFILE.short}</span>
                    <span className="vcard__role mono-label">{c.footer.tagline.split('·')[0].trim()}</span>
                  </div>
                </div>

                <div className="vcard__rows">
                  <div className="vcard__row">
                    <span className="mono-label">Email</span>
                    <span>{PROFILE.email}</span>
                  </div>
                  <div className="vcard__row">
                    <span className="mono-label">{c.about.facts[0][0]}</span>
                    <span>{PROFILE.location} · GMT-5</span>
                  </div>
                  <div className="vcard__row">
                    <span className="mono-label">{c.about.facts[1][0]}</span>
                    <span>{c.about.facts[1][1]}</span>
                  </div>
                </div>

                <div className="vcard__status">
                  <span className="vcard__pulse" aria-hidden="true" />
                  {c.hero.available}
                </div>
              </div>
            </TiltCard>
          </AnimatedContent>
        </div>

        <div className="contact__meta">
          <ShinyText text={`${PROFILE.location} · ${c.hero.available}`} speed={5} color="#6c727d" shineColor="#f0cd7a" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
