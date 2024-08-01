// src/bus/BusDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import busImage from '../assets/bus.jpg'; // Ensure this path is correct
import './BusDetailsPage.css';

const busData = [
  {
    id: 1,
    name: "Hans Travels (I) Private Limited",
    departure: "19:00",
    arrival: "07:40",
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
const calculateEstimatedTime = (departure, arrival) => {
  const departureDate = new Date(`1970-01-01T${departure}:00`);
  const arrivalDate = new Date(`1970-01-01T${arrival}:00`);
  
  if (arrivalDate < departureDate) {
    arrivalDate.setDate(arrivalDate.getDate() + 1); // Handle overnight trips
  }

  const difference = (arrivalDate - departureDate) / (1000 * 60 * 60); // Difference in hours
  return difference.toFixed(2); // Two decimal places
};

const BusDetailsPage = () => {
  const { busId } = useParams();
  const bus = busData.find(bus => bus.id === parseInt(busId));

  if (!bus) {
    return <div>Bus not found</div>;
  }
  const estimatedTime = calculateEstimatedTime(bus.departure, bus.arrival);
  return (
    <div className="bus-details-page">
      <img src={busImage} alt="Bus" className="bus-image" />
      <div className="bus-info">
        <h2>{bus.name}</h2>
        <div className="row">
          <label>Departure:</label>
          <span>{bus.departure}</span>
        </div>
        <div className="row">
          <label>Arrival:</label>
          <span>{bus.arrival}</span>
        </div>
        <div className="stops">
          {bus.stops.map((stop, index) => (
            <div key={index} className="stop">
              <span>{stop.time}</span> - <span>{stop.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
        Estimated Time: {estimatedTime} hours
      </div>
      
    </div>
    
  );
};

export default BusDetailsPage;
