import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Slider from '../components/Slider'
import ProductList from '../components/ProductList'
import axios from 'axios'

interface PL {
  id: number,
  image: string,
  name: string,
  price: number,
  short_desc: string
}

export default function Home({productsList}: any) {
  console.log(productsList)
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza </title>
        <meta name="description" content="Pizza shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <ProductList productsList={productsList} />
    </div>
  )
}

export const getServerSideProps = async () => {

  const res = await axios.get(`http://${process.env.API_URL}/api/products`)
  return {
    props: {
      productsList: res.data
    }
  }
}
