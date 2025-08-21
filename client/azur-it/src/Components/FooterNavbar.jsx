import React, { useState } from "react";
import style from "../Stytle/FooterNavbar.module.css";
import Logo from "../assets/logos/simpleLogo.png";
import { Link } from "react-router-dom";

const FooterNavbar = (props) => {
 

  return (
    <div className={style.footerContainer} id={props.bgc}>
      <div className={style.navbarElement}>
          <Link to="/accueil" className={style.navbarBrand}>
            <img src={Logo} alt="logo" />
          </Link>
        <ul
          className={`${style.navbarNav} ${style.navbarCollapse}`}>
          <li className={`${style.navItem} ${style.active}`}>
            <Link to="/accueil" className={`${style.navLink} text-white`}>
              Accueil
            </Link>
          </li>
          <li className={style.navItem}>
            <Link to="/service" className={`${style.navLink} text-white`}>
              Services
            </Link>
          </li>
          <li className={style.navItem}>
            <Link to="/reference" className={`${style.navLink} text-white`}>
              Références
            </Link>
          </li>
          <li className={style.navItem}>
            <Link to="/partenaire" className={`${style.navLink} text-white`}>
              Partenaires
            </Link>
          </li>
          <li className={style.navItem}>
            <Link to="/contact" className={`${style.navLink} text-white`}>
              Contacts
            </Link>
          </li>
        </ul>
      </div>
      <div className={style.line}></div>
      <div className={style.copyright}>
        <p>Copyright © 2019 AZUR IT</p>
      </div>
    </div>
  );
};

export default FooterNavbar;

// import React from "react";
// import style from "../Stytle/FooterNavbar.module.css";
// import Logo from "../assets/logos/simpleLogo.png";
// import { Link } from "react-router-dom";

// const FooterNavbar = () => {
//   return (
//     <div
//       className={`${style.container} `}
//     >
//       <div
//         className={`${style.parentNavbar}`}
//       >
//         <nav
//           className={`${style.navbar} ${style.navbarLight} ${style.bgLight}`}
//         >
//           <Link to="/accueil" className={style.navbarBrand}>
//             <img src={Logo} alt="" />
//           </Link>
//         </nav>
//         <nav
//           className={`${style.navbar} ${style.navbarLight} ${style.bgLight}`}
//         >
//           <div
//             className={`${style.collapse} ${style.navbarCollapse}`}
//             id="navbarNav"
//           >
//             <ul
//               className={`${style.navbarNav}`}
//             >
//               <li className={`${style.navItem} ${style.active} `}>
//                 <Link to="/accueil" className={`${style.navLink}`}>
//                   Accueil <span className={style.srOnly}></span>
//                 </Link>
//               </li>
//               <li className={style.navItem}>
//                 <Link to="/service" className={`${style.navLink}`}>
//                   Services
//                 </Link>
//               </li>
//               <li className={style.navItem}>
//                 <Link
//                   to="/reference"
//                   className={`${style.navLink}`}
//                 >
//                   Références
//                 </Link>
//               </li>
//               <li className={`${style.navItem}`}>
//                 <Link
//                   to="/partenaire"
//                   className={`${style.navLink}`}
//                 >
//                   Partenaires
//                 </Link>
//               </li>
//               <li className={`${style.navItem}`}>
//                 <Link to="/contact" className={`${style.navLink}`}>
//                   Contacts
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </div>
//       <div
//         className={`${style.line}`}
//       ></div>
//       <div className={`${style.copyright}`}>
//         <p>Copyright © 2019 AZUR IT</p>
//       </div>
//     </div>
//   );
// };

// export default FooterNavbar;
