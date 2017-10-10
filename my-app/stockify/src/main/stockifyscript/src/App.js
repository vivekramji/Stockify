import React, { Component } from 'react';
import './App.css';
import TickerView from './Components/TickerView.js';
import Clock from './Components/Clock.js';
import Header from './Components/Header.js';

class App extends Component {

  render() {
    return (
     <div className="App">
        <Header />
        <Clock />
        <TickerView />
     </div>
     );
    }

}


export default App;
