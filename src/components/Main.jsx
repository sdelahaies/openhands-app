


import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import './Main.css';

const Main = ({ tables }) => {
  const [selectedTable, setSelectedTable] = useState(tables.length > 0 ? tables[0] : null);
  const [viewMode, setViewMode] = useState('data'); // 'data' or 'schema'

  const handleSelectTable = (table) => {
    setSelectedTable(table);
  };

  return (
    <div className="main-container">
      <Sidebar
        tables={tables}
        selectedTable={selectedTable}
        onSelectTable={handleSelectTable}
      />
      <div className="content">
        <Navbar viewMode={viewMode} setViewMode={setViewMode} />
        <div className="main-content">
          {selectedTable ? (
            <div>
              <h1>{selectedTable}</h1>
              {viewMode === 'data' ? (
                <p>Data for {selectedTable} will be displayed here</p>
              ) : (
                <p>Schema for {selectedTable} will be displayed here</p>
              )}
            </div>
          ) : (
            <p>Select a table to view its data or schema</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;


