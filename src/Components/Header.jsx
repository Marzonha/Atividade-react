import { Link } from 'react-router-dom'
import styles from './Header.module.css'


export function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.menu}>
        <li><a href="./Home">Home</a></li>
        <li><a href="./Mission">Missão</a></li>
        <li><a href="./Product">Produto</a></li>
        <li><a href="./History">História</a></li>
        <li><a href="./Contact">Contato</a></li>        
      </ul>
    </header>


  )
}

