import '../styles/globals.css'
import type { AppProps } from 'next/app'
import store from '../redux/store'
import Layout from '../components/Layout'
import { Provider } from 'react-redux'
import { NextPage } from 'next'
import { Analytics } from '@vercel/analytics/react'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
      <Analytics />
    </>
  )
}

export default App
