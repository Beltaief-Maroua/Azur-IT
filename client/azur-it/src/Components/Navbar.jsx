import React, { useState } from "react";
import Logo from "../assets/logos/simpleLogo.png";
import style from "../Stytle/Navbar.module.css";
import "../Stytle/Navbar.css"
import { Link } from 'react-router-dom';

const MyNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <div className={style.container} id={props.bgc}>
      <nav className={style.navbar}>
      <Link to="/accueil" className={style.navbarBrand}>
        <img src={Logo} alt="logo" />
      </Link>
        <button
          className={style.navbarToggler}
          onClick={toggleNavbar}
        >
          &#9776;
        </button>
        <ul className={`${style.navbarNav} ${isOpen ? style.show : ""}`}>
    <li className={style.navItem}><Link to="/accueil" className={style.navLink}>Accueil</Link></li>
    <li className={style.navItem}><Link to="/service" className={style.navLink}>Services</Link></li>
    <li className={style.navItem}><Link to="/reference" className={style.navLink}>Références</Link></li>
    <li className={style.navItem}><Link to="/partenaire" className={style.navLink}>Partenaires</Link></li>
    <li className={style.navItem}><Link to="/contact" className={style.navLink}>Contacts</Link></li>
  </ul>
  </nav>
          
    </div>
  );
};

export default MyNavbar;











// import React from "react";
// import Logo from "../assets/logos/simpleLogo.png";
// import style from "../Stytle/MyNavbar.module.css";
// import { Link } from 'react-router-dom';

// import '../Stytle/MyNavbar.css'

// const MyNavbar = (props) => {
//   return (
//     <div className={style.container} id={props.bgc}>
//       <nav>
//       </nav>
//       <nav className={`${style.navbar} ${style.navbarLight} ${style.bgLight}`}>
//         <Link to="/accueil" className={style.navbarBrand} >
//           <img
//             src={Logo}
//             alt="logo"
//           />

//         </Link>
//       </nav>

//       <nav
//         className={`${style.navbar} ${style.navbarLight} ${style.bgLight} navbar-expand-lg`}
//       >
//         <div
//           className={`${style.collapse} ${style.navbarCollapse}`}
//           id="navbarNav"
//         >
//           <ul className={`${style.navbarNav} d-flex justify-content-around align-items-center `}>
//             <li className={`${style.navItem} ${style.active} `}>
//               <Link to="/accueil" className={`${style.navLink} text-white `} >
//                 Accueil <span className={style.srOnly}></span>
//               </Link>
//             </li>
//             <li className={style.navItem}>
//               <Link to="/service" className={`${style.navLink} text-white `} >
//                 Services
//               </Link>
//             </li>
//             <li className={style.navItem}>
//               <Link to="/reference" className={`${style.navLink} text-white `} >
//                 Références
//               </Link>
//             </li>
//             <li className={`${style.navItem}`}>
//               <Link to="/partenaire" className={`${style.navLink} text-white `} >
//                 Partenaires
//               </Link>
//             </li>
//             <li className={`${style.navItem}`}>
//               <Link to="/contact" className={`${style.navLink} text-white `} >
//                 Contacts
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default MyNavbar;
