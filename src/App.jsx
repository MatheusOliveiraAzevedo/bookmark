import Cabecalho from 'componentes/Cabecalho';
import styles from  './App.module.css'
import Conteudo from 'componentes/Conteudo';
import ContainerConteudo from 'componentes/ContainerConteudo/Index';
import Downloads from 'componentes/Downloads';
import FAQ from 'componentes/FAQ';
import Contato from 'componentes/Contato';
import Rodape from 'componentes/Rodape';

function App() {
  return (
    <div className={styles.App}>
      <Cabecalho/>
      <Conteudo/>
      <ContainerConteudo/>
      <Downloads/>
      <FAQ/>
      <Contato/>
      <Rodape/>
    </div>
  );
}

export default App;
