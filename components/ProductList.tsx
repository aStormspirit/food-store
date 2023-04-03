import React from 'react'
import styles from '../styles/ProductList.module.css'
import ProductCard from './ProductCard'

const ProductList = ({productsList}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Мы доставляем</h1>
        {/*<p className={styles.desc}>Мы поставляем мясо в гипермаркеты, рестораны и лично в руки всем, кто любит качественный и свежий продукт.</p>*/}
        <div className={styles.wrapper}>
          {productsList.map((pizza: any) =>(
            <ProductCard key={pizza.id} pizza={pizza}/>
          ))}
        </div>
    </div>
  )
}

export default ProductList