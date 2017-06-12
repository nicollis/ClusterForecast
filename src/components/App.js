import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import Header from './Header';
import DayForecast from './DayForecast';
import Stats from './Stats'
import Warnings from './Warnings'
import TenDayForecast from './TenDayForecast'
import {PullLocationData} from '../utils/ClusterTruck'
import {PullWeatherData} from '../utils/Weather'

class App extends Component {

  setLocationData = (data) => {
    this.setState({locations: data, selected_location: data[0]});
  }

  setWeatherData = (location, data) => {
    let weather = this.state.weather || {};
    weather[location.slug] = data;
    let updatedState = {weather: weather};
    if (location.slug === this.state.selected_location.slug) {
      updatedState['selected_weather'] = weather[location.slug];
    }
    this.setState(updatedState);
  }

  constructor(){
    super();
    PullLocationData(this.setLocationData);
    this.state = {
      locations: null,
      weather: null,
      selected_location: {name: "Loading..."},
      selected_weather: {},
    }
  }

  changeCity(city) {
    this.setState({
      selected_location:city, 
      selected_weather: this.state.weather[city.slug]
    });
  }

  componentWillUpdate(nextProps, nextState) {
    //Pull weather data if not already pulled and locations have pulled
    if (nextState.weather === null && nextState.locations !== null) {
      PullWeatherData(nextState.locations, this.setWeatherData);
    }
  }

  render() {
    return (
      <div className="App">
        <Header 
          locations={this.state.locations} 
          city={this.state.selected_location} 
          changeCity={(i) => this.changeCity(i)}
        />
        <div className="dashboard">
          <Row>
            <Col md={6}>
              <DayForecast weather={this.state.selected_weather} />
              <Warnings/>
            </Col>
            <Col md={6}>
              <Stats/>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <TenDayForecast/>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
