

function AircraftList({allAircrafts, rotationList}) {

    const aircraftTypes= allAircrafts.map(aircraftObj => {
        return aircraftObj.type
    })
    const uniqueAircraftTypes= Array.from(new Set(aircraftTypes))


    const totalRotationFlightTimesArray= rotationList.map(rotationObj => {
        return rotationObj.arrivaltime - rotationObj.departuretime
    })
    let totalTime= 0
    for (let i= 0; i < totalRotationFlightTimesArray.length; i++) {
        totalTime= totalTime + totalRotationFlightTimesArray[i]
    }
    const secondsInDay= 86400
    const utilisationPercentage= Math.round((totalTime/secondsInDay) * 100)

    return(
         <div className="aircraft-list-box">
            <div className="aircraft-box">
                {uniqueAircraftTypes[0]} ({utilisationPercentage}%)
            </div>
        </div>
    )
}

export default AircraftList