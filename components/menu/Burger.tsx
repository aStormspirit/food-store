import React, { useState } from 'react'
import styles from '../../styles/Burger.module.css'
import Link from 'next/link'

const Burger = () => {
  const [open, setOpen] = useState<boolean>(false)

  let style = {
    width: 'calc(100% - 100px)',
  }

  function menuOpen() {
    let menu = document.getElementsByTagName('nav')
  }

  return (
    <div>
      <div onClick={() => setOpen(!open)} className={styles.burger_wrapper}>
        <span
          className={open ? styles.burger_hidden : styles.burger_span}
        ></span>
        <span
          className={open ? styles.burger_hidden : styles.burger_span}
        ></span>
        <span
          className={open ? styles.burger_hidden : styles.burger_span}
        ></span>
      </div>
      <nav className={styles.mobile_menu} style={open ? style : {}}>
        <Link onClick={() => setOpen(!open)} href={'/'}>
          Главная
        </Link>
        <Link onClick={() => setOpen(!open)} href={'/catalog'}>
          Каталог
        </Link>
        <Link onClick={() => setOpen(!open)} href={'/contacts'}>
          Контакты
        </Link>
        <Link onClick={() => setOpen(!open)} href={'#'}>
          Отзывы
        </Link>
        <Link onClick={() => setOpen(!open)} href={'/delivery'}>
          Доставка
        </Link>
      </nav>
    </div>
  )
}

export default Burger
