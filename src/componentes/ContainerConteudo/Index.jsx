import OpcoesInfo from 'componentes/OpcoesInfo'
import styles from './ContainerConteudo.module.css'
import React from 'react'

const ContainerConteudo = () => {
  return (
    <section className={styles.containerConteudo}>
        <h2>Recursos</h2>
        <p className={styles.textoContainer}>Nosso objetivo é tornar mais rápido e fácil o acesso aos seus sites favoritos. Seus favoritos são sincronizados entre seus dispositivos para que você possa acessá-los em qualquer lugar.</p>
        <OpcoesInfo/>
    </section>
  )
}

export default ContainerConteudo