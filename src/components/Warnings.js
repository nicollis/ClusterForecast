import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Warnings extends Component {
  constructor() {
    super();
    this.state = {
      messages: [
        {
          icon: 'fa-sun-o',
          message: 'No Zone Action Day',
        }, {
          icon: 'fa-pagelines',
          message: 'Allergy Warning',
        }, {
          icon: 'fa-plane',
          message: 'Air Quaility Alert',
        }
      ]
    }
  }

  renderWarning(warning) {
    return (
      <Row >
        <Col xs={12} className="warning sub-title">
          <i className={`fa ${warning.icon} icon`} aria-hidden="true"></i>
          {warning.message.toUpperCase()}
        </Col>
      </Row>
    );
  }

  render() {
    const messages = this.state.messages.map(this.renderWarning);
    return (
      <div className="warning_container">
        {messages}
      </div>
    );
  }
}

export default Warnings;