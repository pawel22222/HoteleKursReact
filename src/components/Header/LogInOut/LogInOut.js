import { useContext } from 'react'
import authContext from '../../../Context/authContext'


function LogInOut() {
    const auth = useContext(authContext)

    return (

        (auth.isAuthenticated)
            ? <button
                onClick={ auth.logOut }
                className="btn btn-secondary"
            >Wyloguj</button>
            : <button
                onClick={ auth.logIn }
                className="btn btn-primary"
            >Zaloguj</button>


    )
}
export default LogInOut