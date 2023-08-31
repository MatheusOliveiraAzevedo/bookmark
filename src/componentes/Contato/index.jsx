import Botao from 'componentes/Botao'
import styles from './Contato.module.css'
import React, { useState } from 'react'
import { ReactComponent as Erro } from '../../images/icon-error.svg'

const Contato = () => {

  let [email, setEmail] = useState("");
  let [mostraErro, setMostraErro] = useState(false);

 
  function atualizaEmail(event) {
    setEmail(event.target.value)
  }

  return (
    <section className={styles.contato}>
        <p>35.000+ JA SE JUNTARAM</p>
        <h2>Mantenha-se atualizado com o que estamos fazendo</h2>
        <div className={styles.containerEmail}>
            {mostraErro 
            ? <div className={styles.containerErro}>
                <div className={styles.erro}>
                  <input className={`${styles.inputEmail} ${styles.inputEmailErro}`} onChange={atualizaEmail} type="text" placeholder='Insira seu e-mail' />
                  <Erro/>
                </div>
                <span>Ops, tem certeza que inseriu um e-mail?</span>
              </div> 
                : <div className={styles.containerSemErro}>
                    <input className={styles.inputEmail} onChange={atualizaEmail} type="text" placeholder='Insira seu e-mail' />
                  </div>
            }
            <Botao validacao={(valor) => {setMostraErro(valor)}} classe="botaoCabecalho" email={email}>Contate-nos</Botao>
        </div>
    </section>
  )
}

export default Contato