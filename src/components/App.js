import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import Header from './Header';
import DayForecast from './DayForecast';
import Stats from './Stats'
import Warnings from './Warnings'
import TenDayForecast from './TenDayForecast'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
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
