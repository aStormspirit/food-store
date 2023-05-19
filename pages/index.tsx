import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { FaTruck, FaWarehouse } from 'react-icons/fa'
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
      {/* 
      <section className={styles.info}>
        <div>
          <h1 className={styles.info__title}>
            Экологически чистое мясо курицы!
          </h1>
          <h2 className={styles.info__subtitle}>
            Не тратьте времени на поиск товара! Доставка до вашего заведения
          </h2>
          <p className={styles.info__text}>
            ИП Кайгородов – предлагает вам нашу широкую линейку мяса с высоким
            качеством и по доступным ценам. Мы гарантируем вам доставку мяса в
            кратчайшие сроки и по условиям, которые мы можем договориться
          </p>
        </div>
        <div>
          <a href="">Условия доставки</a>
        </div>
      </section> */}

      <section className={styles.promo}>
        <div className={styles.promoWrapper}>
          <div className={styles.promo__card} id={styles.slide1}>
            <div className={styles.promo__svg}>
              <FaWarehouse />
            </div>
            <h2 className={styles.promo__title}>Хранение</h2>
            <p className={styles.promo__text}>
              2,4 га специально оборудованных складских помещений. Холодильные
              камеры имеют оптимальную температуру и влажность, идеальную для
              хранения мяса.
            </p>
          </div>

          <div className={styles.promo__card} id={styles.slide2}>
            <div className={styles.promo__svg}>
              <FaTruck />
            </div>
            <h2 className={styles.promo__title}>Доставка</h2>
            <p className={styles.promo__text}>
              Cобственный автопарк и фирменные контейнеры, способные производить
              безопасную транспортировку и на продолжительное время сохранять
              свежесть продукции.
            </p>
          </div>

          <div className={styles.promo__card} id={styles.slide3}>
            <div className={styles.promo__svg}>
              <SlPeople />
            </div>
            <h2 className={styles.promo__title}>Индивидуальный подход</h2>
            <p className={styles.promo__text}>
              К каждому клиенту, начиная от розничного потребителя, заканчивая
              оптовым покупателем.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Home
