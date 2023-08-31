import styles from './Midias.module.css'
import React from 'react'
import twitter from '../../images/icon-twitter.svg'
import facebook from '../../images/icon-facebook.svg'


const Midias = ({ classe }) => {
  return (
    <div className={`${styles.containerMidias} ${styles[classe]}`}>
      <img 
      src={facebook} 
      alt="logo do facebook" 
      />

      <img 
      src={twitter} 
      alt="logo do twitter" 
      />
    </div>
  )
}

export default Midias

