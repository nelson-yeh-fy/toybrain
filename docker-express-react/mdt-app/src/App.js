import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

import { Container, Row, Col, Button, Breadcrumb, BreadcrumbItem, Jumbotron, Collapse, CardBody, Card } from 'reactstrap';

class App extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <Container className="App">
        <Row>
          {
            //SideBar Menu Area
          }
          <Col className="App-sidebar" xs="2" sm="2" md="2" lg="2" xl="2">
            <img src={logo} className="App-logo" alt="logo" />
            <br />
            <Button outline color="info" size="lg" block>CFS Box</Button>
            <Button outline color="info" size="lg" block>Init CFS</Button>{' '}
            <Button outline color="info" size="lg" block>NCIC</Button>{' '}
            <Button outline color="info" size="lg" block>Map</Button>{' '}
            <Button outline color="info" size="lg" block>Chat</Button>{' '}
            <Button outline color="info" size="lg" block>Super</Button>{' '}
          </Col>

          <Col xs="10" sm="10" md="10" lg="10" xl="10">
            {
              //CFS Brief Information Area
            }
            <Row className="cfs-brief">
              <Col xs="3" sm="3" md="3" lg="3" xl="3">
                <Breadcrumb tag="nav">
                  <BreadcrumbItem tag="a" href="#">#2018-000132</BreadcrumbItem>
                </Breadcrumb>
              </Col>
              <Col xs="9" sm="9" md="9" lg="9" xl="9">
                <Breadcrumb tag="nav" className="App-brief-progress">
                  <BreadcrumbItem tag="a" href="#">initiated</BreadcrumbItem>
                  <BreadcrumbItem tag="a" href="#">dispatched</BreadcrumbItem>
                  <BreadcrumbItem tag="a" href="#">on scene</BreadcrumbItem>
                  <BreadcrumbItem active tag="span">completed</BreadcrumbItem>
                </Breadcrumb>
              </Col>
            </Row>

            <Row>
              <Col xs="10" sm="10" md="10" lg="10" xl="10">
                {
                  //CFS Summary, and other related components Area
                }
                <Row>
                  <Jumbotron style={{ color: '#222' }}>
                    <h1 className="display-5">CFS Summary, and other components</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                    <p className="lead">
                      <Button color="primary">Learn More</Button>
                    </p>
                  </Jumbotron>
                </Row>

                {
                  //CFS TimeEvent Area, expandable and collapsable
                }
                <Row>
                  <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>CFS TimeEvent Toggle</Button>
                  <Collapse isOpen={this.state.collapse}>
                    <Card>
                      <CardBody style={{ color: '#222' }}>
                        Anim pariatur cliche reprehenderit,
                      enim eiusmod high life accusamus terry richardson ad squid. Nihil
                      anim keffiyeh helvetica, craft beer labore wes anderson cred
                      nesciunt sapiente ea proident.
                      </CardBody>
                    </Card>
                  </Collapse>

                </Row>
              </Col>
              <Col xs="2" sm="2" md="2" lg="2" xl="2">
                {
                  //CFS Highlights Area
                }
                CFS Highlights
            </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
