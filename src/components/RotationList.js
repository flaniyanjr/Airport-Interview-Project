import RotationCard from "./RotationCard"

function RotationList({removeFromRotation, rotationList}) {

    const rotationFlights= rotationList.map(rotationObj => {
        return <RotationCard key= {rotationObj.ident} rotationObj= {rotationObj} removeFromRotation= {removeFromRotation}/>
    })

    return(
        <div className="rotation-list-box">
            {rotationFlights}
        </div>
    )
}



export default RotationList