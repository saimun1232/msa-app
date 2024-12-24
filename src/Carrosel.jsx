import React, { useState } from 'react';
import './App.css'; // Optional: Include custom styles

const Carrosel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel rounded-md m-10">
      
      <div  className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" onClick={prevSlide} className="btn btn-circle">❯</a>
      <a href="#slide4" onClick={nextSlide} className="btn btn-circle">❯</a>
      </div>

      <div className="carousel-content rounded-md">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? 'active' : 'hidden'
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrosel;
