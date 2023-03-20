import React from 'react'
import styles from '../../styles/CallForm.module.css'
import {AiOutlineClose} from 'react-icons/ai'


const CallForm = ({setOpen}) => {
  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
      <div className={styles.close}>
        <AiOutlineClose className={styles.svg} onClick={() => setOpen(false)} />
      </div>
        <h1 className={styles.title}>Заказать звонок</h1>
    </div>
</div>
  )
}

export default CallForm