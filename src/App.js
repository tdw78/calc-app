import React, { Component } from 'react';
import './App.css';
import Button from './Components/Button.js';
import Operator from './Components/Operator.js';

class App extends Component {
  render() {
  return (
    <div className="App">
      <div className="calc-display">

      <div className="button-row">
          <Button>AC</Button>
          <Button>+/-</Button>
          <Button>%</Button>
          <Operator>/</Operator>
        </div>
        
        <div className="button-row">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Operator>X</Operator>
        </div>

        <div className="button-row">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Operator>-</Operator>
        </div>

        <div className="button-row">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Operator>+</Operator>
        </div>

        <div className="button-row">
          <Button>0</Button>
          <Button></Button>
          <Button>.</Button>
          <Operator>=</Operator>
        </div>

      </div>
    </div>
  );
 }
}

export default App;
