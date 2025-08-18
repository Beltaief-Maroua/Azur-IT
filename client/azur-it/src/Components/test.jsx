import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "../Stytle/Test.module.css";
import MyNavbar from "./MyNavbar"

import creation from "../assets/references/4Bcreation.png";
import bee from "../assets/references/bee.png";
import delice from "../assets/references/delice.jpeg";
import enda from "../assets/references/enda.png";
import fedex from "../assets/references/fedex.jpeg";
import instm from "../assets/references/instm.png";
import pharmalys from "../assets/references/pharmalys.png";
import protectionCivile from "../assets/references/protectionCivile.jpeg";
import s2i from "../assets/references/s2i.png";
import sartex from "../assets/references/sartex.jpeg";
import figeaAero from "../assets/references/figeacAero.jpeg";
import simac from "../assets/references/simac.jpeg";
import ticGroupe from "../assets/references/ticGroupe.png";
import tnt from "../assets/references/tnt.jpeg";

const logos = [
  creation,
  bee,
  delice,
  enda,
  fedex,
  instm,
  pharmalys,
  protectionCivile,
  s2i,
  sartex,
  figeaAero,
  simac,
  ticGroupe,
  tnt,
];

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

const PartnerSlider = () => (
  <>
  <MyNavbar bgc="navbarDark" />
  <div className={style.container}>
    <h2>Ils nous ont fait confiance</h2>
    <div className={style.sliderContainer}>
      <Slider {...settings}>
        {logos.map((logo, idx) => (
          <div key={idx} className={style.slide}>
            <img src={logo} alt={`logo-${idx}`} />
          </div>
        ))}
      </Slider>
    </div>
  </div>
  </>
);

export default PartnerSlider;
