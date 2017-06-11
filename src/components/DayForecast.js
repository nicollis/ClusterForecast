import React, { Component } from 'react';
import { Row, Col, Panel } from 'react-bootstrap';
import QuickDayStats from './QuickDayStats';

class DayForecast extends Component {
  constructor() {
    super();
    this.state = {
      quickStats: {
        yesterday: {
          text: "Yesterday",
          score: 'C',
          conditions: 'Sunny',
          icon: 'fa-sun-o',
          chance_of_rain: "0%",
          modifier: null,
          next_day_outlook: null,
        },
        today: {
          text: "Today",
          score: 'B',
          conditions: 'Sunny',
          icon: 'fa-sun-o',
          chance_of_rain: "0%",
          modifier: "Last Day of The Month",
          next_day_outlook: "Higher",
        },
        tomorrow: {
          text: "Tomorrow",
          score: 'A',
          conditions: 'Storms',
          icon: 'fa-sun-o',
          chance_of_rain: "70%",
          modifier: null,
          next_day_outlook: null,
        },
      }
    };
  }

  render() {
    let today = this.state.quickStats.today;
    return (
      <Panel header="TODAY'S FORECAST" className="dayforecast">
        <Row>
          <Col sm={6}>
            <h3 className="title">SCORE</h3>
            <h1>{today.score}</h1>
          </Col>
          <Col sm={6}>
            <h3 className="title">CONDITIONS</h3>
            <Row><i className={`${today.icon} fa fa-5x conditions`} aria-hidden="true"></i></Row>
            <h4 className="info">{today.modifier}</h4>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <h3 className=" info">Tomorrow is forecasted to be <span className="sub-title accent">{today.next_day_outlook.toUpperCase()}</span> than today</h3>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <QuickDayStats quickStats={this.state.quickStats.yesterday}/>
          </Col>
          <Col sm={6}>
            <QuickDayStats quickStats={this.state.quickStats.tomorrow}/>
          </Col>
        </Row>
      </Panel>
    )
  };
}

export default DayForecast;