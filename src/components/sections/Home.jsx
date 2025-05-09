import React from 'react'
import Translate from '../global/Translate';
// import profileImage from '../../assets/profile-image.webp';

const Home = ({ containerRef }) => {
  const aboutButton = () => {
    if (document.getElementById('about')) {
      document.getElementById('about').scrollIntoView({
        behavior: 'smooth',
      });
    }
  }
  return (
    <div id="home" ref={containerRef} className="home section diagonal-bg">
      <div className="home__img">
        {/* <img src={profileImage} alt="profile-image" /> */}
      </div>
      <div className="home__text">
        <h1 className="home__title">Daniele Maggiore</h1>
        <h1 className="home__subtitle">Web Developer</h1>
        <p className="home__body">
          <Translate id="who_am_i" />
        </p>
        <button
          className="animated__button"
          type="button"
          onClick={aboutButton}
        >
          <Translate id="more_about_me" />
          <span className="fa-solid fa-chevron-right" />
        </button>
      </div>
    </div>
  );
}

export default Home
