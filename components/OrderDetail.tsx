import React,{useState, useEffect} from 'react'
import styles from '../styles/OrderDetail.module.css'
import {AiOutlineClose} from 'react-icons/ai'
import { useRouter } from "next/router";
import {useDispatch } from 'react-redux'
import {reset} from '../redux/cartSlice'

const OrderDetail = ({cart, total, setCash}) => {
    const [customer, setCustomer] = useState("")
    const [number, setNumber] = useState("")
    const [address, setAddress] = useState("")
    const [csrftoken, setCsrftoken] = useState("")
    const router = useRouter();
    const dispatch = useDispatch()

    let orders_ids = cart.products.map(product => (product.id)).join(',')

    useEffect(()=>{

    fetch('http://127.0.0.1:8000/cart/api/csrf', {
      credentials: "include",
    })
    .then(res => {
      setCsrftoken(res.headers.get('X-CSRFToken'))
    })
    },[])

    
    function handleClick(){
      fetch('http://localhost:3000/api/orders', {
        method: 'POST',
        body: JSON.stringify({
          customer: customer,
          phone: number,
          address: address,
          csrftoken: csrftoken,
          orders_id: orders_ids,
          total: total,
        })
      }
      )
      .then(res => res.json())
      .then(res => router.push(`/orders/${res.id}`))
      .catch(err => console.log(err))

      dispatch(reset())
    }

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.close}>
            <AiOutlineClose className={styles.svg} onClick={() => setCash(false)} />
          </div>
            <h1 className={styles.title}>Вы оплатите {total}&#8381; после доставки</h1>
            <div className={styles.item}>
                <label className={styles.label} htmlFor="">Имя Фамилия</label>
                <input placeholder="John Doe" type="text" onChange={(e) => setCustomer(e.target.value)} className={styles.input} />
            </div>
            <div className={styles.item}>
                <label className={styles.label} htmlFor="">Номер телефона</label>
                <input placeholder="+1234567" type="text" className={styles.input} onChange={(e) => setNumber(e.target.value)} />
            </div>
            <div className={styles.item}>
                <label className={styles.label} htmlFor="">Адрес</label>
                <textarea name="" id="" cols={30} rows={5} className={styles.textarea} onChange={(e) => setAddress(e.target.value)}></textarea>
            </div>
            <button className={styles.button} onClick={handleClick}>
                  Заказать
            </button>
        </div>
    </div>
  )
}

export default OrderDetail

/*
axios.post('http://127.0.0.1:8000/api/order', 
        JSON.stringify({
        name: customer,
        phone: number,
        address: address,
      }),
      {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-CSRFToken': csrftoken
      }})

    const request = new Request(
        'http://127.0.0.1:8000/api/order',
        {
            method: 'POST',
            headers: {'X-CSRFToken': csrftoken},
            mode: 'origin', // Do not send CSRF token to another domain.
            body: JSON.stringify({
              name: customer,
              phone: number,
              address: address,
            })
        }
    );
    fetch(request).then(function(response) {
        console.log(response);
    });
*/

      /*
      fetch('http://127.0.0.1:8000/api/order',{
        method: 'POST',
        headers: {'Content-Type': 'application/json','X-CSRFToken': csrftoken},
        mode: 'cors', // Do not send CSRF token to another domain.
        body: JSON.stringify({
          "name": customer,
          "phone": number,
          "address": address,
        })
    })
    .then(res => res.json())
    .then(res => {
      router.push(`/orders/${res.id}`);
    })
    .catch(err => console.error(err))
    */