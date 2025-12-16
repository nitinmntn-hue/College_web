import React, { useState } from "react";
import '../../assets/styles/heroSlider.scss';

const slides = [
  {
    title: "Celebrates 20 Years!",
    text: "AUGSA proudly celebrates 20 years with the launch of AU's first-ever Graduate Entrance Award.",
    image: "/img/banner1.jpg"
  },
  {
    title: "Empowering Students",
    text: "Supporting graduate learners across the world.",
    image: "/img/banner2.jpg"
  }
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <div className="hero-slider" style={{ backgroundImage: `url(${slides[index].image})` }}>
      <div className="overlay">
        <h1>{slides[index].title}</h1>
        <p>{slides[index].text}</p>

        <div className="buttons">
          <button className="primary">Learn More</button>
          <button className="secondary">Explore</button>
        </div>
      </div>

      <button className="nav prev" onClick={prev}>‹</button>
      <button className="nav next" onClick={next}>›</button>
    </div>
  );
};

export default HeroSlider;
