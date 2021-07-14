import styles from './Hotel.module.scss'
import img from '../../../Assets/images/hotel.jpg'

function Hotel({ name, city, rating, desc }) {
    return (
        <div className={ `p-2 mb-3 card ${styles.hotelDiv}` }>
            <div className="row">
                <div className={ `col-4 col-lg-3` } >
                    <img
                        src={ img }
                        alt="hotel"
                        className="img-fluid img-thumbnail" />
                </div>
                <div className="col">
                    <p className="text fs-5 ">{ name }</p>
                    <p>{ city }</p>
                </div>
                <div className="col d-flex flex-column align-items-end">
                    <p className="">Ocena: <span>{ rating }</span></p>
                    <button className="btn btn-primary ">Pokaż</button>
                </div>
            </div>
            <p>{ desc }</p>
        </div>
    )
}

export default Hotel