import React from 'react'
import style from '../Stytle/Service.module.css'
import MyNavbar from '../Components/MyNavbar';
import FooterNavbar from '../Components/FooterNavbar';
import integrator from '../assets/services/integrator.png'
import process from '../assets/services/process.png'
import storage from '../assets/services/storage.png'
import application from '../assets/services/application.png'
import security from '../assets/services/security.png'

const serviceData = [
  {
    image: integrator,
    title: "Intégrateur IT",
    description: 
    <div>
      <p>
        AZUR IT est un intégrateur de systèmes, spécialisé dans le domaine de l’infrastructure.
        Pour la construction des « Datacenter » de nos clients, nous avons défini quatre domaines d’intervention essentiels :
      </p>
      <ul>
        <li>Process</li>
        <li>Stockage</li>
        <li>Applications</li>
        <li>Réseau et sécurité</li>
      </ul>
      <p>
        Pour chacun de ces domaines, nous avons choisi les meilleures technologies et un certain nombre de partenaires stratégiques.
        Combinés avec un effort continu pour vous offrir l’excellence de nos services,
        ces 4 domaines d’intervention constituent ce que nous appelons le « Cercle Magique » des solutions intégrées.
      </p>
    </div>,
  },
  {
    image: process,
    title: "Process",
    description: 
    <div>
      <p>
        L’efficacité et la rapidité avec laquelle les données brutes sont transformées en informations fiables 
        et utiles sont autant de facteurs importants pour l’avenir des entreprises.
        Vos utilisateurs doivent être en mesure d’accéder à l’information n’importe où et n’importe quand.
      </p>
      <p>
        Chez AZUR IT, nous aidons nos clients à atteindre cet objectif en développant des solutions sur mesure, 
        basées sur une conception personnalisée d’infrastructures informatiques combinée avec des technologies de pointe. 
        L’objectif est de vous fournir une architecture adaptée, répondant à vos besoins actuels et futurs.
        Consolidation : Isolation, virtualisation, partitionnement, serveurs, ...
      </p>
      <p>
        AZUR IT a défini une approche pour vous aider à construire la meilleure architecture en fonction de votre environnement.
      </p>
    </div>
  },
  {
    image: storage,
    title: "Stockage",
    description: 
    <div>
      <p>
        Le but majeur d’un « Datacenter » est de pouvoir stocker, en un seul et même lieu, les données de votre entreprise : 
        les données de vos clients, les données de vos services de facturation et de comptabilité, les données de vos équipes « métiers », etc…
      </p>
      <p>
        La capacité de stockage est essentielle car toutes les entreprises sont actuellement témoins 
        d’une croissance exponentielle de la quantité de données à stocker. Ces données sont essentielles, 
        voire vitales pour le bon fonctionnement de votre entreprise. 
        Il est donc primordial de les gérer aussi efficacement que possible.
      </p>
      <p>
        Dans ce domaine, AZUR IT propose des solutions adaptées afin d’aider votre entreprise à stocker, sécuriser et gérer ces données.
      </p>
    </div>,
  },
  {
    image: application,
    title: "Applications",
    description: 
    <div>
      <p>
        Chaque entreprise a ses propres besoins et ses propres règles d’utilisation de l’information stockée.
      </p>
      <p>
        AZUR IT vous aide à déployer des infrastructures d’applications sur-mesure pour vos besoins spécifiques, 
        comme par exemple vos outils de collaboration ou votre messagerie, vos applications spécifiques et vos bases de données.
      </p>
    </div>,
  },
  {
    image: security,
    title: "Réseaux & Sécurité",
    description: 
    <div>
      <p>
        L’information est probablement l’atout le plus précieux de votre entreprise. Elle se doit donc d’être protégée des regards indiscrets de l’extérieur.
      </p>
      <p>
        AZUR IT peut vous aider à construire votre réseau et mettre en œuvre la sécurité adaptée à votre infrastructure 
        pour permettre à vos utilisateurs d’accéder rapidement et de façon permanente à leurs données, 
        tout en protégeant au maximum vos informations contre les attaques.
      </p>
      <p>
        Nous pouvons vous aider à le faire sans entraver l’accès de vos employés à l’information dont ils ont besoin 
        (et à laquelle ils ont autorisé l’accès), où et quand ils en ont besoin.
      </p>
    </div>,
  },
];

const Service=()=> {
  return (
      <>
      <div className="row m-0 p-0">
        <div className={`${style.container} container-fluid m-0 p-0`} >

    <MyNavbar bgc="navbarDark"/>
    <p className={style.heading}>Nos services</p>
    <div className={style.serviceList}>
      {serviceData.map((service, idx) => (
        <div className={style.service} key={idx}>
          <div className={style.serviceImage}>
            <img src={service.image} alt={service.title} />
          </div>
          <div className={style.serviceContent}>
            <div className={style.serviceTitle}>
              {service.title}
            </div>
            <div className={style.serviceDescription}>
              {service.description}
            </div>
          </div>
        </div>
      ))}
    </div>
        
  </div>
      </div>
      <div className="row m-0 p-0">
      <FooterNavbar/>
      </div>
    

      
    
  
  </>
  )
}

export default Service
