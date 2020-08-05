import React, { Component } from 'react';

class Function extends Component {
  render() {
  return (
    <div className="function">
      {this.props.children}
    </div>
  );
 }
}

export default Function;