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
      "id": 2,
      "name": 'Тушка курицы',
      "image": '/img/tyshka.jpg',
      "price": 180,
      "short_description": "Куриная тушка, охлажденка"
    },
    {
      "id": 3,
      "name": 'Грудка курицы',
      "image": '/img/grudka.jpg',
      "price": 190,
      "short_description": "Грудка курицы, охлажденка"
    },
    {
      "id": 4,
      "name": 'крылья курицы',
      "image": '/img/crilo.jpg',
      "price": 180,
      "short_description": "крыло куриное, охлажденка"
    }
  ]

  return (
    <div>
            <ProductList productsList={productsList} />
    </div>
  )
}

export default catalog