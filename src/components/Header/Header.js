import React from 'react'
import styles from "./Header.module.css"
import Search from "../../assets/images/Search.svg"
import Notify from "../../assets/images/Notif Icon.svg"

function Header() {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.leftSec}>
                <div className={styles.search}>
                    <input type='text' placeholder='Search' />
                    <img src={Search} />
                </div>
            </div>
            <div className={styles.rightSec}>
                <span><p>🍔</p></span>
                <select>
                    <option>Delicious Burger </option>
                </select>
                <div className={styles.notify}>
                    <img src={Notify}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header