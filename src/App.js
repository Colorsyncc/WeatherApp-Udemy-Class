import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';


const cities = [
  'Buenos Aires, ar',
  'La Serena, cl',
  'Valparaiso, cl',
  'Santiago, cl',
];

class App extends Component {
  handleSelectedLocation = city => {
    console.log("handleSelectionLocation");
    
  }

  render() {
    return (
      <div className="App">
        <LocationList cities={cities}
        onSelectedLocation={this.handleSelected}
        />
      </div>
    )
  }
}

export default App;
