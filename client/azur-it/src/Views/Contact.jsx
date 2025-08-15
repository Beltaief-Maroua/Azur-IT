import React from "react";
import style from "../Stytle/Contact.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "../Components/MyNavbar";
import FooterNavbar from "../Components/FooterNavbar";

const Contact = () => {
  return (
    <div>
      <MyNavbar bgc="navbarDark" />
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.informations}>
            <div className={style.informationsItem}>
              <div className={style.informationsTitle}>
                <p>Développons votre entreprise ensemble!</p>
              </div>
              <div className={style.informationsDetails}>
                <div className={style.adressDetails}>
                  <div className={style.icon}>
                    <i class="fa-solid fa-location-dot"></i>
                  </div>
                  <div className={style.adressText}>
                    <p>72 Avenue Maouia Ibn Abi Sofiene El Menzah 7 2091</p>
                  </div>
                </div>
                <div className={style.mailDetails}>
                  <div className={style.icon}>
                    <i class="fa-solid fa-envelope"></i>
                  </div>
                  <div className={style.mailText}>
                    <p>contact@it-azur.com</p>
                    <p>commercial@it-azur.com</p>
                  </div>
                </div>
                <div className={style.phoneDetails}>
                  <div className={style.icon}>
                    <i class="fa-solid fa-mobile-screen"></i>
                  </div>
                  <div className={style.phoneText}>
                    <p>Mobile: +216 92 172 290</p>
                  </div>
                </div>
                <div className={style.faxDetails}>
                  <div className={style.icon}>
                    <i class="fa-solid fa-fax"></i>
                  </div>
                  <div className={style.faxText}>
                    <p>Fax : +216 70 740 967</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.form}>
            <form className={style.formulaire}>
              <div className={style.formGroup}>
                <label htmlFor="name" className={style.formLabel}>
                  Nom<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Nom et Prénom"
                  className={style.formControl}
                  id="name"
                  required
                />
              </div>
              <div className={style.formGroup}>
                <label htmlFor="email" className={style.formLabel}>
                  Email<span>*</span>
                </label>
                <input
                  type="email"
                  className={style.formControl}
                  id="email"
                  required
                />
              </div>
              <div className={style.formGroup}>
                <label htmlFor="message" className={style.formLabel}>
                  Message
                </label>
                <textarea
                  className={style.textarea}
                  id="message"
                  rows={6}
                  maxLength={3000}
                  required
                  placeholder="Votre message ici (max 300 caractères)"
                ></textarea>
              </div>
              <div className={style.buttonContainer}>
                <button type="submit" className={style.button}>
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FooterNavbar />
    </div>
  );
};

export default Contact;
