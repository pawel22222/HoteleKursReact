import styles from './Hotel.module.scss'
import img from '../../../Assets/images/hotel.jpg'

import PropTypes from 'prop-types'

const propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
}

function Hotel({ name, city, rating, desc }) {


    return (
        <div className={ `p-2 mb-3 card ${styles.hotelDiv} ` }>
            <div className="row">
                <div className={ `col-4 col-lg-3` } >
                    <img
                        src={ img }
                        alt="hotel"
                        className="img-fluid img-thumbnail" />
                </div>
                <div className="col">
                    <p className="text fs-5 d-flex justify-content-start">{ name }</p>
                    <p className="d-flex justify-content-start">{ city }</p>
                </div>
                <div className="col d-flex flex-column align-items-end">
                    <p className="">Ocena: <span>{ rating }</span></p>
                    <button className="btn btn-primary ">Pokaż</button>
                </div>
            </div>
            <p className="d-flex justify-content-start">{ desc }</p>
        </div>
    )
}

Hotel.propTypes = propTypes

export default Hotel