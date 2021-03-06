import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import './App.css';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtended from './components/ForecastExtended';

const cities = [
  'Buenos Aires, ar',
  'La Serena, cl',
  'Valparaiso, cl',
  'Santiago, cl',
  'Paris',
];

class App extends Component {
  constructor() {
    super();

    this.state = {  
      city:null,
    }
  }

  render() {
    //Destructuring para city en ForecastExtended
    const { city } = this.state;
    
    return (
      <Grid>
        <Row> 
          <AppBar position="sticky">
            <Toolbar>
              <Typography color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer cities={cities}
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
            <div className="details">
              {city === null ? <h2>No se ha seleccionado la ciudad</h2> : 
              <ForecastExtended city={city} />}
            </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default App;  

