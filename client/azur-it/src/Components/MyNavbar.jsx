import React from "react";
import Logo from "../assets/simpleLogo.png";
import style from "../Stytle/MyNavbar.module.css";

const MyNavbar = () => {
  return (
    <div className={style.container}>
      <nav className={`${style.navbar} ${style.navbarLight} ${style.bgLight}`}>
        <a className={style.navbarBrand} href="x">
          <img
            src={Logo}
            alt=""
          />
        </a>
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
              <a className={`${style.navLink} text-white `} href="x">
                Accueil <span className={style.srOnly}></span>
              </a>
            </li>
            <li className={style.navItem}>
              <a className={`${style.navLink} text-white `} href="x">
                Services
              </a>
            </li>
            <li className={style.navItem}>
              <a className={`${style.navLink} text-white `} href="x">
                Références
              </a>
            </li>
            <li className={`${style.navItem}`}>
              <a className={`${style.navLink} text-white `} href="x">
                Partenaires
              </a>
            </li>
            <li className={`${style.navItem}`}>
              <a className={`${style.navLink} text-white `} href="x">
                Événements
              </a>
            </li>
            <li className={`${style.navItem}`}>
              <a className={`${style.navLink} text-white `} href="x">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MyNavbar;

/* <div className={style.logo}>
        <a href="x">
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
