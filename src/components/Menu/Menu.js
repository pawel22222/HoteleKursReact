import styles from './Menu.module.scss'

import MenuItem from './MenuItem/MenuItem'

function Menu({ changeComponent }) {


    const appDiv = document.querySelector('.appDiv')
    const btnMode = document.querySelector('.btnMode')

    const changeColor = () => {
        if (appDiv.getAttribute('data-mode') === 'light') {
            appDiv.setAttribute('data-mode', 'dark')
            btnMode.innerHTML = "Jasny"
        } else {
            appDiv.setAttribute('data-mode', 'light')
            btnMode.innerHTML = "Ciemny"
        }
    }

    const menuList = [
        {
            id: 1,
            dataName: 'home',
            displayName: 'Home'
        },
        {
            id: 2,
            dataName: 'hotels',
            displayName: 'Hotele'
        },
        {
            id: 3,
            dataName: 'aboutUs',
            displayName: 'O nas'
        },
        {
            id: 4,
            dataName: 'contact',
            displayName: 'Kontakt'
        }
    ]


    return (
        <div className={ `card ${styles.menuDiv}` }>
            <ul className={ `d-flex justify-content-around p-2 nav` }>
                { menuList.map((menuItem) =>
                    <MenuItem
                        key={ menuItem.id }
                        { ...menuItem }
                        changeComponent={ changeComponent }
                    />) }



                <button
                    className={ `btnMode ${styles.btnMode}  btn` }
                    onClick={ changeColor }
                >Jasny</button>
            </ul>
        </div>
    )
}

export default Menu