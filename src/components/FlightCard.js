


function FlightCard({flightObj}) {

    const {ident, departuretime, arrivaltime, readable_departure, readable_arrival, origin, destination}= flightObj

    return(
        <div className="flight-box">
            <p>{ident}</p>
            <p>{origin} → {destination}</p>
            <p>{readable_departure} - {readable_arrival}</p>
            <button>add</button>
        </div>
    )
}





export default FlightCard