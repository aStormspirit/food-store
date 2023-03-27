import React from 'react'
import styles from '../styles/ProductList.module.css'
import ProductCard from './ProductCard'

const ProductList = ({productsList}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Лучшее мясо в России</h1>
        <p className={styles.desc}>Приветствуем вас на сайте «Мясо»! В нашем магазине мы предлагаем широкий ассортимент высококачественных и свежих продуктов мясной продукции.
        Наша компания предлагает проверенные сорта мяса, продающиеся по доступным ценам.</p>
        <div className={styles.wrapper}>
          {productsList.map((pizza: any) =>(
            <ProductCard key={pizza.id} pizza={pizza}/>
          ))}
        </div>
    </div>
  )
}

export default ProductList