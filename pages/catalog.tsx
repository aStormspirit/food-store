import React from 'react'
import ProductList from '../components/ProductList'
import { NextPage } from 'next'
import data from '../data/data.json'

const catalog: NextPage<any> = () => {
  return (
    <div>
      <ProductList productsList={data} />
    </div>
  )
}

// export const getServerSideProps = async ({ req }) => {
//   const data = products
//   return { props: { data } }
// }

export default catalog
