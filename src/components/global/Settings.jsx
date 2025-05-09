import React, { useContext, useEffect, useState } from 'react';
import Translate from './Translate';
import { LanguageContext } from './Page';
import FlagEn from './FlagEn';
import FlagIt from './FlagIt';
import useLocalStorage from '../hooks/useLocalStorage';

const COLORS = [
  '#685eae',
  '#ff3c27',
  '#9341e6',
  '#2d6de6',
  '#e4a332',
  '#fe728f',
  '#97bd39',
  '#ff6726',
  '#68a62f',
  '#ffb230',
];

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useLocalStorage('color', '#685eae');
  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  const { switchLanguage } = useContext(LanguageContext);

  useEffect(() => {
    document.documentElement.style.setProperty('--first-color', color);
  }, [color]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--background-color',
      theme === 'dark' ? '#111111' : '#ffffff'
    );
    document.documentElement.style.setProperty(
      '--text-color',
      theme === 'dark' ? '#808080' : '#080808'
    );
    document.documentElement.style.setProperty(
      '--body-color',
      theme === 'dark' ? '#ffffff' : '#000000'
    );
    document.documentElement.style.setProperty(
      '--input-background-color',
      theme === 'dark' ? '#2b2b2b' : '#adadad'
    );
  }, [theme]);

  return (
    <>
      <button
        type="button"
        className="nav__button settings"
        onClick={() => setIsOpen(true)}
      >
        <div className="nav__text-wrapper">
          <div className="nav__text">
            <p>
              <Translate id="settings" />
            </p>
          </div>
        </div>
        <span className="fa-solid fa-gear" />
      </button>
      {isOpen && (
        <div className="settings__modal" onClick={() => setIsOpen(false)}>
          <div
            className="settings__modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="settings__close-modal"
              onClick={() => setIsOpen(false)}
            >
              <span className="fa-solid fa-xmark" />
            </button>
            <p>
              <Translate id="theme" />
            </p>
            <div className="settings__theme-switcher">
              <button
                type="button"
                className={`settings__theme-button${ theme === 'light' ? ' active' : '' }`}
                onClick={() => setTheme('light')}
              >
                <span className='fa-solid fa-sun' />
              </button>
              <button
                type="button"
                className={`settings__theme-button${ theme === 'dark' ? ' active' : '' }`}
                onClick={() => setTheme('dark')}
              >
                <span className='fa-solid fa-moon' />
              </button>
            </div>
            <p>
              <Translate id="color" />
            </p>
            <div className="settings__color-switcher">
              {COLORS.map((color) => (
                <span
                  key={color}
                  style={{ color }}
                  className="settings__color-color fa-solid fa-droplet"
                  onClick={() => setColor(color)}
                />
              ))}
            </div>
            <p>
              <Translate id="language" />
            </p>
            <div className="settings__language-switcher">
              <button
                type="button"
                className="settings__flag"
                onClick={() => switchLanguage('en')}
              >
                <FlagEn />
              </button>
              <button
                type="button"
                className="settings__flag"
                onClick={() => switchLanguage('it')}
              >
                <FlagIt />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Settings;
