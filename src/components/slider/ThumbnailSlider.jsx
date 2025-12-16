import React, { useState } from "react";
import '../../assets/styles/thumbnailSlider.scss';

const images = [
    "https://images.unsplash.com/photo-1620650764255-6797e68c7904?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    , "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    , "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    , "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=886&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    , "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D"
    , "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ,
];

const ThumbnailSlider = () => {
    const [active, setActive] = useState(0);

    return (
        <div className="thumb-slider">
            {/* Main Image */}
            <div className="main-image">
                <img src={images[active]} alt="Main" />
            </div>

            {/* Thumbnails */}
            <div className="thumbnails">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        className={index === active ? "active" : ""}
                        onClick={() => setActive(index)}
                        alt="Thumbnail"
                    />
                ))}
            </div>
        </div>
    );
};

export default ThumbnailSlider;
