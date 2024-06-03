
function Timeline({rotationList}) {

    let minutesList= []
    for (let i=0; i <= 1440; i++) {
        minutesList.push(i)
    }

    const rotationListTimes= rotationList.map(rotationObj => {
        return [rotationObj.departuretime/60, rotationObj.arrivaltime/60]
    })

// For each hour, I want to look at each element in the rotaionListTimes and see if the hour falls within the time period. If it does then return green, if it doesn't then return gray

    const minuteBlocks= minutesList.map(minute => {
        for (let i=0; i < rotationListTimes.length; i++) {
            if (rotationListTimes[i][0] <= minute && rotationListTimes[i][1] >= minute) {
                return <div className= 'service-block'></div>
            } else if (minute > rotationListTimes[i][1] && minute < (rotationListTimes[i][1] + 20)) {
                return <div className= 'turnaround-block'></div>
            } else {
                return <div className= 'idle-block'> </div>
            }
        }
    })

    // const minuteBlocksList= minutesList.map(minute => {
    //     let lst= []
    //     for (let i=0; i < rotationListTimes.length; i++) {
    //         if (rotationListTimes[i][0] <= minute && rotationListTimes[i][1] >= minute) {
    //             lst.push(<div className= 'service-block'></div>) 
    //         } else if (minute > rotationListTimes[i][1] && minute < (rotationListTimes[i][1] + 20)) {
    //             lst.push(<div className= 'turnaround-block'></div>) 
    //         } else {
    //             lst.push(<div className= 'idle-block'> </div>) 
    //         }
    //     }
    //     return lst
    // })

    return(
        <div className= 'timeline'>
            {minuteBlocks}
        </div>
    )
}


export default Timeline