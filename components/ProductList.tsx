import React, { lazy, Suspense } from 'react'
import styles from '../styles/ProductList.module.css'
import { NextPage } from 'next'

const ProductCard = lazy(() => import('./ProductCard'))

const ProductList: NextPage<{ productsList: Product[] }> = ({
  productsList,
}) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Мы доставляем</h1>
      <div className={styles.wrapper}>
        {productsList.map((product: Product) => (
          <Suspense key={product.id} fallback={<div>Loading...</div>}>
            <ProductCard key={product.id} product={product} />
          </Suspense>
        ))}
      </div>
    </section>
  )
}

export default ProductList
