import { useState, useEffect, useRef } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import React from "react";
import "../style/Classification.css";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Classification({ title, API_url }) {
  const [visibleCount, setVisibleCount] = useState(6);
  const [data, setData] = useState(API_url);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);

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
    fetch(API_url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData.books || []);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [API_url]);

  useEffect(() => {
    const interval = setInterval(() => {
      shiftNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [count]);

  const maxCount = Math.max(0, data.length - visibleCount); // Calculate max count

  const shiftNext = () => {
    setCount((prevCount) => Math.min(prevCount + 1, maxCount));

    setTimeout(() => {}, 500);
  };

  const shiftPrev = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0));

    setTimeout(() => {}, 500);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const sliderStyle = css`
    transform: translateX(calc(-${count * (100 / visibleCount)}%));
    transition: transform 0.5s ease-in-out;

    @media (max-width: 767px) {
      transform: translateX(-${count * 100}%);
    }

    @media (min-width: 768px) and (max-width: 991px) {
      transform: translateX(calc(-${count * (100 / visibleCount)}%));
    }
  `;

  return (
    <div className="classification">
      <h1>{title}</h1>
      <div className="container">
        <div className="slider_btns_ct">
          <button onClick={shiftPrev} disabled={count <= 0}>
            <AiFillCaretLeft />
          </button>
          <button onClick={shiftNext} disabled={count >= maxCount}>
            <AiFillCaretRight />
          </button>
        </div>
        <div className="slider_classification">
          <div className="slider_classification_cont" css={sliderStyle}>
            {data.map((b, index) => (
              <div className="book_data" key={index}>
                <img src={b.image} alt={b.title} />
                <span>{b.title}</span>
                <p>{b.subtitle}</p>
                <span>{b.price}</span>
                <a href={b.url}>Overview this book</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className="overview_books">
        <a href="#">شاهد المزيد</a>
      </button>
    </div>
  );
}
