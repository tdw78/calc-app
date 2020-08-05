import React, { Component } from 'react';

class Operator extends Component {
  render() {
  return (
    <div className="operator">
      {this.props.children}
    </div>
  );
 }
}

export default Operator;