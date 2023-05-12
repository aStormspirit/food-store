import React from 'react'
import styles from '../styles/Contacts.module.css'

const Contacts = () => {
  return (
    <section className={styles.container}>
      <div className={styles.form}>
        <p className={styles.formText}>
          Интернет-магазин мясных продуктов huberma
        </p>
        <p className={styles.formText}>
          г. Санкт-Петербург, Пулковское шоссе, 103Л
        </p>
        <p className={styles.formText}>Тел.: + 7 (812) 000-00-00</p>
        <p className={styles.formText}>Время работы: с 9:00 до 20:00</p>
        <div className={styles.formContainer}>
          <div>
            <input
              type="text"
              className={styles.input}
              placeholder="Как вас зовут?"
            />
          </div>
          <div>
            <input
              type="text"
              className={styles.input}
              placeholder="Ваш телефон"
            />
          </div>
          <div>
            <input
              type="text"
              className={styles.input}
              placeholder="Ваш email"
            />
          </div>
          <div>
            <input
              type="text"
              className={styles.input}
              placeholder="Тема сообщения"
            />
          </div>
          <div>
            <input
              type="text"
              className={styles.input}
              placeholder="Текст вашего сообщения"
            />
          </div>
          <div>
            <div className={styles.formCheckbox}>
              <input type="checkbox" />
              <p>Согласие на обработку персональных данных </p>
            </div>
            <div className={styles.buttonWrapper}>
              <button className={styles.button}>Отправить сообщение</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contactText}>
        <div>
          <span>Индивидуальный предприниматель</span> Кайгородов
        </div>
        <p></p>
        <p></p>
      </div>
    </section>
  )
}

export default Contacts
