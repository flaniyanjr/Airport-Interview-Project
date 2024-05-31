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


  return (
    <div className= 'app-container'>
      <Header />
      <div className= 'main-content'>
      <AircraftList allAircrafts= {allAircrafts}/>
      <RotationList />
      <FlightList allFlights={allFlights}/>
      {/* <FlightSchedule /> */}
      </div>
    </div>
  );
}

export default App;
