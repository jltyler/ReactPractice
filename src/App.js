import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello there...</h1>
        <Person name="Money" title="Trillionayre"/>
        <h2>Hello there...</h2>
        <Person name="Mantis" title="Clean and Legitimate Pagaent Conductor"/>
      </div>
    );
  }
}
export default App;
