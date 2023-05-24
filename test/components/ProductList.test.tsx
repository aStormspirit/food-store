import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProductList from '../../components/ProductList'
import data from '../../data/data.json'

describe('Product List Component', () => {
  it('renders without crashing', () => {
    render(<ProductList productsList={data} />)
  })
  it('renders correct number of products', () => {
    render(<ProductList productsList={data} />)
    const products = screen.queryAllByRole('link')
    expect(products.length === data.length).toEqual(true)
  })
})
