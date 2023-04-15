import React, { useState } from 'react'
import styles from '../../styles/Product.module.css'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/cartSlice'
import { prisma } from '../../prisma/client'

interface Product {
  id: number
  image: string
  name: string
  price: number
  short_desc: string
}

const Product = ({ product }: any) => {
  let newprice = Number(product.price)
  const [quantity, setQuantity] = useState(1)
  const [prices, setPrices] = useState(newprice)
  const dispatch = useDispatch()

  const handleSize = (sizeIndex) => {
    const sprice = [newprice, newprice + 50, newprice + 100]
    setPrices(sprice[sizeIndex])
  }

  const handleClick = () => {
    dispatch(addProduct({ ...product, prices, quantity }))
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={product.image} fill alt="image" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{product.name}</h1>
        <span className={styles.price}>&#8381;{prices}</span>
        <p className={styles.desc}>{product.short_description}</p>
        <h3 className={styles.choose}>Выберите способ доставки</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Доставка курьером</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="grile"
              name="grile"
              className={styles.checkbox}
            />
            <label htmlFor="grile">Самовывоз</label>
          </div>
        </div>
        <div className={styles.add}>
          <p>Колличество упаковок:</p>
          <input
            onChange={(e: any) => setQuantity(e.target.value)}
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
  const data = await prisma.product.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return {
    props: {
      product: data,
    },
  }
}
