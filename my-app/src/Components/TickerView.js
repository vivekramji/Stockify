import React, { Component } from 'react';
import CreateTicker from './CreateTicker.js';
import TickerList from './TickerList.js';
import Tickers from '../Mock/Tickers.js';
import uuid from 'uuid';

class TickerView extends Component {
	constructor(props) {
    super(props);
    this.state = {
      Tickers: Tickers
    }
  }

	render() {
		return (
			<div className="Panel">
				<CreateTicker createTicker={this.createTicker.bind(this)} />
				<br /><br /><br /><br /><br />
            	<TickerList onDelete={this.mainDeleteTicker.bind(this)} Tickers={this.state.Tickers}/>
		    </div>
		);
	}

  createTicker(tikr, limit) {
    this.state.Tickers.push({
      id: uuid.v4(),
      tikr: tikr,
      limit: limit
    });
    this.setState({Tickers: this.state.Tickers});
  }

  mainDeleteTicker(id) {
  	console.log(id);
  	var array = this.state.Tickers;
  	let index;
  	for(let i = 0; i < array.data; i++)
  	{
  		console.log(array[i].id);
  		if(array[i].id === id)
  		{
  			index = i;
  			break;
  		}
  	}
  	array.splice(index, 1);
    this.setState({Tickers: array});
  }
}

export default TickerView;