import React, { Component } from 'react';
import { Row, Col, Panel } from 'react-bootstrap';
import { ResponsiveContainer, ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Area, Bar, Line } from 'recharts';
import ScoreLabel from './ScoreLabel';
import {CalculateGrade} from '../utils/Score';

class TenDayForecast extends Component {

  formatGraphData(){
    let data = [];
    for (let day of this.props.weather) {
      let instance = {
        name: day.day_name,
        score: CalculateGrade(day),
        temp: day.temperature,
        rain: parseInt(day.chance_of_rain) || 0
      };
      data.push(instance);
    }
    return data;
  }

  render() {
    // Dummy data to demo graph if the actual week is to dull.
    // const weather = [{name: 'Monday', score: 1, temp: 90, rain: 0},
    //           {name: 'Tuesday', score: 2, temp: 85, rain: 0},
    //           {name: 'Wednesday', score: 3, temp: 88, rain: 10},
    //           {name: 'Thursday', score: 4, temp: 75, rain: 50},
    //           {name: 'Friday', score: 4, temp: 90, rain: 20},
    //           {name: 'Saturday', score: 5, temp: 80, rain: 60},
    //           {name: 'Sunday', score: 2, temp: 95, rain: 10}];
    let weather = this.formatGraphData();
    return(
      <Panel header="EXTENDED FORECAST" className="ten_day_forecast">
        <Row>
          <Col xs={12}>
            <ResponsiveContainer className="graph" width="100%" aspect={3}>
              <ComposedChart width={600} height={500} data={weather}
                    margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                  <XAxis dataKey="name"/>
                  <YAxis dataKey='score' yAxisId='score'domain={[0, 6]} hide={true}/>
                  <YAxis dataKey='temp' yAxisId='temp' domain={['dataMin - 10', 'dataMax + 10']}/>
                  <YAxis dataKey='rain' yAxisId='rain' domain={[0, 100]} orientation="right"/>
                  <Tooltip/>
                  <Legend/>
                  <CartesianGrid stroke='#f5f5f5'/>
                  <Bar dataKey='score' yAxisId='score' fill='#F25F24' label={<ScoreLabel />}/>
                  <Area type='monotone' dataKey='rain' yAxisId='rain' fill='#24F2D1' stroke='#24F2D1'/>
                  <Line type='monotone' dataKey='temp' yAxisId='temp' stroke='#2C2F31' strokeWidth={4}/>
              </ComposedChart>
            </ResponsiveContainer>
          </Col>
        </Row>
      </Panel>
    )
  };
}

export default TenDayForecast;