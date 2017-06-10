import React, { Component } from 'react';
import logo from '../images/logo.png';
import {Row, Col, NavDropdown, MenuItem} from 'react-bootstrap';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      cities: [
      {
        id:  "1.1",
        name: "Indianapolis, IN"
      },{
        id: "1.2",
        name: "Bloomington, IN"
      }
    ],
      selected_city: "1.1",
    };
  }

  cityChanged(city) {
    this.setState({selected_city: city.id});
  }

  renderDropdownList() {
    let cities = this.state.cities;
    const items = [];
    for(let i = 0; i < cities.length; i++) {
      let city = cities[i];
      items.push(
        <MenuItem key={city.id} onClick={() => this.cityChanged(city)}>{city.name}</MenuItem>
      );
    }
    return items;
  }

  render() {
    return (
      <Row className="Header">
        <Col md={2}>
          <img src={logo} className="Logo" alt="logo" />
        </Col>
        <Col md={3}>
          <NavDropdown key="1" title={(this.state.cities.find(c => c.id === this.state.selected_city)).name.toUpperCase()} id="nav-dropdown-within-tab">
            {this.renderDropdownList()}
          </NavDropdown>
        </Col>
      </Row>
    );
  }
}

export default Header;