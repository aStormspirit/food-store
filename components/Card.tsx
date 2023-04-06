import React from 'react'
import Image from 'next/image'
import styles from '../styles/Card.module.css'


const Card = () => {
  return (
    <div className={styles.container}>
      <Image src={'/img/Myaso.jpg'} alt={'myaso'} width={281} height={150} />
      <h2>Курица</h2>
    </div>
  )
}

export default Card