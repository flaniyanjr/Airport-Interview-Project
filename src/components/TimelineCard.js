
function TimelineCard({rotationList, hour}) {

    // 3600 seconds in an hour
    // const rotationListTimes= rotationList.map(rotationObj => {
    //     return [rotationObj.departuretime/3600, rotationObj.arrivaltime/3600]
    // })

    // const block= rotationListTimes.map(rotationList => {
    //     if (hour >= rotationList[0] && hour <= rotationList[1]) {
    //         return <div className= 'service-block'></div>
    //     } else {
    //         return <div className= 'idle-block'> </div>
    //     }
    // });



    // let block

    // for (let i=0; i < rotationListTimes.length; i++) {
    //     if (hour >= rotationListTimes[i][0] && hour <= rotationListTimes[i][1]) {
    //         block= <div className= 'service-block'></div>
    //     } else {
    //         block= <div className= 'idle-block'> </div>
    //     }
    // }

    return(
        <div>
            {/* {block} */}
        </div>
    )
}

export default TimelineCard