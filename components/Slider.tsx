import React, { useState } from 'react'
import styles from '../styles/Featured.module.css'
import Image from 'next/image'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const Slider = () => {
  const [index, setIndex] = useState(0)

  const images = [
    {
      path: '/img/slider-1.jpeg',
      text: 'Бесплатная доставка',
      html: (
        <a href="" className={styles.btn__promo}>
          Сделать заказ
        </a>
      ),
    },
    {
      path: '/img/slider-2.jpeg',
      text: 'Свежее мясо',
      html: (
        <a href="" className={styles.btn__promo}>
          Сделать заказ
        </a>
      ),
    },
    {
      path: '/img/slider-3.jpeg',
      text: 'Индивидуальный подход',
      html: (
        <a href="" className={styles.btn__promo}>
          Сделать заказ
        </a>
      ),
    },
  ]

  const handleArrow = (direction: any) => {
    if (direction === 'l') {
      setIndex(index !== 0 ? index - 1 : 2)
    }
    if (direction === 'r') {
      setIndex(index !== 2 ? index + 1 : 0)
    }
  }
  return (
    <section className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow('l')}
      >
        <div className={styles.arrowWrapper}>
          <FaAngleLeft />
        </div>
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <h1 className={styles.sliderText}>{img.text}</h1>
            <Image src={img.path} fill key={i} alt="featured" />
            {img.html}
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow('r')}
      >
        <div className={styles.arrowWrapper}>
          <FaAngleRight />
        </div>
      </div>
    </section>
  )
}

export default Slider
