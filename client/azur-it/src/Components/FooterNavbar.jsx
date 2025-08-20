import React from "react";
import style from "../Stytle/FooterNavbar.module.css";
import Logo from "../assets/logos/simpleLogo.png";
import { Link } from "react-router-dom";

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
          <Link to="/accueil" className={style.navbarBrand}>
            <img src={Logo} alt="" />
          </Link>
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
                <Link to="/accueil" className={`${style.navLink} text-white `}>
                  Accueil <span className={style.srOnly}></span>
                </Link>
              </li>
              <li className={style.navItem}>
                <Link to="/service" className={`${style.navLink} text-white `}>
                  Services
                </Link>
              </li>
              <li className={style.navItem}>
                <Link
                  to="/reference"
                  className={`${style.navLink} text-white `}
                >
                  Références
                </Link>
              </li>
              <li className={`${style.navItem}`}>
                <Link
                  to="/partenaire"
                  className={`${style.navLink} text-white `}
                >
                  Partenaires
                </Link>
              </li>
              <li className={`${style.navItem}`}>
                <Link to="/contact" className={`${style.navLink} text-white `}>
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div
          className={`${style.icons} text-white d-flex justify-content-center align-items-center column-gap-3 `}
        >
          <div className={`${style.instagram}`}>
            <i className="fa-brands fa-square-instagram"></i>
          </div>
          <div className={`${style.facebook}`}>
            <i className="fa-brands fa-facebook"></i>
          </div>
          <div className={`${style.instagram}`}>
            <i className="fa-brands fa-linkedin"></i>
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
