import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchForm.css';
import busImage from '../assets/bus.jpg';

const SearchForm = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const places = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'];

  const handleInputChange = (e, setState) => {
    const value = e.target.value;
    setState(value);

    if (value) {
      setSuggestions(places.filter(place => place.toLowerCase().includes(value.toLowerCase())));
    } else {
      setSuggestions([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/results?from=${from}&to=${to}&date=${date}`);
  };

  return (
    <div className="search-page" style={{ backgroundImage: `url(${busImage})` }}>
      <div className="content">
        <form onSubmit={handleSubmit} className="search-form">
          <div className="input-group">
            <label htmlFor="from">
              <i className="fa fa-bus"></i> From
            </label>
            <input 
              type="text" 
              id="from"
              value={from} 
              onChange={(e) => handleInputChange(e, setFrom)} 
              list="from-places"
              placeholder="Enter departure city"
            />
            <datalist id="from-places">
              {suggestions.map((suggestion, index) => (
                <option key={index} value={suggestion} />
              ))}
            </datalist>
          </div>
          <div className="input-group">
            <label htmlFor="to">
              <i className="fa fa-bus"></i> To
            </label>
            <input 
              type="text" 
              id="to"
              value={to} 
              onChange={(e) => handleInputChange(e, setTo)} 
              list="to-places"
              placeholder="Enter destination city"
            />
            <datalist id="to-places">
              {suggestions.map((suggestion, index) => (
                <option key={index} value={suggestion} />
              ))}
            </datalist>
          </div>
          <div className="input-group">
            <label htmlFor="date">
              <i className="fa fa-calendar"></i> Date
            </label>
            <input 
              type="date" 
              id="date"
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
            />
          </div>
          <button type="submit" className="search-button">Search Buses</button>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
