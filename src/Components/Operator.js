import React, { Component } from 'react';

class Operator extends Component {
  render() {
  return (
    <div className="operator"
      onClick={() => this.props.handleClick(this.props.children)}
    >
      {this.props.children}
    </div>
  );
 }
}

export default Operator;