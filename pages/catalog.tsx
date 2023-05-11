import React from 'react'
import ProductList from '../components/ProductList'
import { prisma } from '../prisma/client'
import { NextPage } from 'next'

const catalog: NextPage<{ data: Products[] }> = ({ data }) => {
  return (
    <div>
      <ProductList productsList={data} />
    </div>
  )
}

export const getServerSideProps = async ({ req }) => {
  const data = await prisma.product.findMany()
  return { props: { data } }
}

export default catalog
