import React from 'react';
import '../components/styles/NavBar.css';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => (
  <div className="navBarStyle">
    <div className="logo">
      <i className="fas fa-headphones fa-9x" />
    </div>
    <ul>
      <Link to="/" id="list">Music Library</Link>
      <Link to="/viewartists" id="list">View Artists</Link>
      <Link to="/addartists" id="list">Add Artists</Link>
    </ul>
  </div>
);

export default NavBar;
