import React from 'react'
import styles from '../styles/Delivery.module.css'
import { BsFillCreditCard2BackFill } from 'react-icons/bs'
import { GiWallet } from 'react-icons/gi'

const delivery = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>ДОСТАВКА И ОПЛАТА</h1>
      <div className={styles.contentWrapper}>
        <div>
          <h2>Стоймость доставки</h2>
          <h3>Санкт-Петербург</h3>
          <p>от 2000-2999 руб. – 150 рублей,</p>
          <p>от 3000 руб. - доставляем бесплатно</p>
        </div>
        <div>
          <h3>Ленинградская область</h3>
          <p>от 2000-3999 руб. – 150 рублей,</p>
          <p>от 4000 до 4999 руб. – 100 рублей,</p>
          <p>от 5000 руб. – доставляем бесплатно</p>
        </div>
        <div>
          <h3>Санкт-Петербург</h3>
          <p>Минимальная сумма заказа</p>
          <p>В пределах КАД – 2 000 руб.</p>
          <p>Интервалы доставки:</p>
          <p>ПН - СБ: 11.00 - 15.00, 15.00 - 19.00, 19.00 - 22.00</p> 
        </div>
      </div>
      <div className={styles.info}>
        <h2 className={styles.infoText}>Мы доставляем мясо с производства Оно упаковано в заводские упаковки по 1-3 кг</h2>
        <p className={styles.infoContent}>Цену на заказ определяет вес мяса, который в каждой упаковке индивидуален В заказе возможна погрешность по весу и стоимости в пределах 10%</p>
      </div>
      <h1 className={styles.text}>ВАРИАНТЫ ОПЛАТЫ</h1>
      <div>
        <div>
          <div className={styles.box}>
            <div className={styles.svgWrapper}>
            <BsFillCreditCard2BackFill />
            </div>
            <h2 className={styles.boxTitle}>Банковской картой</h2>
            <span className={styles.boxText}>при получении</span>
          </div>
          <div className={styles.box}>
          <div className={styles.svgWrapper}>
            <GiWallet />
          </div>
            <h2 className={styles.boxTitle}>Оплата наличными</h2>
            <span className={styles.boxText}>при получении</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default delivery