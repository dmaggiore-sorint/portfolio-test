import React from 'react';
import Translate from '../global/Translate';

const Portfolio = ({ containerRef }) => {
  return (
    <div id="portfolio" ref={containerRef} className="portfolio section bg">
      <h1 className="portfolio__title">
        <Translate id="portfolio.title" />
        <span>Portfolio</span>
      </h1>
      <div className="portfolio__content"></div>
    </div>
  );
};

export default Portfolio;
