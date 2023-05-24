import { render, screen } from '@testing-library/react'
import React from 'react'
import Catalog from '../../pages'

describe('render - Catalog page should render', () => {
  it('Should render properly', () => {
    render(<Catalog />)
  })
})
