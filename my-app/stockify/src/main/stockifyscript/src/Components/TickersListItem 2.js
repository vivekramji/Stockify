import React, { Component } from 'react';

class TickersListItem extends Component {
  render() {
    return (
      <li className="Item">
          <strong> {this.props.item.tikr} </strong> : {this.props.item.limit} <button> Edit </button> <button onClick={this.onDeleteClick.bind(this, this.props.item.id)}> Remove </button>
      </li>
    );
  }

  onDeleteClick(event, id) {
    // console.log(this.refs.tickerName.innerText);
    console.log('from item' + id);
    this.props.deleteTicker(id);
  }
}

export default TickersListItem;