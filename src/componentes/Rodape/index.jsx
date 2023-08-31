import styles from './Rodape.module.css'
import React from 'react'
import logo from 'images/logo-bookmark-branco.png'
import NavBar from 'componentes/NavBar'
import Midias from 'componentes/Midias'

const Rodape = () => {
  return (
    <footer className={styles.rodape}>
        <section>
            <img 
            className={styles.logo}
            src={logo} 
            alt="logo da bookmark" />
            <NavBar classe="menuRodape"/>
            <Midias/>
        </section>
    </footer>
  )
}

export default Rodape