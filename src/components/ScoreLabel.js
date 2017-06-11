import React, { Component } from 'react';
import truck from '../images/cluster-truck.png'
import { letter_grade } from '../utils/ScoreConversion'

class ScoreLabel extends Component {
  render() {
    const {fill, score, x, y} = this.props;
    return (
      <g className="score_label" fontSize="40px" transform={`translate(${x+18},${y})`}>
        <text x={0} y={0} textAnchor="end" fill={fill}>{letter_grade(score)}</text>
      </g>
    );
  }
}

export default ScoreLabel;