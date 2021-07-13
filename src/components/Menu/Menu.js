import styles from './Menu.module.scss'

function Menu({ changeComponent }) {


    const appDiv = document.querySelector('.appDiv')
    const btnMode = document.querySelector('.btnMode')

    const changeColor = () => {
        if (appDiv.getAttribute('data-mode') === 'light') {
            appDiv.setAttribute('data-mode', 'dark')
            btnMode.innerHTML = "light mode"
        } else {
            appDiv.setAttribute('data-mode', 'light')
            btnMode.innerHTML = "dark mode"
        }


    }


    return (
        <div className={ `card ${styles.menuDiv}` }>
            <ul className={ `d-flex justify-content-around p-2 nav` }>
                <li className={ `nav-item` }>
                    <a href="#" className={ `nav-link ${styles.navLink}` }
                        onClick={ changeComponent }
                        data-name="home"
                    >Home</a>
                </li>
                <li className={ `nav-item ` }
                >
                    <a href="#"
                        data-name="hotels"
                        className={ `nav-link ${styles.navLink}` }
                        onClick={ changeComponent }
                    >Hotels</a>
                </li>
                <li className={ `nav-item` }>
                    <a href="#" className={ `nav-link ${styles.navLink}` }
                        onClick={ changeComponent }
                        data-name="aboutUs"
                    >O nas</a>
                </li>
                <li className={ `nav-item` }>
                    <a href="#" className={ `nav-link ${styles.navLink}` }
                        data-name="contact"
                        onClick={ changeComponent }
                    >Kontakt</a>
                </li>
                <button
                    className={ `btnMode ${styles.btnMode}  btn` }
                    onClick={ changeColor }
                >light mode</button>
            </ul>
        </div >
    )
}

export default Menu