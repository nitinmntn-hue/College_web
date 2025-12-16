import React, { useState, useEffect } from "react";
import '../../assets/styles/slider3.scss';

const images = [
  "/img/slide1.jpg",
  "/img/slide2.jpg",
  "/img/slide3.jpg"
];

const BasicSlider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="basic-slider">
      <img src={images[index]} alt="slide" />

      <button className="prev" onClick={prevSlide}>‹</button>
      <button className="next" onClick={nextSlide}>›</button>
    </div>
  );
};

export default BasicSlider;
