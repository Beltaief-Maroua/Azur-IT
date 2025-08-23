import React from "react";
import style from "../Stytle/Accueil.module.css";
import Navbar from "../Components/Navbar";
import Mission from "../Components/Mission";
import InformationBox from "../Components/InformationBox";
import FooterNavbar from "../Components/FooterNavbar";

import client1 from "../assets/clients/client1.png";
import client2 from "../assets/clients/client2.jpg";
import client3 from "../assets/clients/client3.jpg";
import client4 from "../assets/clients/client4.png";
import client5 from "../assets/clients/client5.jpg";
import client6 from "../assets/clients/client6.png";
import client7 from "../assets/clients/client7.png";
import client8 from "../assets/clients/client8.png";
import client9 from "../assets/clients/client9.png";

const Accueil = () => {
  return (
    <div className={`${style.container} `}>
      <Navbar bgc="navbarLight" />
      <header
        className={`${style.header} d-flex flex-column align-items-center mt-lg-5 row-gap-3`}
      >
        <span className={`${style.headerTitle} text-white fs-3`}>
          Make things better
        </span>
        <span className={`${style.headerText} text-white fs-3`}>
          IT NEXT GENERATION
        </span>
      </header>

      <main className={`${style.main} d-flex flex-column align-items-center`}>
        <p className={`${style.mainText} m-3 text-center`}>
          Plus de 10 ans d'expérience pour aider les entreprises à atteindre
          leurs objectifs dans le monde de la technologie .
        </p>
        <div
          className={`${style.statistic} text-white d-flex justify-content-center align-items-center gap-4 mt-4 mb-3`}
        >
          <div
            className={`${style.experience} d-flex flex-column justify-content-center text-center`}
          >
            <span>
              <span className={`${style.experienceYears} `}>10+</span> ans
            </span>
            <span className={`${style.experienceText}`}>d'expérience</span>
          </div>
          <div className={`${style.separator} h2`}> | </div>
          <div
            className={`${style.projects} d-flex flex-column justify-content-center text-center`}
          >
            <span className={`${style.projectCount}`}>103</span>
            <span className={`${style.projectText}`}>projets</span>
          </div>
          <div className={`${style.separator} h2`}> | </div>
          <div
            className={`${style.clients} d-flex flex-column justify-content-center text-center`}
          >
            <span className={`${style.clientCount}`}>80</span>
            <span className={`${style.clientText}`}>clients satisfaits</span>
          </div>
          <div className={`${style.separator} h2`}> | </div>
          <div
            className={`${style.hours} d-flex flex-column justify-content-center text-center`}
          >
            <span>
              <span className={`${style.hourCount}`}>40</span> heures
            </span>
            <span className={`${style.hourText}`}>par semaine</span>
          </div>
        </div>
      </main>

      <footer>
        <div className={`${style.avatars} d-flex justify-content-center align-items-center  `}>
          <img className={style.avatar} src={client1} alt="Avatar" />
          <img className={style.avatar} src={client2} alt="Avatar" />
          <img className={style.avatar} src={client3} alt="Avatar" />
          <img className={style.avatar} src={client4} alt="Avatar" />
          <img className={style.avatar} src={client5} alt="Avatar" />
          <img className={style.avatar} src={client6} alt="Avatar" />
          <img className={style.avatar} src={client7} alt="Avatar" />
          <img className={style.avatar} src={client8} alt="Avatar" />
          <img className={style.avatar} src={client9} alt="Avatar" />
        </div>
      </footer>
      <div className={style.sections}>
        <div className={style.missionSection}>
          <Mission />
        </div>
        <div className={style.informationBoxSection}>
          <InformationBox />
        </div>
        
          <FooterNavbar />
      
      </div>
    </div>
  );
};

export default Accueil;
