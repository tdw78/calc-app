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
      operator: ""
    };
  }

  addToDisplay = val => { 
    this.setState({ display: this.state.display + val});
  }

  addZeroToDisplay = val => {
    if(!this.state.display){
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
  this.setState({ prevNum: this.state.display })
  this.setState({ display: "" })
  this.setState({ operator: "plus" })
}

subtract = () => {
  if(!this.state.display){
    this.setState({ display: "-"})
  } else {
     this.setState({ prevNum: this.state.display })
     this.setState({ display: "" })
     this.setState({ operator: "subtract" })
  }
}

divide = () => {
  this.setState({ prevNum: this.state.display })
  this.setState({ display: "" })
  this.setState({ operator: "divide" })
}

multiply = () => {
  this.setState({ prevNum: this.state.display })
  this.setState({ display: "" })
  this.setState({ operator: "multiply" })
}

percent = () => {
  this.setState({ display: this.state.display / 100 })
}

toggleVal = () => {
  if(parseFloat(this.state.display) > 0 ) {
    this.setState({ display:  "-" + this.state.display})
  } else if(parseFloat(this.state.display) < 0 ){
      this.setState({ display: Math.abs(this.state.display) })
  }
}

evaluate = () => {
  let currNum = this.state.display
  if(this.state.operator === "plus"){
    this.setState({ 
      display: parseFloat(this.state.prevNum) + 
               parseFloat(currNum) })
  }
  if(this.state.operator === "subtract"){
    this.setState({ 
      display: parseFloat(this.state.prevNum) - 
               parseFloat(currNum) })
  }
  if(this.state.operator === "divide"){
    this.setState({ 
      display: parseFloat(this.state.prevNum) / 
               parseFloat(currNum) })
  }
  if(this.state.operator === "multiply"){
    this.setState({ 
      display: parseFloat(this.state.prevNum) * 
               parseFloat(currNum) })
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
            <Function handleClick={this.toggleVal}>+/-</Function>
            <Function handleClick={this.percent}>%</Function>
            <Operator handleClick={this.divide}>÷</Operator>
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
