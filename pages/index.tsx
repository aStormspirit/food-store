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

// {productsList}: any

export default function Home() {
  let productsList = [
    {
      "id": 1,
      "name": 'Куриные крылышки',
      "image": '/img/product.jpeg',
      "price": 225,
      "short_description": "Куриные крылышки, в вакумной упаковке"
    }
  ]
  return (
    <div className={styles.container}>
      <Head>
        <title>Huberma</title>
        <meta name="description" content="Huberma shop" />
        <link rel="icon" href="/img/logo.jpeg" />
      </Head>
      <Slider />
      <ProductList productsList={productsList} />
    </div>
  )
}

// export const getServerSideProps = async () => {

//   const res = await axios.get(``)
//   return {
//     props: {
//       productsList: res.data
//     }
//   }
// }
