import styles from './Header.module.css'

import logo from '../assets/ignite-logo.svg'

function Header() {
    return <header className={styles.header}>
        <img src={logo} alt="Logo do ignite" />
    </header>
}

export { Header }