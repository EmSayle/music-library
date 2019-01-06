import React from 'react';
import '../components/styles/NavBar.css';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BottomNav = () => (
  <div className="navBarStyle">
    <ul>
      <Link to="/addartists" id="list">Add An Artists</Link>
    </ul>
  </div>
);

export default BottomNav;
