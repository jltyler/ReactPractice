import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import PersonClass from './Person/PersonClass';

class App extends Component {
  state = {
    displayOthers: true,
    person: {
      name: 'Dudemang',
      title: 'guy who doesn\'t afraid of anything.',
    },
  }

  toggleDisplayOthers = () => {
    this.setState({
      displayOthers: !this.state.displayOthers,
    })
  }

  changeName = (e) => {
    this.setState({
      person: {
        name: e.target.value,
        title: this.state.person.title,
      }
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.displayOthers && 
        <div>
        <h1>Hello there...</h1>
        <Person name="Money" title="Trillionayre"/>
        <h2>I am</h2>
        <Person name={this.state.person.name} title={this.state.person.title} textChange={this.changeName.bind(this)}>WOAH WOAH!</Person>
        </div>
        }
        <PersonClass clickAction={this.toggleDisplayOthers}/>
        <PersonClass>Hmmm....</PersonClass>
      </div>
    );
  }
}
export default App;
