const Info = function ({ textInfo }) {
    return (
        <div className="d-inline-flex ">
            <div className="alert alert-info" role="alert">
                { textInfo }
            </div>
        </div>
    )
}

export default Info