import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import Header from './Header';
import DayForecast from './DayForecast';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Row>
          <Col md={6}>
            <DayForecast/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
