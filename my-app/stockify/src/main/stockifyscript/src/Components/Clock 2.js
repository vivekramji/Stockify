import React, { Component } from 'react';

class Clock extends Component {
  render() {
    return (
      <h2>{new Date().toLocaleTimeString()} EST.</h2>
    );
  }
  // setInterval(render, 1000);
}
export default Clock;