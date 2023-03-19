import React, {useState, useCallback} from 'react'
import styles from '../../styles/Burger.module.css';
import Link from 'next/link';


const Burger = () => {
    
  return (
    <div>        
        <input type={'checkbox'} id={styles.check_menu}/>
    <div className={styles.burger_wrapper}>
    <span className={styles.burger_span}></span>

{/* 
    <div id={styles.burger} className={styles.burger_1}></div>
    <div id={styles.burger} className={styles.burger_2}></div>
    <div id={styles.burger} className={styles.burger_3}></div>
    <div id={styles.burger} className={styles.burger_4}></div>} */}

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