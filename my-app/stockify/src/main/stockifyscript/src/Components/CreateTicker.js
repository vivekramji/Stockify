import React, { Component } from 'react';

class CreateTicker extends Component {
  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <tr>
          <td><input type="text" ref="createInputTikr" placeholder="GOOG" /></td>
          <td><input type="text" ref="createInputLimit" placeholder="250" /></td>
          <td><button> Add </button></td>
        </tr>
      </form>
    )
  }

  handleCreate(event) {
    event.preventDefault();
    this.props.createTicker(this.refs.createInputTikr.value, this.refs.createInputLimit.value);
    this.refs.createInputTikr.value=''
    this.refs.createInputLimit.value=''
  }
}
export default CreateTicker;