import styles from './Menu.module.scss'

import MenuItem from './MenuItem/MenuItem'

function Menu({ changeComponent }) {

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
            <ul className={ `container d-flex justify-content-around p-2 nav` }>
                { menuList.map((menuItem) =>
                    <MenuItem
                        key={ menuItem.id }
                        { ...menuItem }
                        changeComponent={ changeComponent }
                    />) }

            </ul>
        </div>
    )
}

export default Menu