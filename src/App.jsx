import { Suspense, lazy, useEffect } from 'react';

import LanguageProvider from './contexts/LanguageContext.jsx';
import { useLanguage } from './hooks/useLanguage.js';

import Nav from './sections/Nav.jsx';
import Hero from './sections/Hero.jsx';
import Trust from './sections/Trust.jsx';
import About from './sections/About.jsx';
import Capabilities from './sections/Capabilities.jsx';
import Work from './sections/Work.jsx';
import Experience from './sections/Experience.jsx';
import Stack from './sections/Stack.jsx';
import OtherWork from './sections/OtherWork.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';

import './styles/theme.css';
import './styles/sections.css';

/* Decorativo y pesado (ogl): fuera del bundle inicial. */
const ScrollThread = lazy(() => import('./components/effects/ScrollThread.jsx'));

const setMeta = (attr, key, value) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
};

/**
 * Título y metadatos según el idioma. Antes esto era react-helmet-async;
 * para dos etiquetas no compensa su peso en el bundle.
 */
const Head = () => {
  const { c, language } = useLanguage();

  useEffect(() => {
    document.title = c.meta.title;
    setMeta('name', 'description', c.meta.description);
    setMeta('property', 'og:title', c.meta.title);
    setMeta('property', 'og:description', c.meta.description);
    setMeta('property', 'og:locale', language === 'es' ? 'es_CO' : 'en_US');
    setMeta('name', 'twitter:title', c.meta.title);
    setMeta('name', 'twitter:description', c.meta.description);
  }, [c, language]);

  return null;
};

/**
 * El sitio es una sola página. La ruta antigua /services vive ahora como la
 * sección "Qué hago"; el host la redirige, y esto es la red de seguridad.
 */
const useLegacyRedirect = () => {
  useEffect(() => {
    const { pathname, hash } = window.location;
    if (pathname === '/') return;
    const target = pathname.replace(/\/$/, '') === '/services' ? '#capabilities' : hash;
    window.history.replaceState(null, '', `/${target || ''}`);
    if (target) {
      window.requestAnimationFrame(() => {
        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, []);
};

const Page = () => {
  useLegacyRedirect();
  return (
    <>
      <Head />
      <Nav />
      <main>
        <Suspense fallback={null}>
          <ScrollThread />
        </Suspense>
        <Hero />
        <Trust />
        <About />
        <Capabilities />
        <Work />
        <Experience />
        <Stack />
        <OtherWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

const App = () => (
  <LanguageProvider>
    <Page />
  </LanguageProvider>
);

export default App;
