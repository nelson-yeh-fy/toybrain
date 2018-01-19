import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/fontawesome-all';
import './css/App.css';

import {
  Button, Breadcrumb, BreadcrumbItem, Jumbotron, Collapse, CardBody, Card, Badge, ListGroup, ListGroupItem,
  Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Progress
} from 'reactstrap';

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
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-5 col-md-6 col-lg-6">.col-sm-5 .col-md-6</div>
            <div className="col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0 col-lg-6">.col-sm-5 .col-sm-offset-2 .col-md-6 .col-md-offset-0</div>
          </div>
        </div>

        <div className="container App">
          <div className="row">
            {
              //SideBar Menu Area
            }
            <div className="col-2 mdt-sidebar">
              <img src={logo} className="App-logo" alt="logo" />
              <ListGroup>
                <ListGroupItem active tag="button" action>CFS Box&nbsp;&nbsp;<Badge color="warning">4</Badge></ListGroupItem>
                <ListGroupItem tag="button" action>Initiate CFS</ListGroupItem>
                <ListGroupItem tag="button" action>NCIC</ListGroupItem>
                <ListGroupItem tag="button" action>Map</ListGroupItem>
                <ListGroupItem tag="button" action>Chat</ListGroupItem>
                <ListGroupItem tag="button" action>Super</ListGroupItem>
                <ListGroupItem divider />
                <ListGroupItem divider />
                <ListGroupItem> <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret style={{ 'font-size': '14px' }}>
                    Unit 501 (o)
                  </DropdownToggle>
                  <DropdownMenu >
                    <DropdownItem>
                      Available
                    </DropdownItem>
                    <DropdownItem>
                      En Route
                    </DropdownItem>
                    <DropdownItem>
                      On Scene
                    </DropdownItem>
                    <DropdownItem>
                      Off Duty
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                </ListGroupItem>
              </ListGroup>
            </div>

            <div className="col-10">
              {
                //CFS Brief Information Area
              }
              <div className="row">
                <div className="mdt-brief">
                  <h2 className="cfsNumber">#2018-000132 <span className="cfsType badge badge-danger">P1 - Residential Fire </span></h2>
                  <h4 className="cfsAddress">102 SUNSET BOULEVARD, WEST CAPE MAY, NJ 08204 <span className="cfsAddressStatus badge badge-success">Verified</span></h4>
                </div>
              </div>

              <div className="row">
                <div className="col-9">
                  <div className="row">
                    <Progress multi>
                      <Progress bar animated color="info" value="25">Dispatched</Progress>
                      <Progress bar animated color="info" value="25">Enroute</Progress>
                      <Progress bar color="secondary" value="25">OnScene</Progress>
                      <Progress bar color="secondary" value="25">Closed</Progress>
                    </Progress>
                  </div>
                  <div className="row">
                    <div className="mdt-info">
                      {
                        //CFS Summary, and other related components Area
                      }
                      <span className="cfsDescTitle"> Description </span><i className="cfsDescTitle fas fa-phone-volume"></i>
                      <div className="cfsDesc" id="scrollbar-style-6">
                        <p>A fire started behind the pizza oven and is getting worse. One employee is stuck in bathroom. Propane Tanks in Basement.</p>
                        <p>A fire started behind the pizza oven and is getting worse. One employee is stuck in bathroom. Propane Tanks in Basement. Anim pariatur cliche reprehenderit,
                      enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                      nesciunt sapiente ea proident. </p>
                      </div>
                    </div>
                    <hr className="my-2" />
                    <div className="mdt-timeEvent">
                      {
                        //CFS TimeEvent Area, expandable and collapsable
                      }
                      <Card>
                        <CardBody>
                          Anim pariatur cliche reprehenderit,
                            enim eiusmod high life accusamus terry richardson ad squid. Nihil
                            anim keffiyeh helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident.
                          </CardBody>
                      </Card>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  {
                    //CFS Highlights Area
                  }
                  CFS Highlights
            </div>
              </div>
            </div>
          </div>
        </div></div>
    );
  }
}

export default App;
