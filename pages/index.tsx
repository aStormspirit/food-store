import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Slider from '../components/Slider'

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
          <h2>Бесплатная доставка</h2>
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
      <Slider />
    </div>
  )
}
export default Home
