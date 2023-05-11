import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { NextPage } from 'next'

const Layout: NextPage<{ children: any }> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
