import React, { Component } from 'react';

class Clear extends Component {
  render() {
  return (
    <div className="clear">
      {this.props.children}
    </div>
  );
 }
}

export default Clear;