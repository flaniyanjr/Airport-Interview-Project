import RotationCard from "./RotationCard"

function RotationList({rotationList}) {

    const rotationFlights= rotationList.map(rotationObj => {
        return <RotationCard key= {rotationObj.ident} rotationObj= {rotationObj}/>
    })

    return(
        <div className="rotation-list-box">
            {rotationFlights}
        </div>
    )
}



export default RotationList