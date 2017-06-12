import React, { Component } from 'react';
import { Row, Col, Panel } from 'react-bootstrap';
import QuickDayStats from './QuickDayStats';
import {GetConditionIcon} from '../utils/Weather';
import {LetterGrade, CalculateGrade, isLastDayOfMonth} from '../utils/Score';

class DayForecast extends Component {

  tomorrowIs_ThanToday(now, then){
    if (now === then) return "same";
    return now > then ? "lower" : "higher";
  }

  render() {
    let today = this.props.weather[0];
    let tomorrow = this.props.weather[1];
    let today_grade = CalculateGrade(today);
    let tomorrow_grade = CalculateGrade(tomorrow);
    return (
      <Panel header="TODAY'S FORECAST" className="dayforecast">
        <Row>
          <Col sm={6}>
            <h3 className="title">SCORE</h3>
            <h1>{LetterGrade(today_grade)}</h1>
          </Col>
          <Col sm={6}>
            <h3 className="title">CONDITIONS</h3>
            <Row><i className={`${GetConditionIcon(today.condition)} fa fa-5x conditions`} aria-hidden="true"></i></Row>
            <h4 className="info">{isLastDayOfMonth(today.date) && "Last Day of The Month"}</h4>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <h3 className=" info">Tomorrow is forecasted to be <span className="sub-title accent">{this.tomorrowIs_ThanToday(today_grade, tomorrow_grade).toUpperCase()}</span> than today</h3>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <QuickDayStats quickStats={{text: "Yesterday", score: LetterGrade(4), conditions: "Clear", chance_of_rain: "0%"}}/>
          </Col>
          <Col sm={6}>
            <QuickDayStats quickStats={{text: "Tomorrow", score: LetterGrade(tomorrow_grade), conditions: tomorrow.condition, chance_of_rain: tomorrow.chance_of_rain || "0%"}}/>
          </Col>
        </Row>
      </Panel>
    )
  };
}

export default DayForecast;