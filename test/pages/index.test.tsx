import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../../pages'

describe('Index page', () => {
  it('Should render properly', () => {
    render(<Home />)

    const header = screen.getByRole('heading', {
      name: /Бесплатная доставка/i,
    })
    const headerText = 'Бесплатная доставка'

    expect(header).toHaveTextContent(headerText)
  })
})
