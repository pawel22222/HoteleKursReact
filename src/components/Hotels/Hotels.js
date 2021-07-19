import styles from './Hotels.module.scss'

function Hotels({ children }) {
    return (
        <div className={ `container ${styles.hotelsDiv}` } >
            <h1 className={ `${styles.headerHotels} ` }>Hotele</h1>
            <div>
                { children }
            </div>
        </div>
    )
}

export default Hotels