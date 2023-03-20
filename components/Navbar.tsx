import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import React, { useState } from 'react'
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Burger from './menu/Burger';
import { BsWhatsapp, BsTelegram } from "react-icons/bs";
import { FaVk } from "react-icons/fa";
import CallForm from './menu/CallForm';

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const quantity = useSelector((state: any)=>state.cart.quantity)

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src='/img/telephone.png' onClick={() => setOpen(!open)} width='32' height='32' alt='telephone'></Image>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Заказать</div>
          <div className={styles.text}>{"+7(951)683-53-76"}</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href={'/'} className={styles.link}>
          <li className={styles.listItem}>Продукты</li>
          </Link>
          <li className={styles.listItem}>Доставка</li>
          <Link href={'/'} className={styles.link}>
          <Image className={styles.link} src='/img/logo.jpeg' alt='logo' width='100' height='69' />
          </Link>
          <li className={styles.listItem}>Контакты</li>
          <li className={styles.listItem}>О нас</li>
          <li className={styles.listItem}>Пункт-1</li>
        </ul>
      </div>
      <div className={styles.item} id={styles.mobile_logo}>
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
      <div className={styles.item}>
      <Link href={'/cart'} className={styles.link}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt='cart' width='30' height='30'></Image>
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