import styles from './Header.module.scss'
import ThemeBtn from '../UI/ThemeBtn/ThemeBtn'

function Header(props) {
    return (
        <header className={ `${styles.header}  ` }>
            <div>
                { props.children }
            </div>

            <div className={ styles.themeBtnDiv } >
                <ThemeBtn />
            </div>
        </header>
    )
}

export default Header