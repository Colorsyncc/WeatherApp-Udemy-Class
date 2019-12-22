import React, { Component } from 'react';
import Location from  './Location';
import WeatherData from './WeatherData';
import transformWeather from '../../services/transformWeather';
import { api_weather } from '../../constants/api_url';
import { SUN } from '../../constants/weathers';
import '../styles.css';


const data = {
  temperature: 5,
  weatherState: SUN, 
  humidity: 10,
  wind: '10 m/s'
}

class WeatherLocation extends Component {
  constructor() {
    super();

    this.state = {
      city: 'Buenos Aires, ar',
      data: data,
    }
  }

  handleUpdateClick = () => {
    fetch(api_weather).then( resolve => {
        return resolve.json();
    }).then( data => {

      const newWeather = transformWeather(data);
      console.log(newWeather);

      this.setState({
        data: newWeather
      })
      
    });
  }

  render() {
    const { city,data } = this.state;

    return (
      <div className="weatherLocationCont">
      <Location city={city}/>
      <WeatherData data={data}/>
      <button onClick={this.handleUpdateClick}>Actualizar</button>
  </div>
    );
  }
};

export default WeatherLocation;