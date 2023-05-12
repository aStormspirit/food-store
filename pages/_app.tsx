import '../styles/globals.css'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import Script from 'next/script'
import store from '../redux/store'
import Layout from '../components/Layout'
import { Provider } from 'react-redux'
import { NextPage } from 'next'
import { Analytics } from '@vercel/analytics/react'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-B5WFD3922N`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-B5WFD3922N');
      `}
      </Script>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
      <Analytics />
    </>
  )
}

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric)
// }

export default App
