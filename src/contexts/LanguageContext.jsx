import React, { createContext, useEffect, useMemo, useState } from 'react';
import { content } from '../data/content.js';

export const LanguageContext = createContext();

const STORAGE_KEY = 'tm-lang';

const initialLanguage = () => {
  if (typeof window === 'undefined') return 'en';
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === 'en' || saved === 'es') return saved;
  // El sitio apunta a roles remotos internacionales: inglés por defecto,
  // salvo que el navegador venga en español.
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage(prev => (prev === 'en' ? 'es' : 'en')),
      c: content[language]
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
