import Botao from 'componentes/Botao'
import styles from './Conteudo.module.css'
import React from 'react'
import FotoConteudoPrincipal from 'images/illustration-hero.svg'

const Conteudo = () => {
  return (
    <section className={styles.conteudo}>
        <img 
        className={styles.imgConteudo}
        src={FotoConteudoPrincipal} 
        alt="Imagem de uma tela com conteudos sendo carregados" />
        <h1>Um Simples Gerenciador de Favoritos</h1>
        <p>Uma interface limpa e simples para organizar seus websites favoritos. Abra uma nova aba no navegador e veja seus sites carregarem estantaneamente. Teste de graça.</p>
        <div>
            <Botao classe="botaoConteudo">Instale no Chrome</Botao>
            <Botao classe="botaoConteudo2">Instale no Firefox</Botao>
        </div>
    </section>
  )
}

export default Conteudo