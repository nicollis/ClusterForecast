import React, { Component } from 'react';
import truck from '../images/cluster-truck.png'
import { letter_grade } from '../utils/ScoreConversion'

class ScoreLabel extends Component {

  render() {
    const {fill, score, x, y, width} = this.props;
    if(score === 5) {
      return (
        <g className="score_label" transform={`translate(${x-63},${y-75})`}>
          <image xlinkHref="/cluster-truck.png" x={width/7} y={0} height={width} width={width} >{letter_grade(score)}</image>
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