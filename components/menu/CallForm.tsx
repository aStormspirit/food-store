import React, { useState } from 'react'
import styles from '../../styles/CallForm.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import axios from 'axios'
import { NextPage } from 'next'

const CallForm: NextPage<any> = ({ setOpen }) => {
  const [number, setNumber] = useState<string>('')
  const [valid, setValid] = useState<boolean>(true)

  function sendNumber(number: string) {
    if (number == '') {
      setValid(false)
      return false
    }
    let url =
      'https://api.telegram.org/bot6221829880:AAGnKgHTu2F55iY5pnDGvyofSpACmsKLTww/sendMessage?chat_id=1038663358&text='
    url += number
    axios.get(url)
    setOpen(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.close}>
          <AiOutlineClose
            className={styles.svg}
            onClick={() => setOpen(false)}
          />
        </div>
        <h1 className={styles.title}>
          Оставьте ваш номер телефона и мы перезвоним
        </h1>
        <div>
          <input
            placeholder="+7 (___) ___-__-__"
            type="tel"
            className={valid ? styles.input : styles.error}
            onChange={(e) => setNumber(e.target.value)}
          />
          <div>
            <button
              onClick={() => sendNumber(number)}
              className={styles.button}
            >
              Отправить
            </button>
          </div>
        </div>
        <div className={styles.formText}>
          <p>
            {' '}
            Нажимая «отправить», вы соглашаетесь с{' '}
            <Link
              className={styles.formLink}
              href="/Политика обработки персональных данных.docx.pdf"
            >
              политикой обработки и хранения персональных данных{' '}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CallForm
