import React from 'react'
import styles from '../../styles/Burger.module.css';
import Link from 'next/link';


const Burger = () => {
    
  return (
    <div>        
        <input type={'checkbox'} className={styles.check_menu} id={styles.check_menu}/>
    <div className={styles.burger_wrapper}>
      <span className={styles.burger_span}></span>
    </div>
    <div className={styles.burger_close}>
    <span className={styles.burger_close}></span>
    </div>
    <nav className={styles.mobile_menu}>
      <Link href={'#'}>Продукты</Link>
      <Link href={'#'}>Меню</Link>
      <Link href={'#'}>О нас</Link>
      <Link href={'#'}>Контакты</Link>  
    </nav> 
    </div>
  )
}

export default Burger