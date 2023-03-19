import React,{useState} from 'react'
import styles from '../../styles/Product.module.css'
import Image from 'next/image'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/cartSlice'

//{product} - props

const Product = () => {

  let product =  {
      "id": 1,
      "name": 'Куриные крылышки',
      "image": '/img/product.jpeg',
      "price": 225,
      "short_description": "Куриные крылышки, в вакумной упаковке"
    }

    let newprice = Number(product.price)
    const [size, setSize] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [prices, setPrices] = useState(newprice)
    const dispatch = useDispatch()
  
    const handleSize = (sizeIndex) => {
      const sprice = [newprice, newprice + 50, newprice + 100]
      setPrices(sprice[sizeIndex])
    };

    const handleClick = () => {
      dispatch(addProduct({...product, prices, quantity}))
    }

  return (
      <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={product.image} layout='fill' alt='image' objectFit='contain' />
            </div>
          </div>
          <div className={styles.right}>
              <h1 className={styles.title}>{product.name}</h1>
              <span className={styles.price}>&#8381;{prices}</span>
              <p className={styles.desc}>{product.short_description}</p>
              <h3 className={styles.choose}>Выберите размер</h3>
              <div className={styles.sizes}>
                <div className={styles.size} onClick={() => handleSize(0)}>
                    <Image src='/img/size.png' layout='fill' alt='' />
                    <span className={styles.number}>3кг</span>
                </div>
                <div className={styles.size} onClick={() => handleSize(1)}>
                    <Image src='/img/size.png' layout='fill' alt='' />
                    <span className={styles.number}>5кг</span>
                </div>
                <div className={styles.size} onClick={() => handleSize(2)}>
                    <Image src='/img/size.png' layout='fill' alt='' />
                    <span className={styles.number}>7кг</span>
                </div>
              </div>
              <h3 className={styles.choose}>Выберите способ доставки</h3>
              <div className={styles.ingredients}>
                  <div className={styles.option}>
                    <input
                        type='checkbox'
                        id='double'
                        name='double'
                        className={styles.checkbox}
                        />
                    <label htmlFor='double'>Доставка курьером</label>
                  </div>
                  <div className={styles.option}>
                    <input
                        type='checkbox'
                        id='grile'
                        name='grile'
                        className={styles.checkbox}
                        />
                    <label htmlFor='grile'>Самовывоз</label>
                  </div>
              </div>
              <div className={styles.add}>
                <p>Колличество упаковок:</p>
                <input onChange={(e: any)=>setQuantity(e.target.value)} type='number' defaultValue={1} className={styles.quantity} />
                <button className={styles.button} onClick={() => handleClick()}>В корзину</button>
              </div>
          </div>
      </div>
  )
}

export default Product

// export const getServerSideProps = async ({params}) => {
// получить 1 товар по api
//   const res = await axios.get(`http://${process.env.API_URL}/api/products/${params.id}`)
//   return {
//     props: {
//       product: res.data
//     }
//   }
// }