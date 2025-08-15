import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import Accueil from './Views/Accueil';
import Mission from './Components/Mission';
import Partner from './Components/Partner';
import FooterNavbar from './Components/FooterNavbar';
import Service from './Views/Service';
import Contact from './Views/Contact'
import Reference from './Views/Reference';
import Test from './Components/test'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Accueil /> */}
    {/* <Mission /> */}
    {/* <Partner /> */}
    {/* <FooterNavbar /> */}
    {/* <Service /> */}
    <Contact />
    {/* <Reference /> */}
    {/* <Test/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
