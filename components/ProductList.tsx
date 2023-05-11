import React from 'react'
import styles from '../styles/ProductList.module.css'
import ProductCard from './ProductCard'
import { NextPage } from 'next'

const ProductList: NextPage<{ productsList: Products[] }> = ({
  productsList,
}) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Мы доставляем</h1>
      <div className={styles.wrapper}>
        {productsList.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductList
