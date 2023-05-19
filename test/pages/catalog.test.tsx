import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Catalog from '../../pages'

describe('Index page', () => {
  it('Should render properly', () => {
    render(<Catalog />)
  })
})
