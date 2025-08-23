import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "../Stytle/Partenaire.module.css";
import Navbar from "../Components/Navbar";
import FooterNavbar from "../Components/FooterNavbar";

import dell from "../assets/partenaires/dell.png";
import hillstone from "../assets/partenaires/hillstone.png";
import hp from "../assets/partenaires/hp.png";
import ubiquiti from "../assets/partenaires/ubiquiti.jpeg";
import veeam from "../assets/partenaires/veeam.png";
import vembu from "../assets/partenaires/vembu.png";
import watchGuard from "../assets/partenaires/watchGuard.png";

const logos = [dell, hillstone, hp, ubiquiti, veeam, vembu, watchGuard];

const settings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 600, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

const Partenaire = () => (
  <>
    <Navbar bgc="navbarDark" />
    <div className={style.container}>
      <p className={style.title}>Nos Partenaires</p>
      <div className={style.sliderContainer}>
        <Slider {...settings}>
          {logos.map((logo, idx) => (
            <div key={idx} className={style.slide}>
              <img src={logo} alt={`logo-${idx}`} />
            </div>
          ))}
        </Slider>
      </div>
      <div className={style.cardGrid}>
        {logos.map((logo, idx) => (
          <div key={idx} className={style.card}>
            <img src={logo} alt={`logo-${idx}`} />
          </div>
        ))}
      </div>
    </div>
    <div className="row m-0 p-0">
      <FooterNavbar />
    </div>
  </>
);

export default Partenaire;
