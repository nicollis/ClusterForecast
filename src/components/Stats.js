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
          {name: "A", uv: 1, pv: 7, fill: "#F25F24" },
          {name: "B", uv: 0, pv: 7, fill: "#FF763F" },
          {name: "C", uv: 3, pv: 7, fill: "#A5380C" },
          {name: "D", uv: 1, pv: 7, fill: "#24F2D1" },
          {name: "F", uv: 2, pv: 7, fill: "#00A58B" },
        ],
        next_week: [
          {name: "A", uv: 0, pv: 7, fill: "#F25F24" },
          {name: "B", uv: 2, pv: 7, fill: "#FF763F" },
          {name: "C", uv: 2, pv: 7, fill: "#A5380C" },
          {name: "D", uv: 1, pv: 7, fill: "#24F2D1" },
          {name: "F", uv: 2, pv: 7, fill: "#00A58B" },
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
      {name: "A", uv: data[5], pv: 7, fill: "#F25F24" },
      {name: "B", uv: data[4], pv: 7, fill: "#FF763F" },
      {name: "C", uv: data[3], pv: 7, fill: "#A5380C" },
      {name: "D", uv: data[2], pv: 7, fill: "#24F2D1" },
      {name: "F", uv: data[1], pv: 7, fill: "#00A58B" },
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
              <RadialBar startAngle={90} endAngle={-270} minAngle={15} label background clockWise={true} dataKey='uv' />
              <Tooltip />
            </RadialBarChart>
          </Col>
        </Row>
        <hr />
        <Row className="other_weeks">
          <Col sm={6}>
            <h3 className="sub-title">LAST WEEK:</h3>
            <RadialBarChart width={125} height={125} innerRadius="5%" barCategoryGap="3%" data={this.state.weekly_view.last_week}>
              <RadialBar startAngle={90} endAngle={-270} minAngle={15} label background clockWise={true} dataKey='uv' />
              <Tooltip />
            </RadialBarChart>
          </Col>
          <Col sm={6}>
             <h3 className="sub-title">NEXT WEEK:</h3>
            <RadialBarChart width={125} height={125} innerRadius="5%" barCategoryGap="3%" data={this.state.weekly_view.next_week}>
              <RadialBar startAngle={90} endAngle={-270} minAngle={15} label background clockWise={true} dataKey='uv' />
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