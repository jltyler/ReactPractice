import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import PersonClass from './Person/PersonClass';

class App extends Component {
  state = {
    displayOthers: false,
    person: {
      name: 'Dudemang',
      title: 'guy who doesn\'t afraid of anything.',
    },
    people: [
      {name: 'Megaman', title: 'Super Fighting Robot'},
      {name: 'Data', title: 'More human than any of us'},
      {name: 'Amos', title: 'That Guy'},
      {name: 'Garthpetersans', title: 'Living in a Society'},
      {name: 'Cackletta', title: 'That one laser eye attack'},
    ],
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

  changePersonName = (index, event) => {
    let newPeople = this.state.people;
    newPeople[index].name = event.target.value; 
    this.setState({
      people: newPeople
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
        {this.state.people && this.state.people.length &&
        <div>
          {this.state.people.map((p, i) => <Person name={p.name} title={p.title} textChange={this.changePersonName.bind(this, i)} />)}
        </div>
        }
      </div>
    );
  }
}
export default App;
