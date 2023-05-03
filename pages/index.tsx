import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { prisma } from '../prisma/client'
import ProductList from '../components/ProductList'
import { NextPage } from 'next'
import Slider from '../components/Slider'

const Home: NextPage<Products> = ({ data }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Huberma</title>
        <meta name="description" content="Huberma shop" />
        <link rel="icon" href="/img/logo.jpeg" />
      </Head>
      <Slider />
      <section></section>
      <ProductList productsList={data} />
      {/* <section className={styles.infoWrapper}>
        <div className={styles.info}>
          <h2 className={styles.infoTitle}>
            <b>с заботой</b> о наших клиентах
          </h2>
          <p>
            {' '}
            Мы поставляем мясо в гипермаркеты, рестораны и лично в руки всем,
            кто любит качественный и свежий продукт.
          </p>
          <p>
            Каждая партия товара проходит ветеринарную экспертизу, на все
            упаковки наносится дата производства, срок годности. Мы не мясники и
            не магазин – мы поставщики. Доставляем в первозданном виде прямо с
            производства. Мы за вкусное мясо у вас дома!{' '}
          </p>
        </div>
      </section> */}
      <section className={styles.container}>
        <div className={styles.info}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </div>
  )
}

export const getServerSideProps = async ({ req }) => {
  const data = await prisma.product.findMany()
  return { props: { data } }
}

export default Home
