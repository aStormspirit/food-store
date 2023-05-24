import React from 'react'
import ProductList from '../components/ProductList'
import { NextPage } from 'next'
import data from '../data/data.json'

const Catalog: NextPage<any> = () => {
  return (
    <div>
      <h1>Каталог</h1>
      <ProductList productsList={data} />
    </div>
  )
}

export default Catalog
