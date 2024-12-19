import { createContext, useContext, useState } from 'react'
import { translations } from '../utils/translations';

const LanguageContext = createContext({
  language: 'en',
  switchLanguage: () => {},
  translations: translations,
});


export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("en");

    const switchLanguage = (lang) => setLanguage(lang || 'en');

    return (
        <LanguageContext.Provider value={{ language, switchLanguage, translations }}>
          {children}
        </LanguageContext.Provider>
    );
}