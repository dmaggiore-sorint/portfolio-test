import React from 'react'
import Translate from './Translate';
import Settings from './Settings';

const Navbar = ({
  homeVisible, aboutVisible, portfolioVisible, contactsVisible,
}) => {
  // const [lang, setLang] = useLocalStorage('lang', 'en')
  // const changeColor = () => {
  //   document.documentElement.style.setProperty('--first-color', '#ff3c27');
  // }
  // const swapLang = () => {
  //   setLang(lang === 'en' ? 'it' : 'en');
  //   window.location.reload();
  // }

  const scrollToId = (id) => {
    if (document.getElementById(id)) {
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

  return (
    <div className="nav">
      <button
        onClick={() => scrollToId('home')}
        className={`nav__button${homeVisible ? ' active' : ''}`}
      >
        <div className="nav__text-wrapper">
          <div className="nav__text">
            <p>
              <Translate id="nav.home" />
            </p>
          </div>
        </div>
        <span className="fa-solid fa-house" />
      </button>

      <button
        onClick={() => scrollToId('about')}
        className={`nav__button${aboutVisible ? ' active' : ''}`}
      >
        <div className="nav__text-wrapper">
          <div className="nav__text">
            <p>
              <Translate id="nav.about" />
            </p>
          </div>
        </div>
        <span className="fa-solid fa-user" />
      </button>

      <button
        onClick={() => scrollToId('portfolio')}
        className={`nav__button${portfolioVisible ? ' active' : ''}`}
      >
        <div className="nav__text-wrapper">
          <div className="nav__text">
            <p>
              <Translate id="nav.portfolio" />
            </p>
          </div>
        </div>
        <span className="fa-regular fa-folder-open" />
      </button>

      <button
        onClick={() => scrollToId('contacts')}
        className={`nav__button${contactsVisible ? ' active' : ''}`}
      >
        <div className="nav__text-wrapper">
          <div className="nav__text">
            <p>
              <Translate id="nav.contacts" />
            </p>
          </div>
        </div>
        <span className="fa-solid fa-envelope" />
      </button>

      <Settings />
    </div>
  );
}

export default Navbar
