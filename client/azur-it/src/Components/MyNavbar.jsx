import React from "react";
import Logo from "../assets/logos/simpleLogo.png";
import style from "../Stytle/MyNavbar.module.css";
import { Link } from 'react-router-dom';

import '../Stytle/MyNavbar.css'

const MyNavbar = (props) => {
  return (
    <div className={style.container} id={props.bgc}>
      <nav>
      </nav>
      <nav className={`${style.navbar} ${style.navbarLight} ${style.bgLight}`}>
        <Link to="/accueil" className={style.navbarBrand} >
          <img
            src={Logo}
            alt=""
          />
        </Link>
      </nav>

      <nav
        className={`${style.navbar} ${style.navbarLight} ${style.bgLight} navbar-expand-lg`}
      >
        {/* <a className={style.navbarBrand} href="x">
          Navbar
        </a>
        <button
          className={style.navbarToggler}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={style.navbarTogglerIcon}></span>
        </button> */}
        <div
          className={`${style.collapse} ${style.navbarCollapse}`}
          id="navbarNav"
        >
          <ul className={`${style.navbarNav} d-flex justify-content-around align-items-center `}>
            <li className={`${style.navItem} ${style.active} `}>
              <Link to="/accueil" className={`${style.navLink} text-white `} >
                Accueil <span className={style.srOnly}></span>
              </Link>
            </li>
            <li className={style.navItem}>
              <Link to="/service" className={`${style.navLink} text-white `} >
                Services
              </Link>
            </li>
            <li className={style.navItem}>
              <Link to="/reference" className={`${style.navLink} text-white `} >
                Références
              </Link>
            </li>
            <li className={`${style.navItem}`}>
              <Link to="/partenaire" className={`${style.navLink} text-white `} >
                Partenaires
              </Link>
            </li>
            {/* <li className={`${style.navItem}`}>
              <a className={`${style.navLink} text-white `} >
                Événements
              </a>
            </li> */}
            <li className={`${style.navItem}`}>
              <Link to="/contact" className={`${style.navLink} text-white `} >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MyNavbar;

/* <div className={style.logo}>
        <a >
          <img src={Logo} alt="Logo" width="70" height="70" />
        </a>
      </div>
      <div className={style.section}>
        <nav className={style.navbar}>
          <ul className={`${style.navList} ${style.tab} d-flex justify-content-center `}>
            <li className={`${style.navItem} ${style.item}`}>
              <a href="x" className={`${style.navLink} ${style.link}`}>
                Accueil
              </a>
            </li>
            <li className={`${style.navItem} ${style.item}`}>
              <a href="x" className={`${style.navLink} ${style.link}`}>
                Services
              </a>
            </li>
            <li className={`${style.navItem} ${style.item}`}>
              <a href="x" className={`${style.navLink} ${style.link}`}>
                Références
              </a>
            </li>
            <li className={`${style.navItem} ${style.item}`}>
              <a href="x" className={`${style.navLink} ${style.link}`}>
                Partenaires
              </a>
            </li>
            <li className={`${style.navItem} ${style.item}`}>
              <a href="x" className={`${style.navLink} ${style.link}`}>
                Événements
              </a>
            </li>
            <li className={`${style.navItem} ${style.item}`}>
              <a href="x" className={`${style.navLink} ${style.link}`}>
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </div> */
