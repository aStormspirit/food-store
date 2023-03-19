import React from 'react'
import styles from '../styles/ProductCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
import useDeviceSize from './hooks/UseDeviceSize'

const ProductCard= ({pizza}) => {
  const [width, height] = useDeviceSize();
  
  

  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza.id}`}>
        <Image src={pizza.image} alt='product' width={width > 500 ? 500 : 200} height={width > 500 ? 500 : 200} />
        </Link>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>&#8381;{pizza.price}</span>
        <p className={styles.desc}>
        {pizza.short_description}
        </p>
    </div>
  )
}

export default ProductCard