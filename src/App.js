import React, { Component } from 'react';
import './App.css';
import Validator from './Validator';
import Char from './Char'

class App extends Component {
  state = {
    inputLength: 0,
    charString: '',
  };

  validatorInput = (e) => {
    this.setState({
      inputLength: e.target.value.length
    });
  }

  charInput = (e) => {
    this.setState({
      charString: e.target.value
    });
  }

  removeChar = (i, e) => {
    const charList = this.state.charString.split('');
    charList.splice(i, 1)
    this.setState({
      charString: charList.join('')
    })
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.validatorInput} />
        <h4>{this.state.inputLength}</h4>
        <Validator textLength={this.state.inputLength}/>
        <input type="text" onChange={this.charInput} value={this.state.charString}/>
        <br />
        {this.state.charString.split('').map((c, i) => {
          return <Char char={c} key={c+i} removeHandler={this.removeChar.bind(this, i)} />
        })}
      </div>
    );
  }
}
export default App;
