import React from 'react'
import ProductList from '../components/ProductList'

const catalog = () => {

  let productsList = [
    {
      "id": 1,
      "name": 'Куриные крылышки',
      "image": '/img/product.jpeg',
      "price": 225,
      "short_description": "Куриные крылышки, в вакумной упаковке"
    },
    {
      "id": 1,
      "name": 'Куриные крылышки',
      "image": '/img/product.jpeg',
      "price": 225,
      "short_description": "Куриные крылышки, в вакумной упаковке"
    }
  ]

  return (
    <div>
            <ProductList productsList={productsList} />
    </div>
  )
}

export default catalog