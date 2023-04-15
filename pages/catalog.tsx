import React from 'react'
import ProductList from '../components/ProductList'
import { prisma } from '../prisma/client'

const catalog = ({ data }) => {
  return (
    <div>
      <ProductList productsList={data} />
    </div>
  )
}

export default catalog

export const getServerSideProps = async ({ req }) => {
  const data = await prisma.product.findMany()
  return { props: { data } }
}
