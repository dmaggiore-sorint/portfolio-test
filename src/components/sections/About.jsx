import React from 'react';
import Translate from '../global/Translate';

const About = ({ containerRef }) => {
  return (
    <div id="about" ref={containerRef} className="about section bg">
      <div className="about__text">
        <h1 className="about__title">Daniele Maggiore</h1>
        <h1 className="about__subtitle">Web Developer</h1>
        <p className="about__body">
          <Translate id="who_am_i" />
        </p>
        <button className="about__button" type="button">
          <Translate id="more_about_me" />
          <span className="fa-solid fa-chevron-right" />
        </button>
      </div>
    </div>
  );
};

export default About;
