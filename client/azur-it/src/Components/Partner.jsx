import React from "react";
import style from "../Stytle/Partner.module.css";
import vectorImage from "../assets/vector.png";

const Partner = () => {
  return (
    <div className={`${style.container}`}>
      <main
        className={`${style.partner} d-flex justify-content-around align-items-center `}
      >
        <div className={style.vector}>
          <img
            className={`${style.vectorImage} col-6`}
            src={vectorImage}
            alt="vector"
          />
        </div>
        <div
          className={`${style.description} d-flex flex-column justify-content-center align-items-center `}
        >
          <div className={style.descriptionTitle}>
            <p> Nos Partenaires </p>
          </div>
          <div className={style.descriptionText}>
            <p>
              Afin de suivre la veille technologique et proposer une gamme de
              solution de haute performance pour ses clients, AZUR IT est
              reconnu par les constructeurs et éditeurs de solutions leaders
              dans le domaine d'infrastructure IT.
            </p>
          </div>
          <div
            className={`${style.descriptionButton} d-flex justify-content-center align-items-center `}
          >
            <button
              className={`${style.button} d-flex justify-content-center align-items-center `}
            >
              En savoir plus
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Partner;
