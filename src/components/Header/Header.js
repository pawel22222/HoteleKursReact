import styles from './Header.module.scss'
import Searchbar from './Searchbar/Searchbar'

function Header({ filterHotels }) {
    return (
        <div className={ `${styles.header} ` }>
            <Searchbar filterHotels={ filterHotels } />
        </div>
    )
}

export default Header