import styles from './Header.module.scss'
import ThemeBtn from '../UI/ThemeBtn/ThemeBtn'

function Header({ children }) {
    return (
        <header className={ `${styles.header}  ` }>
            { children }
            <div>
            </div>

            <div className={ styles.themeBtnDiv } >
                <ThemeBtn />
            </div>
        </header>
    )
}

export default Header