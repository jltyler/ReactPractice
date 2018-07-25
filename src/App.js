import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserIO/UserOutput';
import UserInput from './UserIO/UserInput';
import './UserIO/UserIO.css';

class App extends Component {
  state = {
    displayOthers: true,
    person: {
      name: 'Dudemang',
      title: 'guy who doesn\'t afraid of anything.',
    },
    username: "Juicy Jokerwaa",
  }

  toggleDisplayOthers = (e) => {
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

  changeUsername = (e) => {
    this.setState({
      username: e.target.value,
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput username={this.state.username} changeHandler={this.changeUsername} />
        <UserOutput username={this.state.username} />
        <hr />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}
export default App;
