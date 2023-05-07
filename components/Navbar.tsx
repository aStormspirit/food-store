import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import Burger from './menu/Burger'
import CallForm from './menu/CallForm'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const quantity = useSelector((state: any) => state.cart.quantity)

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src="/img/telephone.png"
            onClick={() => setOpen(!open)}
            width="32"
            height="32"
            alt="telephone"
            loading="lazy"
          ></Image>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Заказать</div>
          <a type="tel" href="tel:+79516835376" className={styles.text}>
            {'+7(951)683-53-76'}
          </a>
        </div>
      </div>
      <div className={styles.item}>
        <Link href={'/'} className={styles.link}>
          <Image
            className={styles.link}
            src="/img/logo.jpg"
            alt="logo"
            width="251"
            height="106"
            loading="lazy"
          />
        </Link>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href={'/'} className={styles.link}>
            <li className={styles.listItem}>Главная</li>
          </Link>
          <Link href={'/catalog'} className={styles.link}>
            <li className={styles.listItem}>Каталог</li>
          </Link>
          <Link href={'/delivery'} className={styles.link}>
            <li className={styles.listItem}>Доставка</li>
          </Link>
          <Link href={'/contacts'} className={styles.link}>
            <li className={styles.listItem}>Контакты</li>
          </Link>
          <li className={styles.listItem}>Отзывы</li>
        </ul>
      </div>
      <div className={styles.item}>
        <Link href={'/cart'} className={styles.link}>
          <div className={styles.cart}>
            <Image
              src="/img/cart.png"
              alt="cart"
              width="30"
              height="30"
              loading="lazy"
            ></Image>
            <div className={styles.counter}>{quantity}</div>
          </div>
        </Link>
      </div>
      {open && <CallForm setOpen={setOpen} />}
      <div className={styles.item}>
        <Burger />
      </div>
    </div>
  )
}

export default Navbar
