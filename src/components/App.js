import '../styling/App.css';
import { useEffect, useState } from "react";
import FlightList from './FlightList';
import {Grid, Box} from '@mui/material'
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

// Adding the first flgiht into the rotation column
  function addToRotation(newFlight) {
    if (rotationList.length === 0) {
      setRotationList(current => [...current, newFlight])

// Validations that lead to a successful entry in the rotation column
    } else if (rotationList.length > 0 && rotationList[rotationList.length-1].destination === newFlight.origin && rotationList[rotationList.length-1].departuretime < newFlight.departuretime) {
      setRotationList(current => [...current, newFlight])

// Validation for if flight doesn't leave from correct airport
    } else if (rotationList.length > 0 && rotationList[rotationList.length-1].destination !== newFlight.origin) {
      alert(`Error: Flight's origin must be ${rotationList[rotationList.length-1].destination}`)

// Validation for if flight's aren't placed in order of time
    } else if (rotationList.length > 0 && rotationList[rotationList.length-1].departuretime > newFlight.departuretime) {
      alert('Error: Flights need to be placed in order of time')
    }
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
      </div>
    </div>
  );
}

export default App;
