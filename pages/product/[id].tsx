import React, { useState } from 'react'
import styles from '../../styles/Product.module.css'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addProduct, addQuantity } from '../../redux/cartSlice'
import { NextPage } from 'next'
import prod from '../../data/data.json'
import { useSelector } from 'react-redux'

const Product: NextPage<{ product: Product }> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1)
  const cart = useSelector((state: any) => state.cart)
  const dispatch = useDispatch()

  const handleClick = () => {
    if (cart.products.length == 0) {
      dispatch(addProduct({ ...product[0], quantity }))
    } else {
      let id = cart.products.map((el) => el.id)
      if (id.includes(product[0].id)) {
        let newCart = cart.products.filter((e) => e.id != product[0].id)
        let item = cart.products.filter((e) => e.id == product[0].id)
        let lastQu = item[0].quantity
        let newItem = product[0]
        newItem.quantity = lastQu + quantity
        newCart.push(newItem)
        dispatch(addQuantity({ ...product[0], quantity, newCart }))
      } else {
        dispatch(addProduct({ ...product[0], quantity }))
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={product[0].image} fill alt="image" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{product[0].name}</h1>
        <span className={styles.price}>&#8381;{product[0].price}</span>
        <p className={styles.desc}>{product[0].short_desc}</p>
        <h3 className={styles.choose}>Выберите способ доставки</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="radio"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Доставка курьером</label>
          </div>
          <div className={styles.option}>
            <input
              type="radio"
              id="grile"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="grile">Самовывоз</label>
          </div>
        </div>
        <div className={styles.add}>
          <p>Колличество/Вес Кг.:</p>
          <input
            onChange={(e: any) => setQuantity(Number(e.target.value))}
            type="number"
            defaultValue={1}
            className={styles.quantity}
          />
          <button className={styles.button} onClick={() => handleClick()}>
            В корзину
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product

export const getServerSideProps = async ({ params }) => {
  const data = prod.filter((el) => el.id == params.id)
  // const data = await prisma.product.findUnique({
  //   where: {
  //     id: Number(params.id),
  //   },
  // })

  return {
    props: {
      product: data,
    },
  }
}
