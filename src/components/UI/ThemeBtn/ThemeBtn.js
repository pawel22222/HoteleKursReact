import styles from './ThemeBtn.module.scss'
import sunIcon from '../../../Assets/icons/sun.svg'
import moonIcon from '../../../Assets/icons/moon.svg'


const ThemeBtn = function () {

    const appDiv = document.querySelector('.appDiv')
    const themeImg = document.querySelector('.themeImg')

    const changeColor = () => {
        if (appDiv.getAttribute('data-mode') === 'light') {
            themeImg.setAttribute('src', sunIcon)
            appDiv.setAttribute('data-mode', 'dark')
        } else {
            themeImg.setAttribute('src', moonIcon)
            appDiv.setAttribute('data-mode', 'light')
        }
    }

    return (
        <button
            className={ `themeBtn ${styles.themeBtn}  btn` }
            onClick={ changeColor }>
            <img src={ sunIcon } alt="ThemeImg" className="themeImg" />
        </button>
    )
}

export default ThemeBtn