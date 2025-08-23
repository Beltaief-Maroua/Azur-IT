import React from "react";
import { GiPuzzle } from "react-icons/gi";
import style from "../Stytle/Mission.module.css";
import { Link } from "react-router-dom";

const cardsData = [
  {
    icon: <GiPuzzle className={`${style.cardIcon}`} />,
    title: "Intégrateur IT",
    text: "Mise en place efficace des infrastructures Datacenter modernes et sécurisées",
  },
  {
    icon: (
      <i className={`${style.cardIcon} fa-solid fa-arrows-down-to-people`}></i>
    ),
    title: "Consulting",
    text: "Alignement optimal de vos solutions IT aux besoins spécifiques de votre métier",
  },
  {
    icon: <i className={`${style.cardIcon} fa-solid fa-handshake`}></i>,
    title: "Accompagnement",
    text: "AZUR IT déploie des infrastructures fiables pour développer les entreprises",
  },
];

const Mission = () => {
  return (
    <div className={style.container}>
      <p className={style.mainTitle}>Nos Missions</p>
      <div className={`${style.missions}`}>
        {cardsData.map((card, idx) => (
          <div className={style.card} key={idx}>
            <div className={`${style.cardIconContainer}`}>{card.icon}</div>

            <p className={style.cardTitle}>{card.title}</p>
            <p className={style.cardText}>{card.text}</p>
            <button className={`${style.cardButton}`}>
              <Link to="/service" className={style.link}>
                En savoir plus
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;
