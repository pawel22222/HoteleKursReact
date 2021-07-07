import styles from './Menu.module.scss'


function Menu() {

    // Window.onload - funkcja wywołująca kod po wczytaniu struktury DOM
    window.onload = () => {
        const btnMode = document.querySelector('.btnMode')
        const appDiv = document.querySelector('.appDiv')
        // console.log(btnMode);
        // console.log(appDiv)
        btnMode.addEventListener('click', () =>
            (appDiv.getAttribute('data-mode') === 'light')
                ? appDiv.setAttribute('data-mode', 'dark')
                : appDiv.setAttribute('data-mode', 'light')
        )
    }


    return (
        <div className={ `card ${styles.menuDiv}` }>
            <ul className={ `d-flex justify-content-around p-2 nav` }>
                <li className={ `nav-item` }>
                    <a href="#" className="nav-link">Home</a>
                </li>
                <li className={ `nav-item` }>
                    <a href="#" className="nav-link">Oferta</a>
                </li>
                <li className={ `nav-item` }>
                    <a href="#" className="nav-link">O nas</a>
                </li>
                <li className={ `nav-item` }>
                    <a href="#" className="nav-link">Kontakt</a>
                </li>
                <button className={ `btnMode ${styles.btnMode}  btn` }>color mode</button>
            </ul>
        </div>
    )
}

export default Menu