import { useState } from 'react'
import styles from './Searchbar.module.scss'


function Searchbar({ filterHotels }) {

    const [inputName, setInputName] = useState('')
    const [inputCity, setInputCity] = useState('')

    const search = () => filterHotels(inputName, inputCity)

    const enterKeyDown = (e) => e.key === "Enter" && search()

    return (
        <div className={ `form-group d-flex  ${styles.searchbarDiv}` } >
            <input
                className={ ` form-control ${styles.input}` }
                placeholder="Nazwa.."
                value={ inputName }
                onChange={ (e) => setInputName(e.target.value) }
                onKeyDown={ enterKeyDown }
            />
            <input
                className={ ` form-control mx-2 ${styles.input}` }
                placeholder="Miasto.."
                value={ inputCity }
                onChange={ (e) => setInputCity(e.target.value) }
                onKeyDown={ enterKeyDown }
            />
            <button
                className={ ` btn btn-primary` }
                onClick={ search }
            >
                Szukaj
            </button>
        </div>
    )
}

export default Searchbar