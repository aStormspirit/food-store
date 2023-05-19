import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import styles from '../styles/Layout.module.scss'
import { NextPage } from 'next'

const Layout: NextPage<{ children: any }> = ({ children }) => {
  return (
    <div className={styles.app}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
