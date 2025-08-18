import React from "react";
import style from "../Stytle/FooterNavbar.module.css";
import Logo from "../assets/logos/simpleLogo.png";

const FooterNavbar = () => {
  return (
    <div
      className={`${style.container} d-flex flex-column justify-content-center align-items-center row-gap-4`}
    >
      <div
        className={`${style.parentNavbar} text-white d-flex justify-content-center align-items-center`}
      >
        <nav
          className={`${style.navbar} ${style.navbarLight} ${style.bgLight}`}
        >
          <a className={style.navbarBrand} href="x">
            <img src={Logo} alt="" />
          </a>
        </nav>
        <nav
          className={`${style.navbar} ${style.navbarLight} ${style.bgLight} navbar-expand-lg`}
        >
          <div
            className={`${style.collapse} ${style.navbarCollapse}`}
            id="navbarNav"
          >
            <ul
              className={`${style.navbarNav} d-flex justify-content-around align-items-center `}
            >
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
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div
          className={`${style.icons} text-white d-flex justify-content-center align-items-center column-gap-3 `}
        >
          <div className={`${style.instagram}`}>
            <i class="fa-brands fa-square-instagram"></i>
          </div>
          <div className={`${style.facebook}`}>
            <i class="fa-brands fa-facebook"></i>
          </div>
          <div className={`${style.instagram}`}>
            <i class="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
      <div
        className={`${style.line} d-flex justify-content-center align-items-center`}
      ></div>
      <div className={`${style.copyright} text-white `}>
        <p>Copyright © 2019 AZUR IT</p>
      </div>
    </div>
  );
};

export default FooterNavbar;
