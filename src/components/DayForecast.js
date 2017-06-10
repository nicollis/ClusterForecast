import React, { Component } from 'react';
import { Row, Col, Panel } from 'react-bootstrap';

class DayForecast extends Component {
  render() {
    return (
      <Panel header="TODAY'S FORECAST" className="dayforecast">
        <Row>
          <Col sm={6}>
            <h3 className="title">SCORE</h3>
            <h1>B</h1>
          </Col>
          <Col sm={6}>
            <h3 className="title">Conditions</h3>
            <Row><i className="fa fa-sun-o fa-5x conditions" aria-hidden="true"></i></Row>
            <h4 className="info">Last Day of The Month</h4>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <h3 className="text-left">Tomorrow is forecasted to be <span>HIGHER</span> than today</h3>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            {/* TOBE MOVED TO A COMPONENT */}
            <h3 className="text-left">Tomorrow</h3>
            <h4>Score: B | Conditions: Sunny</h4>
            <h4>0% chance of rain</h4>
          </Col>
          <Col sm={6}>
            {/* TOBE MOVED TO A COMPONENT */}
            <h3 className="text-left">Yesterday</h3>
            <h4>Score: A | Conditions: Raining</h4>
            <h4>70% chance of rain</h4>
          </Col>
        </Row>
      </Panel>
    )
  };
}

export default DayForecast;