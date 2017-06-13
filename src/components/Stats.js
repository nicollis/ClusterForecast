import React, { Component } from 'react';
import {Row, Col, Panel} from 'react-bootstrap';
import { RadialBarChart, RadialBar, Tooltip} from 'recharts';
import {CalculateGrade} from '../utils/Score';

class Stats extends Component {
  constructor() {
    super();
    // Due to historical and 10+ day forecast 
    // not be avaliable in a non-paid API
    // last week and next week have dummy data
    this.state = {
      weekly_view: {
        last_week: [
          {name: "A", value: 1, fill: "#F25F24" },
          {name: "B", value: 0, fill: "#FF763F" },
          {name: "C", value: 3, fill: "#A5380C" },
          {name: "D", value: 1, fill: "#24F2D1" },
          {name: "F", value: 2, fill: "#00A58B" },
        ],
        next_week: [
          {name: "A", value: 0, fill: "#F25F24" },
          {name: "B", value: 2, fill: "#FF763F" },
          {name: "C", value: 2, fill: "#A5380C" },
          {name: "D", value: 1, fill: "#24F2D1" },
          {name: "F", value: 2, fill: "#00A58B" },
        ],
      },
      next_week_verbiage: "Lower",
      week_ranking: "#1",
    };
  }

  generateWeekData(week) {
    let data = Array(6).fill(0);
    for (let day of week){
      data[CalculateGrade(day)] += 1;
    }
    return [
      {name: "A", value: data[5], fill: "#F25F24" },
      {name: "B", value: data[4], fill: "#FF763F" },
      {name: "C", value: data[3], fill: "#A5380C" },
      {name: "D", value: data[2], fill: "#24F2D1" },
      {name: "F", value: data[1], fill: "#00A58B" },
    ]
  }

  render() {
    return (
      <Panel header="WEEKLY STATS" className="stats">
        <Row>
          <Col sm={6} >
            <h3 className="sub-title week_overview">WEEK OVERVIEW</h3>
            <div className="info">Next week is forecast to be <span className="sub-title accent">{this.state.next_week_verbiage.toUpperCase()}</span> than this week</div>
          </Col>
          <Col sm={6}>
            <RadialBarChart width={125} height={125} innerRadius="5%" barCategoryGap="3%" data={this.generateWeekData(this.props.weather)}>
              <RadialBar startAngle={90} endAngle={-270} maxAngle={360} label background clockWise={true} dataKey='value' />
              <Tooltip />
            </RadialBarChart>
          </Col>
        </Row>
        <hr />
        <Row className="other_weeks">
          <Col sm={6}>
            <h3 className="sub-title">LAST WEEK:</h3>
            <RadialBarChart width={125} height={125} innerRadius="5%" barCategoryGap="3%" data={this.state.weekly_view.last_week}>
              <RadialBar startAngle={90} endAngle={-270} maxAngle={360} label background clockWise={true} dataKey='value' />
              <Tooltip />
            </RadialBarChart>
          </Col>
          <Col sm={6}>
             <h3 className="sub-title">NEXT WEEK:</h3>
            <RadialBarChart width={125} height={125} innerRadius="5%" barCategoryGap="3%" data={this.state.weekly_view.next_week}>
              <RadialBar startAngle={90} endAngle={-270} maxAngle={360} label background clockWise={true} dataKey='value' />
              <Tooltip />
            </RadialBarChart>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={12}>
            <div className="info text-center">This weeks forecast is rated <span className="sub-title accent">{this.state.week_ranking}</span> in the company.</div>
          </Col>
        </Row>
      </Panel>
    );
  }
}

export default Stats;