import React, { Component } from 'react';
import {Row, Col, Panel} from 'react-bootstrap';
import { RadialBarChart, RadialBar, Tooltip} from 'recharts';

class Stats extends Component {
  constructor() {
    super();
    this.state = {
      weekly_view: {
        last_week: [
          {name: "A", uv: 1, pv: 7, fill: "#F25F24" },
          {name: "B", uv: 1, pv: 7, fill: "#FF763F" },
          {name: "C", uv: 3, pv: 7, fill: "#A5380C" },
          {name: "D", uv: 1, pv: 7, fill: "#24F2D1" },
          {name: "F", uv: 1, pv: 7, fill: "#00A58B" },
        ],
        current_week: [
          {name: "A", uv: 1, pv: 7, fill: "#F25F24" },
          {name: "B", uv: 1, pv: 7, fill: "#FF763F" },
          {name: "C", uv: 3, pv: 7, fill: "#A5380C" },
          {name: "D", uv: 1, pv: 7, fill: "#24F2D1" },
          {name: "F", uv: 1, pv: 7, fill: "#00A58B" },
        ],
        next_week: [
          {name: "A", uv: 1, pv: 7, fill: "#F25F24" },
          {name: "B", uv: 1, pv: 7, fill: "#FF763F" },
          {name: "C", uv: 3, pv: 7, fill: "#A5380C" },
          {name: "D", uv: 1, pv: 7, fill: "#24F2D1" },
          {name: "F", uv: 1, pv: 7, fill: "#00A58B" },
        ],
      },
      next_week_verbiage: "Lower",
      week_ranking: "#1",
    };
  }

  render() {
    return (
      <Panel header="DETAILED STATS" className="stats">
        <Row>
          <Col sm={6} >
            <h3 className="sub-title week_overview">WEEK OVERVIEW</h3>
            <div className="info">Next week is forecast to be <span className="sub-title accent">{this.state.next_week_verbiage.toUpperCase()}</span> than this week</div>
          </Col>
          <Col sm={6}>
            <RadialBarChart width={125} height={125} innerRadius="5%" barCategoryGap="3%" data={this.state.weekly_view.current_week}>
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