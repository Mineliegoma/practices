import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'

function App() {
  const instructors_names = ["Tashawn", "greg", "Steven", "Ian"]
  return (
    <Header instructors={instructors_names} />

  )
}

export default App;
