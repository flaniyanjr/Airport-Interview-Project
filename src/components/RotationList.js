import RotationCard from "./RotationCard"

function RotationList({removeFromRotation, rotationList}) {

    const rotationFlights= rotationList.map(rotationObj => {
        return <RotationCard key= {rotationObj.ident} rotationObj= {rotationObj} removeFromRotation= {removeFromRotation}/>
    })

    function handleDelete() {
        removeFromRotation(rotationFlights[rotationFlights.length-1].props.rotationObj.ident)
    }

    return(
        <div className="rotation-list-box">
            {rotationFlights}
            <div className= 'delete-button'>
                {rotationFlights.length > 0 ? <button onClick={handleDelete}>delete</button> : null}
            </div>
        </div>
    )
}



export default RotationList