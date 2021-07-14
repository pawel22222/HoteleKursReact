import styles from './MenuItem.module.scss'

function MenuItem({ changeComponent, displayName, dataName }) {

    return (
        <button
            className={ `nav-link ${styles.navLink} btn btn-link` }
            onClick={ changeComponent }
            data-name={ dataName }
        >{ displayName }
        </button>
    )
}

export default MenuItem