import React from 'react'
import Image from 'next/image'
import styles from '../styles/Banner.module.css'
import useDeviceSize from './hooks/UseDeviceSize'


const Banner = () => {
  const [width, height] = useDeviceSize();

  let ImgWidth = 1200

  if(ImgWidth < 560){
    ImgWidth = 400
  }

  console.log(width, ImgWidth)

  return (
    <div className={styles.container}>
        <div className={styles.imageWrapper}>
        <Image className={styles.image}
              src={'/img/mainimg.webp'}
              alt={'mainimg'} 
              loading={'lazy'} 
              width={width < 560 ? 350 : 1200}
              height={width < 560 ? 200 : 400} 
              sizes="(max-width: 480px) 100vw,
              (max-width: 780px) 100vw,
              33vw" />
        </div>
        <div className={styles.textWrapper}>
        <p className={styles.text}>Доставка мяса с производства!</p>
        <p className={styles.text}>Наша курица - это вкусное и здоровое мясо! Закажите сегодня и получите отличное питание домой в течение двух дней.</p>
        </div>
    </div>
  )
}

export default Banner