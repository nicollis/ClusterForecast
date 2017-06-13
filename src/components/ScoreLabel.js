import React, { Component } from 'react';
import truck from '../images/cluster-truck.png'
import { LetterGrade } from '../utils/Score'

class ScoreLabel extends Component {

  render() {
    const {fill, score, x, y, width} = this.props;
    if(score === 5) {
      return (
        <g className="score_label" transform={`translate(${x-width/1.8},${y-width/1.5})`}>
          <image xlinkHref="/cluster-truck.png" x={width/7} y={0} height={width} width={width} >{LetterGrade(score)}</image>
        </g>
      );
    } else {
      return (
        <g className="score_label" transform={`translate(${x+18},${y})`}>
          <text x={0} y={0} textAnchor="end" style={{fill: fill, stroke: '#000', strokeWidth: 2, fontSize: 50}}>{LetterGrade(score)}</text>
        </g>
      );
    }
  }
}

export default ScoreLabel;