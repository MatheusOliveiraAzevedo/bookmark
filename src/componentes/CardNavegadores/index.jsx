import Botao from 'componentes/Botao'
import styles from './CardNavegadores.module.css'
import React from 'react'

const CardNavegadores = ({ info }) => {
  return (
    <div className={`${styles.Card} ${styles[info.classeCard]}`}>
        <img src={info.imagem} alt="" />
        <h3>{info.titulo}</h3>
        <p>Versão minima {info.versao}</p>
        <div>
            <Botao classe="botaoConteudo">Adicionar & Instalar</Botao>
        </div>
    </div>
  )
}

export default CardNavegadores