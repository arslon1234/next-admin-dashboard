import React from 'react'
import styles from '../ui/dashboard/dashboard.module.css'
import Card from '../ui/dashboard/card/card'
import Transactions from '../ui/dashboard/transactions/transactions'
import Chart from '../ui/dashboard/chart/chart'
import RightBar from '../ui/dashboard/rightbar/rightbar'
export default function Dashboard() {
  return (
    <div className={styles.wrapper}>
    <div className={styles.main}>
      <div className={styles.cards}>
          <Card/>
          <Card/>
          <Card/>
      </div>
      <Transactions />
      <Chart />
    </div>
    <div className={styles.side}>
      <RightBar />
    </div>
  </div>
  )
}
