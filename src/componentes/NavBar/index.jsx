
import styles from './NabBar.module.css'
import React from 'react'

const NavBar = ({ classe }) => {
  return (
    <nav className='containerNav'>
        <ul className= {`${styles.menu} ${styles[classe]}`}>
            <li className={styles.item}><a href="/">RECURSOS</a></li>
            <li className={styles.item}><a href="/">PREÇOS</a></li>
            <li className={styles.item}><a href="/">CONTA</a></li>
        </ul>
    </nav>
  )
}

export default NavBar