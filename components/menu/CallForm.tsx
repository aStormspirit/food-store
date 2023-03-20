import React, { useState } from 'react'
import styles from '../../styles/CallForm.module.css'
import {AiOutlineClose} from 'react-icons/ai'
import Link from 'next/link'


const CallForm = ({setOpen}) => {
    const [number, setNumber] = useState('')

  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
      <div className={styles.close}>
        <AiOutlineClose className={styles.svg} onClick={() => setOpen(false)} />
      </div>
        <h1 className={styles.title}>Оставьте ваш номер телефона и мы перезвоним</h1>
        <div className={styles.item}>
                <input placeholder="+7 (___) ___-__-__" type="tel"  className={styles.input} onChange={(e) => setNumber(e.target.value)} />
        </div>
        <button className={styles.button}>
                  Отправить
        </button>
        <div className={styles.formText}>
        <p>	 Нажимая «отправить», вы соглашаетесь с <Link className={styles.formLink} href="/Политика обработки персональных данных.docx.pdf">политикой обработки и хранения персональных данных </Link>
        </p></div>
    </div>
</div>
  )
}

export default CallForm