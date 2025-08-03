

import { useState } from 'react'
import Main from './components/Main';
import './App.css';

function App() {
  // Example tables - in a real app, these would be fetched from a database or file
  const tables = ['users', 'orders', 'products', 'customers'];

  return (
    <div className="app">
      <Main tables={tables} />
    </div>
  )
}

export default App

