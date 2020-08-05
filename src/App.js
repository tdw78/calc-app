import React, { Component } from 'react';
import './App.css';
import Button from './Components/Button';
import Operator from './Components/Operator';
import Display from './Components/Display';
import Clear from './Components/Clear';
import Function from './Components/Function'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      display: "",
      prevNum: "",
      currNum: "",
      operator: ""
    };
  }

  addToDisplay = val => { 
    this.setState({ display: this.state.display + val});
  }

  addZeroToDisplay = val => {
    if(!this.state.display.length){
      this.setState({ display: "" })
    } else {
      this.setState({ display: this.state.display + val });
    }
  }

  addDecimalToDisplay = val => {
    if(this.state.display.indexOf(val) === -1){
      this.setState({ display: this.state.display + val })
    }
  }

clearDisplay = () => {
  this.setState({ display: "" })
}

add = () => {
  this.state.prevNum = this.state.display
  this.setState({ display: "" })
  this.state.operator = "plus"
}

subtract = () => {
  this.state.prevNum = this.state.display
  this.setState({ display: "" })
  this.state.operator = "subtract"
}

divide = () => {
  this.state.prevNum = this.state.display
  this.setState({ display: "" })
  this.state.operator = "divide"
}

multiply = () => {
  this.state.prevNum = this.state.display
  this.setState({ display: "" })
  this.state.operator = "multiply"
}

evaluate = () => {
  this.state.currNum = this.state.display
  if(this.state.operator === "plus"){
    this.setState({ 
      display: parseFloat(this.state.prevNum) + 
               parseFloat(this.state.currNum) })
  }

  if(this.state.operator === "subtract"){
    this.setState({ 
      display: parseFloat(this.state.prevNum) - 
               parseFloat(this.state.currNum) })
  }

  if(this.state.operator === "divide"){
    this.setState({ 
      display: parseFloat(this.state.prevNum) / 
               parseFloat(this.state.currNum) })
  }

  if(this.state.operator === "multiply"){
    this.setState({ 
      display: parseFloat(this.state.prevNum) * 
               parseFloat(this.state.currNum) })
  }

}

  render() {

  return (
    <div className="App">
      <div className="calc-display">

        <div className="button-row">
          <Display>{this.state.display}</Display>
        </div>

        <div className="button-row">
          <Clear handleClear={this.clearDisplay}>AC</Clear>
          <Function>+/-</Function>
          <Function>%</Function>
          <Operator handleClick={this.divide}>/</Operator>
        </div>
        
        <div className="button-row">
          <Button handleClick={this.addToDisplay}>7</Button>
          <Button handleClick={this.addToDisplay}>8</Button>
          <Button handleClick={this.addToDisplay}>9</Button>
          <Operator handleClick={this.multiply}>X</Operator>
        </div>

        <div className="button-row">
          <Button handleClick={this.addToDisplay}>4</Button>
          <Button handleClick={this.addToDisplay}>5</Button>
          <Button handleClick={this.addToDisplay}>6</Button>
          <Operator handleClick={this.subtract}>-</Operator>
        </div>

        <div className="button-row">
          <Button handleClick={this.addToDisplay}>1</Button>
          <Button handleClick={this.addToDisplay}>2</Button>
          <Button handleClick={this.addToDisplay}>3</Button>
          <Operator handleClick={this.add}>+</Operator>
        </div>

        <div className="button-row">
          <Button></Button>
          <Button handleClick={this.addZeroToDisplay}>0</Button>     
          <Button handleClick={this.addDecimalToDisplay}>.</Button>
          <Operator handleClick={this.evaluate}>=</Operator>
        </div>

      </div>
    </div>
  );
 }
}

export default App;
