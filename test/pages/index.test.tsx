import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../../pages'

describe('Index page', () => {
  it('Should render properly', () => {
    render(<Home />)

    expect(screen.getByText('Бесплатная доставка')).toBeInTheDocument()
    expect(screen.getByText('Сделать заказ')).toBeInTheDocument()
  })

  it('button click testing', () => {
    render(<Home />)

    const button = screen.getByRole('link')
    fireEvent.click(button)

    expect(screen.getByText('Каталог')).toBeInTheDocument()
  })
})
