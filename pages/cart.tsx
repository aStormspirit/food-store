import React, { useState } from 'react'
import styles from '../styles/Cart.module.css'
import Image from 'next/image'

import { useSelector } from 'react-redux'

import OrderDetail from '../components/OrderDetail'

const Cart = () => {
  const [open, setOpen] = useState(false)
  const [cash, setCash] = useState(false)
  const cart = useSelector((state: any) => state.cart)

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Товар</th>
              <th>Название</th>
              <th>Цена</th>
              <th>Колличество</th>
              <th>Итого</th>
            </tr>
            {cart.products.map((product: any) => (
              <tr className={styles.tr} key={product.id}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image src={product.image} fill alt="product" />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>{product.name}</span>
                </td>
                <td>
                  <span className={styles.price}>&#8381;0</span>
                </td>
                <td>
                  <span className={styles.quantity}>{product.quantity}</span>
                </td>
                <td>
                  <span className={styles.total}>
                    &#8381;{product.prices * product.quantity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Итоговая цена</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Итого:</b>&#8381;{cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Скидка:</b>&#8381;0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Всего:</b>&#8381;{cart.total}
          </div>
          {open ? (
            <div className={styles.cashPayment}>
              <button className={styles.button} onClick={() => setCash(true)}>
                Оплатить при доставке
              </button>
            </div>
          ) : (
            <button onClick={() => setOpen(true)} className={styles.button}>
              Заказать сейчас!
            </button>
          )}
        </div>
      </div>
      {cash && <OrderDetail total={cart.total} setCash={setCash} cart={cart} />}
    </div>
  )
}

export default Cart
