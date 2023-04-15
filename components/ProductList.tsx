import React from 'react'
import styles from '../styles/ProductList.module.css'
import ProductCard from './ProductCard'

const ProductList = ({ productsList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Мы доставляем</h1>
      <div className={styles.wrapper}>
        {productsList.map((pizza: any) => (
          <ProductCard key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
