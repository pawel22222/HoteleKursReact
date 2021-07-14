import styles from './Header.module.scss'
import Searchbar from './Searchbar/Searchbar'

function Header({ filterHotels, showContent }) {
    return (
        <div className={ `${styles.header} ` }>
            { (showContent === 'hotels' && <Searchbar filterHotels={ filterHotels } />) }
        </div>
    )
}

export default Header