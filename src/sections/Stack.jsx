import { Suspense, lazy } from 'react';

const TiltedTiles = lazy(() => import('../components/effects/TiltedTiles.jsx'));
import AnimatedContent from '../components/reactbits/AnimatedContent.jsx';
import { useLanguage } from '../hooks/useLanguage.js';
import { STACK } from '../data/content.js';

const Stack = () => {
  const { c } = useLanguage();

  return (
    <section className="section section--line stackx" id="stack">
      <div className="shell stackx__head">
        <span className="eyebrow">
          <span className="eyebrow__num">06</span> {c.stack.eyebrow}
        </span>
        <AnimatedContent distance={40} duration={0.9}>
          <h2 className="h-section stackx__title">{c.stack.title}</h2>
        </AnimatedContent>
      </div>

      <Suspense fallback={<div className="tt" />}>
        <TiltedTiles items={STACK} columns={8} repeat={3} amplitude={260} tiltX={17} tiltZ={-10} />
      </Suspense>
    </section>
  );
};

export default Stack;
