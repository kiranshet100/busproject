import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchForm from './search/SearchForm';
import SearchResults from './search/SearchResults';
import BusDetailsPage from './bus/BusDetailsPage'; // Make sure this path is correct

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<SearchForm />} />
          <Route path="/search" element={<SearchForm />} />
          <Route path="/results" element={<SearchResults />} />
          <Route path="/bus-details/:busId" element={<BusDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
