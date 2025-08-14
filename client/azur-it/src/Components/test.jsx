import React from 'react'
import style from '../Stytle/Test.module.css'



const Service=()=> {
  return (
  <div className={style.container}>
        <form className={style.formulaire}>
          <div className={style.formGroup}>
            <label htmlFor="name" className={style.formLabel}>
              Nom
            </label>
            <input
              type="text"
              className={style.formControl}
              id="name"
              required
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="email" className={style.formLabel}>
              Email
            </label>
            <input
              type="email"
              className={style.formControl}
              id="email"
              required
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="subject" className={style.formLabel}>
              Sujet
            </label>
            <input type="text" className={style.formControl} id="subject" />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="message" className={style.formLabel}>
              Message
            </label>
            <textarea
              className={style.textarea}
              id="message"
              rows={8}
              maxLength={3000}
              required
              placeholder="Votre message ici (max 3000 caractères)"
            >
            </textarea>
          </div>
          <button type="submit" className={style.button}>
            Envoyer
          </button>
        </form>
  </div>
  )
}

export default Service
