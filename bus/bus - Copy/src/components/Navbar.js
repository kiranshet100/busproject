import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure you have this CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Home</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Search</Link>
        <Link to="/other-page">Other Page</Link>
      </div>
    </nav>
  );
};

export default Navbar;
