import React, { useState } from 'react'
import styles from '../styles/Featured.module.css'
import Image from 'next/image'

const Slider = () => {
  const [index, setIndex] = useState(0)

  const images = [
    '/img/slider-1.jpeg',
    '/img/slider-2.jpeg',
    '/img/slider-3.jpeg',
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
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow('l')}
      >
        <Image src="/img/arrowl.png" alt="arrowleft" />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} key={i} alt="featured" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow('r')}
      >
        <Image src="/img/arrowr.png" alt="arrowleft" />
      </div>
    </div>
  )
}

export default Slider
