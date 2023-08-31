import styles from './Cabecalho.module.css'
import React, { useEffect, useState } from 'react'
import { ReactComponent as LogoBookmark } from 'images/logo-bookmark.svg'
import NavBar from 'componentes/NavBar'
import Botao from 'componentes/Botao'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrFormClose } from 'react-icons/gr'
import logo from '../../images/logo-bookmark.svg'
import Midias from 'componentes/Midias'

const Cabecalho = () => {

  let [showMenu, setShowMenu] =useState(true)
  let [larguraTela, setLarguraTela] = useState(window.innerWidth) 



  useEffect(() => {

    window.addEventListener('resize', () => {setLarguraTela(window.innerWidth)})
    
    if (larguraTela >= 1100) {
      setShowMenu(true)
    } else {
      setShowMenu(false)
    }
  }, [larguraTela])
  

  function exibeMenu() {
    setShowMenu(!showMenu)
  }

  return (
    <header className={styles.cabecalho}>
        <LogoBookmark className={styles.logo}/>
        {showMenu 
        ? <div className={styles.containerFundoMeduMobile}>
            <div className={styles.containerMenu}>
              <section className={styles.cabecalhoMenuMobile}>
                <img 
                className={styles.logoImg}
                src={logo}
                alt="" 
                />
                <GrFormClose className={styles.iconeClose} fontSize={40} onClick={exibeMenu}/>
              </section>
              <NavBar classe="menuMobile"/>
              <Botao classe="botaoCabecalhoMobile" classe2="botaoCabecalho">LOGIN</Botao>
              <Midias classe="midiaMenuMobile"/>
            </div>
          </div> 
        : ""
      }
        <GiHamburgerMenu className={styles.mostraMenu} onClick={exibeMenu}/>
    </header>
  )
}

export default Cabecalho