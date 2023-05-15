import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../../pages'

describe('Index page', () => {
  it('Should render properly', () => {
    render(<Home />)

    const header = screen.getByRole('heading', {
      name: /Экологически чистое мясо курицы!/i,
    })
    const headerText = 'Экологически чистое мясо курицы!'

    expect(header).toHaveTextContent(headerText)
  })
})
