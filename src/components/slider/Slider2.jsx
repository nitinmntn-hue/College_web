import React from 'react';
import '../../assets/styles/slider2.scss';

const Slider2 = () => {
  return (
    <div className="slider">
      <div className="slider__background">
        <div className="slider__overlay">
          <h1 className="slider__title">Celebrates 20 Years!</h1>
          <p className="slider__subtitle">
            AUGSA proudly celebrates 20 years with the launch of Athabasca University's first-ever Graduate Entrance Award.
          </p>
          <div className="slider__buttons">
            <button className="btn btn--primary">Learn More</button>
            <button className="btn btn--secondary">Explore</button>
            <button className="btn btn--secondary">Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider2;
