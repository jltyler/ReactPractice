import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import PersonClass from './Person/PersonClass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello there...</h1>
        <Person name="Money" title="Trillionayre"/>
        <h2>I am</h2>
        <Person name="Mantis" title="Clean and Legitimate Pagaent Conductor">WOAH WOAH!</Person>
        <PersonClass />
        <PersonClass>Hmmm....</PersonClass>
      </div>
    );
  }
}
export default App;
