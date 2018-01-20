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
        <div className="App container-fluid">
          <div className="row">
            <div className="col-2">
              <div className="mdt-sidebar">
                {
                  //SideBar Menu Area
                }
                <ListGroup>
                  <ListGroupItem active tag="button" action>CFS Box&nbsp;<Badge color="warning">4</Badge></ListGroupItem>
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
            </div>
            <div className="col-8">
              <div className="row">
              <div className="col">
                {
                  //CFS Brief Information Area
                }
                <div className="cfs-brief">
                  <h4 className="cfsNumber">#2018-000132 <span className="cfsType badge badge-danger">P1 - Residential Fire </span></h4>
                  <h6 className="cfsAddress">102 SUNSET BOULEVARD, WEST CAPE MAY, NJ 08204 <span className="cfsAddressStatus badge badge-success">Verified</span></h6>
                </div>
              </div>
              </div>
              <div className="row">
              <div className="col">
                <div style={{ 'border-top': '3px solid black' }}>
                  {
                    //CFS Progress Area
                  }
                  <Progress multi>
                    <Progress bar animated color="info" value="25">Dispatched</Progress>
                    <Progress bar animated color="info" value="25">En Route</Progress>
                    <Progress bar color="secondary" value="25">On Scene</Progress>
                    <Progress bar color="secondary" value="25">Closed</Progress>
                  </Progress>
                </div>
                </div>
              </div>
              <div className="row">
              <div className="col">
                <div className="cfs-info">
                  {
                    //CFS Summary, and other related components Area
                  }
                  <span className="cfs-info cfsDescTitle"> Description </span><i className="cfsDescTitle fas fa-phone-volume"></i>
                  <div className="cfs-info cfsDesc" id="scrollbar-style-6">
                    <p>A fire started behind the pizza oven and is getting worse. One employee is stuck in bathroom. Propane Tanks in Basement.</p>
                    <p>A fire started behind the pizza oven and is getting worse. One employee is stuck in bathroom. Propane Tanks in Basement. Anim pariatur cliche reprehenderit,
                      enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                      nesciunt sapiente ea proident. </p>
                  </div>
                </div>
                </div>
              </div>
              <div className="row">
              <div className="col">
                <div className="cfs-timeEvent">
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
            </div>
            <div className="col-2">
              {
                //CFS Highlights Area
              }
              CFS Highlights
                </div>
          </div>
        </div>
      
    );
  }
}

export default App;
