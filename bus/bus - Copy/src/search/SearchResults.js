import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './SearchResults.css';
import busImage from '../assets/bus.jpg'; // Ensure this path is correct

const busData = [
  {
    id: 1,
    name: "Hans Travels (I) Private Limited",
    departure: "19:00",
    arrival: "07:40",
    Duration: "12h 40m",
    stops: [
      { time: "19:00", name: "Start Point" },
      { time: "20:00", name: "Stop 1" },
      { time: "21:30", name: "Stop 2" },
      { time: "23:00", name: "Stop 3" },
      { time: "07:40", name: "Destination" },
    ]
  },
  // More bus data...
];

const SearchResults = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const from = params.get('from');
  const to = params.get('to');
  const date = params.get('date');

  return (
    <div className="results-page">
      <div className="results-content">
        <h1>Buses from {from} to {to} on {date}</h1>
        {busData.map(bus => (
          <Link to={`/bus-details/${bus.id}`} key={bus.id} className="bus-card-link">
            <div className="bus-card">
              <div className="bus-image-container">
                <img src={busImage} alt="Bus" className="bus-image" />
              </div>
              <div className="bus-details">
                <div className="row">
                  <div className="column">
                    <span>{bus.name}</span>
                  </div>
                  <div className="column">
                    <label>Departure:</label>
                    <span>{bus.departure}</span>
                  </div>
                  <div className="column">
                    <label>Arrival:</label>
                    <span>{bus.arrival}</span>
                  </div>
                  <div className="column">
                    <label>Duration:</label>
                    <span>{bus.Duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
