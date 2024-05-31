import './FlightSchedule.css';

const FlightSchedule = () => {
  return (
    <div className="schedule-container">
      <div className="header">
        <button>{"<"}</button>
        <span>4th January 2018</span>
        <button>{">"}</button>
      </div>
      <div className="rotation">Rotation ABCDE</div>
      <div className="main-content">
        <div className="aircrafts">
          <div className="aircraft-box">
            ABCDE (58 %)
          </div>
        </div>
        <div className="flights">
          <div className="flight-card">
            <div>Flight: AS1001</div>
            <div>JFK <span className="arrow">→</span> LDN</div>
            <div>2:00 10:34</div>
          </div>
          <div className="flight-card">
            <div>Flight: AS1002</div>
            <div>LDN <span className="arrow">→</span> CDG</div>
            <div>14:45 16:00</div>
          </div>
          <div className="flight-card">
            <div>Flight: AS1003</div>
            <div>CDG <span className="arrow">→</span> LDN</div>
            <div>17:00 18:45</div>
          </div>
        </div>
        <div className="flights-summary">
          <div className="summary-box">
            <div>AS1000</div>
            <div>LDN 8:43</div>
            <div>CDG 9:45</div>
          </div>
          <div className="summary-box selected">
            <div>AS1001</div>
            <div>JFK 2:00</div>
            <div>LDN 10:34</div>
          </div>
        </div>
      </div>
      <div className="timeline">
        <div className="time-box green"></div>
        <div className="time-box orange"></div>
        <div className="time-box grey"></div>
      </div>
    </div>
  );
};

export default FlightSchedule;