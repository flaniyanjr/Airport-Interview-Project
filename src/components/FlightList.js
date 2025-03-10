import FlightCard from './FlightCard'

function FlightList({allFlights, addToRotation, rotationList}) {

    const flights= allFlights.map(flightObj => {
        return <FlightCard key= {flightObj.ident} flightObj= {flightObj} addToRotation= {addToRotation} rotationList= {rotationList}/>
    })

    let filteredFlightCards

// Filters flight list so that it only shows flights that leave from the correct airport and are at least 20 min after the previous flight after a flight is added to the rotation list
    if (rotationList.length > 0) {
        const filteredFlights= allFlights.filter(flightObj => {
            return flightObj.origin === rotationList[rotationList.length-1].destination && flightObj.departuretime-rotationList[rotationList.length-1].arrivaltime >= 1200
        })
        filteredFlightCards= filteredFlights.map(flightObj => {
            return <FlightCard key= {flightObj.ident} flightObj= {flightObj} addToRotation= {addToRotation} rotationList= {rotationList}/>
        })
    }
    
    return(
            <div className="flights-list-box">
                {rotationList.length > 0 ? filteredFlightCards : flights}
            </div>
    )
}

export default FlightList