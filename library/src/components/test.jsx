import { useState, useEffect } from "react";
import '../style/tst.css'

import p1 from '../imgs/bilingual.webp';
import p2 from '../imgs/book-2.webp';
import p3 from '../imgs/book-3.webp';
const images = [
 p1,p2,p3
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <div className="slides">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={index === currentIndex ? "active" : "hidden"}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <button className="next" onClick={nextSlide}>&#10095;</button>
      <div className="bullets">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "bullet active-bullet" : "bullet"}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
