import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import TbTruckDelivery from 'react-icons/tb'
import { SlPeople } from 'react-icons/sl'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Huberma</title>
        <meta name="description" content="Huberma shop" />
        <link rel="icon" href="/img/logo.jpeg" />
      </Head>

      <section className={styles.hero}>
        <div className={styles.hero__slogan}>
          <h1>Бесплатная доставка</h1>
          <p>
            Предлагает вам нашу широкую линейку мяса с высоким качеством и по
            доступным ценам. Мы гарантируем вам доставку мяса в кратчайшие
            сроки!
          </p>
        </div>
        <a href="/catalog" className={styles.btn__promo}>
          <span>Сделать заказ</span>
        </a>
      </section>

      <section className={styles.promo}>
        <div className={styles.promoWrapper}>
          <div className={styles.promo__card}>
            <div></div>
            <h2 className={styles.promo__title}>Доставка</h2>
            <p className={styles.promo__content}>
              Cобственный автопарк и фирменные контейнеры, способные производить
              безопасную транспортировку и на продолжительное время сохранять
              свежесть продукции.
            </p>
          </div>
          <div className={styles.promo__card}>
            <div>
              <SlPeople />
            </div>
            <h2 className={styles.promo__title}>Индивидуальный подход</h2>
            <p className={styles.promo__content}>
              К каждому клиенту, начиная от розничного потребителя, заканчивая
              оптовым покупателем.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

// export const getServerSideProps = async ({ req }) => {
//   const data = await prisma.product.findMany()
//   return { props: { data } }
// }

export default Home
