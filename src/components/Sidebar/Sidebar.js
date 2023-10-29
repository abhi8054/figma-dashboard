import React from 'react'
import styles from "./Sidebar.module.css"
import { Link } from 'react-router-dom'
import Dash from "../../assets/images/Chart.svg"
import Buy from "../../assets/images/Buy.svg"
import Document from "../../assets/images/Document.svg"
import Chat from "../../assets/images/Chat.svg"
import Setting from "../../assets/images/Setting.svg"
import Profile from "../../assets/images/Profile.svg"
import Wallet from "../../assets/images/Wallet.svg"
import Info from "../../assets/images/Info Square.svg"

function Sidebar() {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.companyName}>
                <span>
                    <h3>G</h3>
                </span>
                <p>GOODFOOD</p>
            </div>
            <div className={styles.menu}>
                <p>Menu</p>
                <div className={styles.menuWrapper}>
                    <div className={`${styles.navTitle} ${styles.active}`}>
                        <Link to='/'>
                            <img src={Dash}/>
                            <p>Dashboard</p>
                        </Link>
                    </div>
                    <div className={styles.navTitle}>
                        <Link to='/'>
                            <img src={Buy}/>
                            <p>Food Order</p>
                        </Link>
                    </div>
                    <div className={styles.navTitle}>
                        <Link to='/'>
                            <img src={Document}/>
                            <p>Manage Menu</p>
                        </Link>
                    </div>
                    <div className={styles.navTitle}>
                        <Link to='/'>
                            <img src={Chat}/>
                            <p>Customer Review</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.menu} style={{marginTop:'1rem'}}>
                <p>Others</p>
                <div className={styles.menuWrapper}>
                    <div className={styles.navTitle}>
                        <Link to='/'>
                            <img src={Setting}/>
                            <p>Settings</p>
                        </Link>
                    </div>
                    <div className={styles.navTitle}>
                        <Link to='/'>
                            <img src={Wallet}/>
                            <p>Payment</p>
                        </Link>
                    </div>
                    <div className={styles.navTitle}>
                        <Link to='/'>
                            <img src={Profile}/>
                            <p>Accounts</p>
                        </Link>
                    </div>
                    <div className={styles.navTitle}>
                        <Link to='/'>
                            <img src={Info}/>
                            <p>Help</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar