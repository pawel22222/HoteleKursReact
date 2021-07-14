import Hotel from './Hotel/Hotel'
import styles from './Hotels.module.scss'

function Hotels({ hotels }) {
    return (
        <div className={ `container ${styles.hotelsDiv}` } >
            <h1 className={ `${styles.header} ` }>Hotele</h1>
            <div>
                { hotels.map(hotel => <Hotel key={ hotel.id } { ...hotel } />) }
            </div>
        </div>
    )
}

export default Hotels