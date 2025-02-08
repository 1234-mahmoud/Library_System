import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useState, useEffect, useRef } from "react";
import React from "react";
import "../style/Category.css";

import p1 from '../imgs/bilingual.webp';
import p2 from '../imgs/book-2.webp';
import p3 from '../imgs/book-3.webp';
import p4 from '../imgs/book.webp';
import p6 from '../imgs/diwali-gift.webp';
import p7 from '../imgs/flash-sale.webp';
import p8 from '../imgs/learning.webp';
import p9 from '../imgs/personal-growth.webp';
import p11 from '../imgs/quran.webp';
import p12 from '../imgs/student-girl.webp';
import p13 from '../imgs/teaching-english.webp';
import p14 from '../imgs/translate-1.webp';

export default function Category() {
  const initialImgs = [p1, p2, p3, p4, p6, p7, p8, p9, p11, p12, p13, p14];
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeIndex, setActiveIndex] = useState(visibleCount); // Start after cloned images
  const sliderRef = useRef(null);

  // Clone first `visibleCount` images at the end to create an infinite loop
  const clonedImgs = [...initialImgs, ...initialImgs.slice(0, visibleCount)];

  useEffect(() => {
    const calculateVisibleCount = () => {
      if (window.innerWidth <= 767) {
        setVisibleCount(1);
      } else if (window.innerWidth <= 991) {
        setVisibleCount(3);
      } else {
        setVisibleCount(6);
      }
    };

    calculateVisibleCount();
    window.addEventListener("resize", calculateVisibleCount);
    return () => window.removeEventListener("resize", calculateVisibleCount);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      shiftNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const shiftNext = () => {
    setActiveIndex((prevIndex) => prevIndex + 1);
    if (sliderRef.current) {
      sliderRef.current.style.transition = "transform 0.5s ease-in-out";
    }

    // Reset position when reaching the last cloned element
    setTimeout(() => {
      if (activeIndex >= initialImgs.length) {
        setActiveIndex(visibleCount);
        if (sliderRef.current) {
          sliderRef.current.style.transition = "none"; // Remove animation for instant reset
        }
      }
    }, 500);
  };

  const shiftPrev = () => {
    setActiveIndex((prevIndex) => prevIndex - 1);
    if (sliderRef.current) {
      sliderRef.current.style.transition = "transform 0.5s ease-in-out";
    }

    // Reset position when reaching the first cloned element
    setTimeout(() => {
      if (activeIndex <= 0) {
        setActiveIndex(initialImgs.length);
        if (sliderRef.current) {
          sliderRef.current.style.transition = "none";
        }
      }
    }, 500);
  };

  return (
    <div className="category">
      <h1>هنا تجد كتابك المفضل بخطوات سهلة وسعر مناسب</h1>
      <span>بحثاً_عن_المعرفة#</span>
      <div className="container">
        <div className="slider_btns_ct">
          <button onClick={shiftPrev}>
            <AiFillCaretLeft />
          </button>
          <button onClick={shiftNext}>
            <AiFillCaretRight />
          </button>
        </div>
        <div className="slider_ct">
          <div 
            className="slider_img_ct"
            ref={sliderRef}
            style={{ 
              transform: `translateX(-${activeIndex * (100 / visibleCount)}%)`,
              transition: "transform 0.5s ease-in-out"
            }}
          >
            {clonedImgs.map((img, index) => (
              <div className="prod_img" key={index} style={{ width: `${100 / visibleCount}%` }}>
                <div className="icon">
                  <img src={img} alt="" />
                </div>
                <h3>Fruits & Veges</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="bullets">
          {initialImgs.map((_, index) => (
            <div 
              key={index} 
              className={`bullet ${index === (activeIndex % initialImgs.length) ? "active" : ""}`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
