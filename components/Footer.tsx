import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { BsWhatsapp, BsTelegram } from 'react-icons/bs'
import { FaVk } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item} style={{ flexDirection: 'column' }}>
        <div className={styles.imgWrapper}>
          <Image src="/img/logo.jpeg" alt="logo" width="80" height="69"></Image>
        </div>
        <p className={styles.desc}>Магазин HUBерма</p>
        <div className={styles.link}>
          <Link href={'/'}>Политика конфиденциальности</Link>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.listWrapper}>
          <ul className={styles.list}>
            <li className={styles.listItem}>Каталог</li>
            <li className={styles.listItem}>О доставке</li>
            <li className={styles.listItem}>Акции</li>
            <li className={styles.listItem}>Адрес производства</li>
          </ul>
        </div>
        <div className={styles.listWrapper}>
          <ul className={styles.list}>
            <li className={styles.listItem}>О компании</li>
            <li className={styles.listItem}>Франшиза</li>
            <li className={styles.listItem}>Аренда помещений</li>
            <li className={styles.listItem}>Новым поставщикам</li>
          </ul>
        </div>
        <div className={styles.listWrapper}>
          <ul className={styles.list}>
            <li className={styles.listItem}>Курица</li>
            <li className={styles.listItem}>Свинина</li>
            <li className={styles.listItem}>Говядина</li>
            <li className={styles.listItem}>Индейка</li>
          </ul>
        </div>
      </div>
      <div className={styles.icons}>
        <div>
          <BsWhatsapp />
        </div>
        <div>
          <BsTelegram />
        </div>
        <div>
          <FaVk />
        </div>
      </div>
    </div>
  )
}

export default Footer
