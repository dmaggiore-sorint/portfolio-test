import React, { useState, createContext } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import Home from '../sections/Home';
import Navbar from './Navbar';
import About from '../sections/About';
import useLocalStorage from '../hooks/useLocalStorage';
import Contacts from '../sections/Contacts';
import Portfolio from '../sections/Portfolio';

export const LanguageContext = createContext({
  language: 'en',
  switchLanguage: () => {},
});

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.8,
}

const Page = () => {
  const [homeRef, homeVisible] = useOnScreen(options);
  const [aboutRef, aboutVisible] = useOnScreen(options);
  const [portfolioRef, portfolioVisible] = useOnScreen(options);
  const [contactsRef, contactsVisible] = useOnScreen(options);
  const [lang, setLang] = useLocalStorage('lang', 'en');
  const [language, setLanguage] = useState(lang);

  const switchLanguage = (l) => {
    setLang(l);
    setLanguage(l);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      <div className="page">
        <Navbar
          homeVisible={homeVisible}
          aboutVisible={aboutVisible}
          portfolioVisible={portfolioVisible}
          contactsVisible={contactsVisible}
        />
        <Home containerRef={homeRef} />
        <About containerRef={aboutRef} />
        <Portfolio contactsRef={portfolioRef} />
        <Contacts containerRef={contactsRef} />
      </div>
    </LanguageContext.Provider>
  );
}

export default Page
