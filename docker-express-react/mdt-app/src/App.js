import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

class App extends Component {
  render() {
    return (

      <Container className="App">
        <Row className="App-header">
          <Col xs="3">
            <img src={logo} className="App-logo" alt="logo" />
          </Col>
          <Col xs="auto">
            <Nav>
              <NavItem>
                <NavLink href="#">Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Another Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled href="#">Disabled Link</NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
        <Row className="App-intro">
          <Col xs="3">
            <img src={logo} className="App-logo" alt="logo" />
          </Col>
          <Col xs="auto">

          </Col>
        </Row>

      </Container>
    );
  }
}

export default App;
