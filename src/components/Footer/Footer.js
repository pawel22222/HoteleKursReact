import styles from './Footer.module.scss'


function Footer() {
    return (
        <div className={ `${styles.footerDiv}` }>
            <p className={ `${styles.copyright}` }>Copyright</p>
        </div>
    )
}

export default Footer