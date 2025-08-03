


import React from 'react';
import './Navbar.css';

const Navbar = ({ viewMode, setViewMode }) => {
  return (
    <nav className="navbar">
      <ul>
        <li
          className={viewMode === 'data' ? 'active' : ''}
          onClick={() => setViewMode('data')}
        >
          Data
        </li>
        <li
          className={viewMode === 'schema' ? 'active' : ''}
          onClick={() => setViewMode('schema')}
        >
          Schema
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


