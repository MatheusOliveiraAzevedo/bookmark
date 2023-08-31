import CardNavegadores from 'componentes/CardNavegadores'
import styles from './Downloads.module.css'
import React from 'react'

const Downloads = () => {

    const navegadores = [
        {
            id: "1",
            imagem: "images/logo-chrome.svg",
            titulo: "Adicione ao Chrome",
            versao: "62",
            classeCard: "Card1"
        },
        {
            id: "2",
            imagem: "images/logo-firefox.svg",
            titulo: "Adicione ao Firefox",
            versao: "55",
            classeCard: "Card2"
        },
        {
            id: "3",
            imagem: "images/logo-opera.svg",
            titulo: "Adicione ao Opera",
            versao: "46",
            classeCard: "Card3"
        }
    ]

  return (
    <section className={styles.downloads}>
        <h2 className={styles.tituloDownloads}>Baixe a extensão</h2>
        <p className={styles.textoDownloads}>Temos mais navegadores em desenvolvimento. Informe-nos se você tem um favorito que gostaria que priorizássemos</p>
        
        <div className={styles.containerNavegadores}>
            {navegadores.map((nav) => (
                <CardNavegadores key={nav.id} info={nav}></CardNavegadores>
            ))}
        </div>
    </section>
  )
}

export default Downloads