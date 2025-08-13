import React from 'react'
import style from '../Stytle/OurServices.module.css'
import MyNavbar from '../Components/MyNavbar';  


const OurServices=()=> {
  return (
    <div className={style.container}>
      <p className={style.heading}>Nos services</p>
      <div className={style.service}>
        <div className={style.serviceImage}>
            <img src="" alt="serviceImage"/>
        </div>
        <div className={style.serviceContent}>
            <div className={style.serviceTitle}>

            </div>
            <div className={style.serviceDescription}>

            </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices
