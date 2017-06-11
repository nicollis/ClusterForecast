import React, { Component } from 'react';

class QuickDayStats extends Component {
  render() {
    let day = this.props.quickStats;
    return (
      <div className="quickdaystats">
        <h3 className="text-left sub-title">{day.text.toUpperCase()}</h3>
        <h4 className="info">Score: {day.score} | Conditions: {day.conditions}</h4>
        <h4 className="info">{day.chance_of_rain} chance of rain</h4>
      </div>
    );
  }
}

export default QuickDayStats;