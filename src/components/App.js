import '../styling/App.css';
import { useEffect, useState } from "react";
import FlightList from './FlightList';
import {Grid, Box} from '@mui/material'
import FlightSchedule from './FlightSchedule';
import Header from './Header';
import AircraftList from './AircraftList';
import RotationList from './RotationList';

function App() {

  const [allAircrafts, setAllAircrafts] = useState([])
  const [allFlights, setAllFlights]= useState([])
  const [rotationList, setRotationList] = useState([])

  useEffect(() =>{
    fetch('https://recruiting-assessment.alphasights.com/api/aircrafts')
    .then((resp) => {
      if (resp.ok) {
        resp.json().then(aircrafts => setAllAircrafts(aircrafts))
      } else {
        console.log('Failed to retrieve aircrafts')
      }
    })
  }, [])

  useEffect(() =>{
    fetch('https://recruiting-assessment.alphasights.com/api/flights')
    .then((resp) => {
      if (resp.ok) {
        resp.json().then(aircrafts => setAllFlights(aircrafts))
      } else {
        console.log('Failed to retrieve flights')
      }
    })
  }, [])

  function addToRotation(newFlight) {
    setRotationList(current => [...current, newFlight])
  }

  function removeFromRotation(ident) {
    const newRotationList= rotationList.filter(rotationObj => {
      return rotationObj.ident !== ident
    })
    setRotationList(newRotationList)
  }


  return (
    <div className= 'app-container'>
      <Header />
      <div className= 'main-content'>
      <AircraftList allAircrafts= {allAircrafts}/>
      <RotationList rotationList= {rotationList} removeFromRotation= {removeFromRotation}/>
      <FlightList allFlights={allFlights} addToRotation= {addToRotation} />
      {/* <FlightSchedule /> */}
      </div>
    </div>
  );
}

export default App;
