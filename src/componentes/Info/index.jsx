import Botao from 'componentes/Botao'
import styles from './Info.module.css'
import React from 'react'
import Informacao from './Info.json'


const Info = ({ index }) => {

    let info = Informacao[index]

    console.log(info.imagem)
  return (
    <section className={styles.containerConteudo}>
        <img 
        className={styles.imgContainer}
        src={info.imagem} 
        alt={info.altImg} 
        />
        <h2 className={styles.tituloContainer}>{info.titulo}</h2>
        <p>{info.texto}</p>
        <div className={styles.divBotao}>
            <Botao classe="botaoConteudo">Ver Mais</Botao>
        </div>
    </section>

  )
}

export default Info