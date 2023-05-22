import React from 'react'
import { FaTruck, FaWarehouse } from 'react-icons/fa'
import { SlPeople } from 'react-icons/sl'
import styles from '../styles/Slider.module.scss'

const Slider = () => {
  return (
    <section className={styles.promo}>
      <div className={styles.promoWrapper}>
        <div className={styles.promo__card} id={styles.slide1}>
          <div>
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
        </div>

        <div className={styles.promo__card} id={styles.slide2}>
          <div>
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
        </div>

        <div className={styles.promo__card} id={styles.slide3}>
          <div>
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
      </div>
    </section>
  )
}

export default Slider
