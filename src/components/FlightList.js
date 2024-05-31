import FlightCard from './FlightCard'


function FlightList({allFlights, addToRotation}) {

    const flights= allFlights.map(flightObj => {
        return <FlightCard key= {flightObj.ident} flightObj= {flightObj} addToRotation= {addToRotation}/>
    })
    
    return(
            <div className="flights-list-box">
                {flights}
            </div>
    )
}


export default FlightList