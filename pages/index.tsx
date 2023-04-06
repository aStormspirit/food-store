import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Banner from '../components/Banner'
import ProductList from '../components/ProductList'
import Card from '../components/Card'

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
    },
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
      <Banner />
      <h1 className={styles.title}>Мы доставляем</h1>
      <div className={styles.cardWrapper}>
        <Card />
      </div>
      <div className={styles.infoWrapper}>
      <div className={styles.info}>
        <h2 className={styles.infoTitle}><b>с заботой</b> о наших клиентах</h2>
        <p> Мы поставляем мясо в гипермаркеты, рестораны и лично в руки всем, кто любит качественный и свежий продукт.</p>
        <p>Каждая партия товара проходит ветеринарную экспертизу, на все упаковки наносится дата производства, срок годности. Мы не мясники и не магазин – мы поставщики. Доставляем в первозданном виде прямо с производства. Мы за вкусное мясо у вас дома! </p>
      </div>
      </div>

      {/*<ProductList productsList={productsList} />*/}
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
