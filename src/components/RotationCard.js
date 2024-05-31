
function RotationCard({removeFromRotation, rotationObj}) {

    const {ident, departuretime, arrivaltime, readable_departure, readable_arrival, origin, destination}= rotationObj

    function handleDelete() {
        removeFromRotation(ident)
    }

    return(
        <div className= 'rotation-box'>
            <div className="flight-box">
            <p>Flight: {ident}</p>
            <p>{origin} → {destination}</p>
            <p>{readable_departure} - {readable_arrival}</p>
            <button onClick={handleDelete}> delete </button>
        </div>
        </div>
    )
}



export default RotationCard