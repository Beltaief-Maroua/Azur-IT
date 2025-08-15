import React, { useState, useEffect } from "react";
import styles from "../Stytle/Reference.module.css";

import client1 from '../assets/client1.png';
import client2 from '../assets/client2.jpg';
import client3 from '../assets/client3.jpg';
import client4 from '../assets/client4.png';
import client5 from '../assets/client5.jpg';
import client6 from '../assets/client6.png';
import client7 from '../assets/client7.png';
import client8 from '../assets/client8.png';
import client9 from '../assets/client9.png';

const Reference = () => {
  const slides = [
    client2
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 2000); // every 2 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [slides.length]);

  return (
    <div
      id="carouselExampleIndicators"
      className={`${styles.carousel} ${styles.slide}`}
    >
      <ol className={styles.carouselIndicators}>
        {slides.map((_, index) => (
          <li
            key={index}
            className={index === current ? styles.active : ""}
            onClick={() => setCurrent(index)}
          ></li>
        ))}
      </ol>

      <div
        className={styles.carouselInner}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((src, index) => (
          <div
            key={index}
            className={`${styles.carouselItem} ${
              index === current ? styles.active : ""
            }`}
          >
            <img
              className={`${styles.dBlock} ${styles.w100}`}
              src={src}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <button
        className={styles.carouselControlPrev}
        onClick={prevSlide}
        aria-label="Previous"
      >
        <span className={styles.carouselControlPrevIcon}></span>
        <span className={styles.srOnly}>Previous</span>
      </button>

      <button
        className={styles.carouselControlNext}
        onClick={nextSlide}
        aria-label="Next"
      >
        <span className={styles.carouselControlNextIcon}></span>
        <span className={styles.srOnly}>Next</span>
      </button>
    </div>
  );
};

export default Reference;
