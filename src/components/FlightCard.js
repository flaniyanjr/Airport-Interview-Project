
function FlightCard({flightObj, addToRotation}) {
    
    function handleClick() {
        addToRotation(flightObj)
    }

    return(
        <div className="flight-box">
            <p>{flightObj.ident}</p>
            <p>{flightObj.origin} → {flightObj.destination}</p>
            <p>{flightObj.readable_departure} - {flightObj.readable_arrival}</p>
            <button onClick={handleClick}>add</button>
        </div>
    )
}


export default FlightCard