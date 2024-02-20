import React from 'react'
import styles from './footer.module.css'
export default function footer() {
  return (
    <div className={styles.container}>
         <div className={styles.logo}>Our Logo</div>
      <div className={styles.text}>© All rights reserved.</div>
    </div>
  )
}
