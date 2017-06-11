import React, { Component } from 'react';

class ScoreLabel extends Component {
  render() {
    const {fill, score, x, y} = this.props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} textAnchor="end" fill={fill}>{score}</text>
      </g>
    );
  }
}

export default ScoreLabel;