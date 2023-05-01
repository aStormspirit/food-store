import React from 'react'
import styles from '../styles/Contacts.module.css'

const contacts = () => {
  return (
    <div className={styles.container}>
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
        <p>
          Государственное Учреждение Управление Пенсионного фонда РФ по
          Красногвардейскому району Санкт-Петербурга Рег. № 088-025-092662
        </p>
        <p>
          ФСС: Филиал №15 Санкт-Петербургского регионального отделения Фонда
          социального страхования Российской Федерации Рег. № 781506821478151
          МИФНС: Межрайонная инспекция Федеральной налоговой службы №21 по
          Санкт-Петербургу ОГРН: 1197847202035 ИНН / КПП: 7806565263 / 780601001
          ОКПО: 41737356 Банковские реквизиты: р/с 40702810455000082028
          СЕВЕРО-ЗАПАДНЫЙ БАНК ПАО СБЕРБАНК БИК 044030653 к/с
          30101810500000000653 Генеральный директор (на основании Устава):
          Обухович Юрий Олегович
        </p>
      </div>
    </div>
  )
}

export default contacts
