import React from 'react'
import styles from '../styles/ProductCard.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { NextPage } from 'next'

const ProductCard: NextPage<{ product: Product }> = ({ product }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.image}
          alt="product"
          width={173}
          height={149}
          loading="lazy"
        />
        <h1 className={styles.title}>{product.name}</h1>
        <p className={styles.desc}>{product.short_desc}</p>
        <span className={styles.price}>&#8381;{product.price}</span>
      </Link>
    </div>
  )
}

export default ProductCard
