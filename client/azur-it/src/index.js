import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import Accueil from './Views/Accueil';

import FooterNavbar from './Components/FooterNavbar';
import Service from './Views/Service';
import Contact from './Views/Contact'
import Reference from './Views/Reference';
import Partenaire from './Views/Partenaire';
import Test from './Components/test'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Accueil />
    {/* <FooterNavbar /> */}
    {/* <Service /> */}
    {/* <Contact /> */}
    {/* <Reference /> */}
    {/* <Partenaire /> */}
    {/* <Test/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
