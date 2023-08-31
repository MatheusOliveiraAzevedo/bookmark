import Info from 'componentes/Info'
import styles from './OpcoesInfo.module.css'
import React, { useState } from 'react'

const OpcoesInfo = () => {


    const opcoes = [
        {
            id: "0",
            label: "Simples Marcação"
        },
        {
            id: "1",
            label: "Pesquisa Rapida"
        },
        {
            id: "2",
            label: "Compartilhamento Facil"
        }
    ]

    let [infoSelecionada, setInfoSelecionada] = useState("0")
  return (
    <section className={styles.containerOpcoes}>
        <div className={styles.containerItem}>
            {opcoes.map((opInfo) => (
                <button
                className={opInfo.id === infoSelecionada ? `${styles.botaoOpcoes} ${styles.botaoSelecionado}` : `${styles.botaoOpcoes}`}
                key={opInfo.id}
                onClick={( ) => {setInfoSelecionada(opInfo.id)}}
                >
                {opInfo.label}
                </button>
            ))}
        </div>
        <div className={styles.containerConteudoOpcoes}>
            {infoSelecionada ? <Info index={infoSelecionada}></Info> : ""}

        </div>
    </section>
  )
}

export default OpcoesInfo