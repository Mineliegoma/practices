import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import InstructorContainer from './Containers/InstructorContainer'

function App() {
  const instructors_names = [{ id: 1, name: "Tashawn" }, { id: 2, name: "greg" }, { id: 3, name: "Steven" }, { id: 4, name: "Ian" }]
  return (
    <>
      <Header />
      <InstructorContainer instructors={instructors_names} />
      {/* this instructors variable should match the one on map iterattion should match the  */}
    </>

  )
}

export default App;
