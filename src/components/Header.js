import React, { Component } from 'react';
import logo from '../images/logo.png';
import {Row, Col, NavDropdown, MenuItem} from 'react-bootstrap';

class Header extends Component {

  renderDropdownList(locations) {
    if (locations === null) return;
    const items = [];
    for(let i = 0; i < locations.length; i++) {
      let city = locations[i];
      items.push(
        <MenuItem key={city.slug} onClick={() => this.props.changeCity(city)}>{city.name}</MenuItem>
      );
    }
    return items;
  }

  render() {
    let locations = this.props.locations;
    return (
      <Row className="Header">
        <div className="header_container">
          <Col md={2}>
            <img src={logo} className="Logo" alt="logo" />
          </Col>
          <Col md={3}>
            <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
            <NavDropdown key="1" title={this.props.city.name.toUpperCase()} id="nav-dropdown-within-tab">
              {this.renderDropdownList(locations)}
            </NavDropdown>
          </Col>
        </div>
      </Row>
    );
  }
}

export default Header;