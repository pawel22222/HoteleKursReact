import styles from './Header.module.scss'
import ThemeBtn from '../UI/ThemeBtn/ThemeBtn'
import LogInOut from './LogInOut/LogInOut'

function Header({ children }) {
    return (
        <header className={ `${styles.header}  ` }>
            { children }

            <div className={ `d-flex ${styles.settingsDiv}` } >
                <ThemeBtn />
                <LogInOut />
            </div>
        </header>
    )
}

export default Header