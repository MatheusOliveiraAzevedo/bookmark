import styles from './Botao.module.css'




const Botao = ( {children, classe, email, validacao, classe2 } ) => {


  function verificaEmail() {

    if (email === undefined) {
      return
    } else if (validaEmail(email, "@")) {
        validacao(false)
      } else {
        validacao(true)
      }

    
  }

  function validaEmail(str, char) {
    return str.indexOf(char) !== -1;
  }



  return (
    <button onClick={verificaEmail} className={`
    ${styles.botao}
    ${styles[classe]}
    ${styles[classe2]}`
    }>{children}</button>
  )
}

export default Botao