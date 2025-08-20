import React from "react";
import style from "../Stytle/Partner.module.css";
import { Link } from 'react-router-dom';

import vectorImage from "../assets/partnerIcon.png";

const Partner = () => {
  return (
    <div className={`${style.container}`}>
      <main
        className={`${style.partner}`}
      >
        <div className={style.vector}>
        </div>
        <div className={`${style.description} `}>
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
            className={`${style.descriptionButton}`}
          >
            <button
              className={`${style.button}`}
            >
              <Link to="/partenaire" className={`${style.link}`}> En savoir plus </Link>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Partner;
