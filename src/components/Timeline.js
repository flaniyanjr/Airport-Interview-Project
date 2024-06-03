
function Timeline({rotationList}) {

    let minutesList= []
    for (let i=0; i <= 1440; i++) {
        minutesList.push(i)
    }

    const rotationListTimes= rotationList.map(rotationObj => {
        return [rotationObj.departuretime/60, rotationObj.arrivaltime/60]
    })

    const emptyTimeline= minutesList.map(() => {
        return <div className= 'idle-block'></div>
    })

    const minuteBlocks= minutesList.map(minute => {
        for (let i=0; i < rotationListTimes.length; i++) {
            if (rotationListTimes[i][0] <= minute && rotationListTimes[i][1] >= minute) {
                return <div key= {minute} className= 'service-block'></div>
            } else if (minute > rotationListTimes[i][1] && minute < (rotationListTimes[i][1] + 20)) {
                return <div key= {minute} className= 'turnaround-block'></div>
            }  {
                return <div key= {minute} className= 'idle-block'> </div>
            }
        }
    })

    // const minuteBlocks= minutesList.map(minute => {
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
            {rotationList.length > 0 ? minuteBlocks : emptyTimeline}
        </div>
    )
}


export default Timeline