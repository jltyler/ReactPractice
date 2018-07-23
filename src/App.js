import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>Hello World</h1>
    //   </div>
    // );
    const options = {
      className: 'App'
    }
    return React.createElement('div', options, React.createElement('h1', {}, 'Hello there...'))
  }
}
export default App;
