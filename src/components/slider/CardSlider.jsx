import React, { useRef } from "react";
import '../../assets/styles/cardSlider.scss';

const CardSlider = () => {
  const images = [
    "https://images.unsplash.com/photo-1620650764255-6797e68c7904?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=886&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];
  const sliderRef = useRef();

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="card-slider">
      <button onClick={scrollLeft} className="arrow left">‹</button>

      <div className="cards" ref={sliderRef}>
        {images.map((item) => (
          <div className="card" key={item} style={{
            backgroundImage: `url${item}`,
          }}>
            <img
                        
                        src={item}
                        alt="Thumbnail"
                    />
            <h3>Card {item}</h3>
            <p>This is card number {item}</p>
          </div>
        ))}
      </div>

      <button onClick={scrollRight} className="arrow right">›</button>
    </div>
  );
};

export default CardSlider;
