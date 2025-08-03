

import React from 'react';
import './Sidebar.css';

const Sidebar = ({ tables, selectedTable, onSelectTable }) => {
  return (
    <div className="sidebar">
      <h2>Tables</h2>
      <ul>
        {tables.map((table) => (
          <li
            key={table}
            className={selectedTable === table ? 'active' : ''}
            onClick={() => onSelectTable(table)}
          >
            {table}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

