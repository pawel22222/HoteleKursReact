import styles from './Home.module.scss'

function Home() {
    return (
        <div className={ `${styles.homeDiv}` }>
            <h1 className={ `${styles.header}` }>Home</h1>
        </div>
    )
}

export default Home