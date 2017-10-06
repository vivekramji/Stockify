import React, { Component } from 'react';
import _ from 'lodash';
import TickersListItem from './TickersListItem.js';

class TickerList extends Component {

  deleteTick(id)
  {
    this.props.onDelete(id);
  }

  renderItems() {
    return _.map(this.props.Tickers, (Ticker, index) => <TickersListItem key={index} {...Ticker} />);
  }

  render(){
    let tickerItems;
    if(this.props.Tickers){
      tickerItems = this.props.Tickers.map(ticker => {
        return(
          <TickersListItem deleteTicker={this.deleteTick.bind(this)} key={ticker.tikr} item={ticker} />
          );
      });
    }
    return (
      <div className="TickerList">
        {tickerItems}
      </div>   
    );
  }
}

export default TickerList;