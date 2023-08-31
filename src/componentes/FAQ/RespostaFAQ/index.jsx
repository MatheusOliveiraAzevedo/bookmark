import styles from './RespostaFAQ.module.css'
import React from 'react'

const RespostaFAQ = ({ resposta }) => {
  return (
    <article className={styles.resposta}>
        {resposta}
    </article>
  )
}

export default RespostaFAQ