import React, { Component } from 'react';
import './App.css';
import People from './Person/People';

class App extends Component {

  changePersonName = (index, event) => {
    let peopleCopy = [...this.state.people];
    let personCopy = {...peopleCopy[index]};
    personCopy.name = event.target.value;
    peopleCopy[index] = personCopy;
    this.setState({
      people: peopleCopy
    });
  }

  render() {
    return (
      <div className="App">
      <People />
      </div>
    );
  }
}
export default App;
