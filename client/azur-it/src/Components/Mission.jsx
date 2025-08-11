import React from 'react'
import { GiPuzzle } from "react-icons/gi";
import style from "../Stytle/Mission.module.css"

const cardsData = [
  {
    icon: <GiPuzzle className={`${style.cardIcon}`} />,
    title: "Intégrateur IT",
    text: "Mise en place efficace des infrastructures Datacenter modernes et sécurisées",
  },
  {
    icon: <i className={`${style.cardIcon} fa-solid fa-arrows-down-to-people`}></i>,
    title: "Consulting",
    text: "Alignement optimal de vos solutions IT aux besoins spécifiques de votre métier",
  },
  {
    icon: <i className={`${style.cardIcon} fa-solid fa-handshake`}></i>,
    title: "Accompagnement",
    text: "AZUR IT déploie des infrastructures fiables pour développer les entreprises",
  },
];

const Mission=()=> {
  return (
    <div className={style.container}>
      <p className={style.mainTitle}>Nos Missions</p>
      <div className={`${style.missions} d-flex justify-content-center align-items-center`}>
        {cardsData.map((card, idx) => (
          <div className={style.card} key={idx}>
            <div className={`${style.cardIconContainer} d-flex justify-content-center align-items-center`}>
                {card.icon}
            </div>
            
            <p className={style.cardTitle}>{card.title}</p>
            <p className={style.cardText}>{card.text}</p>
            <button className={`${style.cardButton} d-flex justify-content-center align-items-center`}>En savoir plus</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mission
