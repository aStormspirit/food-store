import React, { useState, useEffect } from 'react'
import styles from '../styles/OrderDetail.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { reset } from '../redux/cartSlice'
import axios from 'axios'
import { NextPage } from 'next'

const OrderDetail: NextPage<any> = ({ cart, total, setCash }) => {
  const [customer, setCustomer] = useState('')
  const [number, setNumber] = useState('')
  const [address, setAddress] = useState('')
  const dispatch = useDispatch()

  let orders_name = cart.products.map((product) => product.name).join(',')
  let orders_quantity = cart.products
    .map((product) => product.quantity)
    .join(',')

  function handleClick() {
    let url =
      'https://api.telegram.org/bot6221829880:AAGnKgHTu2F55iY5pnDGvyofSpACmsKLTww/sendMessage?chat_id=1038663358&text='
    url +=
      'Новый заказ:' +
      '%0A' +
      'Покупатель: ' +
      customer +
      '%0A' +
      'Номер телефона: ' +
      number +
      '%0A' +
      'Адрес: ' +
      address +
      '%0A' +
      'Товар: ' +
      orders_name +
      '%0A' +
      orders_quantity
    axios.get(url)

    dispatch(reset())
    setCash(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.close}>
          <AiOutlineClose
            className={styles.svg}
            onClick={() => setCash(false)}
          />
        </div>
        <h1 className={styles.title}>
          Вы оплатите {total}&#8381; после доставки
        </h1>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="">
            Имя Фамилия
          </label>
          <input
            placeholder="Имя Фамилия"
            type="text"
            onChange={(e) => setCustomer(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="">
            Номер телефона
          </label>
          <input
            placeholder="+7 (___) ___-__-__"
            type="tel"
            className={styles.input}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="">
            Адрес
          </label>
          <textarea
            name=""
            id=""
            cols={30}
            rows={5}
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>
        <button className={styles.button} onClick={handleClick}>
          Заказать
        </button>
      </div>
    </div>
  )
}

export default OrderDetail
