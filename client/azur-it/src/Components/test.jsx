import React from 'react'
import style from '../Stytle/Test.module.css'



const Service=()=> {
  return (
  <div>
      <div
        id="carouselExampleIndicators"
        className={`${style.carousel} slide`}
        data-ride="carousel"
      >
        <ol className={style.carouselIndicators}>
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className={style.active}
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className={style.carouselInner}>
          <div className={`${style.carouselItem} ${style.active}`}>
            <img className={style.carouselImg} src="..." alt="First slide" />
          </div>
          <div className={style.carouselItem}>
            <img className={style.carouselImg} src="..." alt="Second slide" />
          </div>
          <div className={style.carouselItem}>
            <img className={style.carouselImg} src="..." alt="Third slide" />
          </div>
        </div>
        <a
          className={style.carouselControlPrev}
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className={style.carouselControlPrevIcon} aria-hidden="true"></span>
          <span className={style.srOnly}>Previous</span>
        </a>
        <a
          className={style.carouselControlNext}
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className={style.carouselControlNextIcon} aria-hidden="true"></span>
          <span className={style.srOnly}>Next</span>
        </a>
      </div>
    </div>
  )
}

export default Service
