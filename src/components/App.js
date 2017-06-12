import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import Header from './Header';
import DayForecast from './DayForecast';
import Stats from './Stats'
import Warnings from './Warnings'
import TenDayForecast from './TenDayForecast'
import {PullLocationData} from '../utils/ClusterTruck'

class App extends Component {

  setLocationData = (data) => {
    this.setState({locations: data, selected_location: data[0]});
    console.log(this.state);
  }

  constructor(){
    super();
    PullLocationData(this.setLocationData);
    this.state = {
      locations: null,
      selected_location: {name: "Loading..."},
    }
  }

  changeCity(city) {
    this.setState({selected_location:city});
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
              <DayForecast/>
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
