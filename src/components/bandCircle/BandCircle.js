import React from 'react'
import styles from './index.module.scss'

const list = new Array(20).fill(0)

const BandCircle = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.circle}>
          {list.map((item, index) => {
            return <span key={index} className={styles[`span${index}`]}></span>
          })}
        </div>
      </div>
    </div>
  )
}

export default BandCircle
