import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import InstructorContainer from './Containers/InstructorContainer'
import AnimeContainer from './Containers/AnimeContainer';

class App extends React.Component {
  state = { instructor: {} }
  appClickHandler = (instructor_obj) => {
    console.log("%c in App!", "color: red", instructor_obj)
    this.setState({ instructor: instructor_obj })
  }
  render() {
    return (
      <>
        <Header />
        <InstructorContainer appClickHandler={this.appClickHandler} />
        <AnimeContainer instructor={this.state.instructor} />
        {/* this instructors variable should match the one on map iterattion should match the  */}
      </>

    );
  }
}

export default App;
