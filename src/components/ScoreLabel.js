import React, { Component } from 'react';
import truck from '../images/cluster-truck.png'
import { letter_grade } from '../utils/ScoreConversion'

class ScoreLabel extends Component {

  render() {
    const {fill, score, x, y} = this.props;
    if(score >= 9) {
      return (
        <g className="score_label" transform={`translate(${x-63},${y-75})`}>
          <image xlinkHref="/cluster-truck.png" x={0} y={0} height="150" width="150" >{letter_grade(score)}</image>
        </g>
      );
    } else if (score % 2) {
      return (
        <g className="score_label" transform={`translate(${x+35},${y})`}>
          <text x={0} y={0} textAnchor="end" style={{fill: fill, stroke: '#000', strokeWidth: 2, fontSize: 50}}>{letter_grade(score)}</text>
        </g>
      );
    } else {
      return (
        <g className="score_label" transform={`translate(${x+18},${y})`}>
          <text x={0} y={0} textAnchor="end" style={{fill: fill, stroke: '#000', strokeWidth: 2, fontSize: 50}}>{letter_grade(score)}</text>
        </g>
      );
    }
  }
}

export default ScoreLabel;