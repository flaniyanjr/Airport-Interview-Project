import FlightCard from './FlightCard'


function FlightList({allFlights}) {

    const flights= allFlights.map(flightObj => {
        return <FlightCard key= {flightObj.ident} flightObj= {flightObj}/>
    })
    
    return(
            <div className="flights-list-box">
                {flights}
            </div>
    )
}


export default FlightList