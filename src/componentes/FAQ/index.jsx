import styles from './FAQ.module.css'
import React, { useState } from 'react'
import RespostaFAQ from './RespostaFAQ'
import faq from './faq.json'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import Botao from 'componentes/Botao'

const FAQ = () => {

    let [respostaSelecionada, setRespostaSelecionada] = useState(null)

    console.log(respostaSelecionada)
  return (
    <section className={styles.faq}>
        <h2 className={styles.tituloFaq}>Perguntas Frequentes (FAQ)</h2>
        <p className={styles.paragrafoFaq}>Aqui estão algumas de nossas peruntas frequentes (FAQs). Se você tem alguma outras questões que gostaria de perguntar, por favor sinta-se livre para entrar em contato por e-mail.</p>
        
        <ul>
            {faq.map((perguntas) => (
                <li key={perguntas.id} className={styles.liPerguntas} onClick={()=> {
                    if (perguntas.id === respostaSelecionada){
                        setRespostaSelecionada(null)
                    } else {
                        setRespostaSelecionada(perguntas.id)
                    }
                    }
                }>
                    <label>{perguntas.pergunta} {perguntas.id === respostaSelecionada ? <IoIosArrowUp className={styles.iconeSeta} color='red'/> : <IoIosArrowDown className={styles.iconeSeta} color='#5368df'/> }</label>
                    { respostaSelecionada === perguntas.id ? <RespostaFAQ resposta={perguntas.resposta}/> : "" }
                </li>
            ))}
        </ul>
        <div>
            <Botao classe="botaoConteudo">Mais informações</Botao>
        </div>
    </section>
  )
}

export default FAQ