import React, { Component } from 'react';

class Function extends Component {
  render() {
  return (
    <div className="function"
      onClick={() => this.props.handleClick(this.props.children)}
    >
      {this.props.children}
    </div>
  );
 }
}

export default Function;