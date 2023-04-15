import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Banner from '../components/Banner'
import { prisma } from '../prisma/client'
import ProductList from '../components/ProductList'

export default function Home({ data }: any) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Huberma</title>
        <meta name="description" content="Huberma shop" />
        <link rel="icon" href="/img/logo.jpeg" />
      </Head>
      <Banner />
      <ProductList productsList={data} />
      <div className={styles.infoWrapper}>
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
      </div>
    </div>
  )
}

export const getServerSideProps = async ({ req }) => {
  const data = await prisma.product.findMany()
  return { props: { data } }
}
