import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation/';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherLocation city="La Serena, cl"/>
      </div>
    )
  }
}

export default App;
