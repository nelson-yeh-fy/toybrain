import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Image, Grid, Menu, Input, Tab, Icon, Dropdown, Button } from 'semantic-ui-react';
import CFSInfo from './enhancedCFSInfo';
import CFSLog from './enhancedCFSLog';
import CFSRelated from '../CFSRelated';
import CFSStatus from '../CFSStatus';
import Simulate from './Simulate';
import NCIC from './NCIC';
import {
  getCFSListAsync,
} from '../../reducers/cfsList';
import '../../assets/App.css';

const tabpanes = [{
  menuItem:
  <Menu.Item as="a" header key="0">
    <Image
      size="mini"
      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
      alt=""
      height="14"
      style={{ marginRight: '0.5em' }}

    />
    <Dropdown item simple text="2018-000354(3 more)">
      <Dropdown.Menu>
        <Dropdown.Item>2018-000354 [Car Stop]</Dropdown.Item>
        <Dropdown.Item>2018-000141 [Fire]</Dropdown.Item>
        <Dropdown.Item>2018-000214 [Fire]</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>New CFS</Dropdown.Item>
        <Dropdown.Item>New Car Stop</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Menu.Item>,
  render: () => (
    <Tab.Pane className="cfs-info-tabcontent" key="tabCfsSummary">
      tbd
    </Tab.Pane>
  ),
},
{
  menuItem:
  <Menu.Item as="a" header key="1">
    <Icon name="vcard" />
      CFS Summary
  </Menu.Item>,
  render: () => (
    <Tab.Pane className="cfs-info-tabcontent" key="tabCfsSummary">
      <Container>
        {/*<CFSInfo />*/}
        <CFSLog />
      </Container>
    </Tab.Pane>
  ),
},
{
  menuItem:
  <Menu.Item as="a" header key="2">
    <Icon name="newspaper" />
      Related Info.
  </Menu.Item>,
  render: () => (
    <Tab.Pane className="cfs-info-tabcontent" key="tabCfsRelated">
      <CFSRelated />
    </Tab.Pane>
  ),
},
{
  menuItem:
  <Menu.Item as="a" header key="3">
    <Icon name="ticket" />
      eTickets.
  </Menu.Item>,
  render: () => (
    <Tab.Pane className="cfs-info-tabcontent" key="tabCfsTicket">
      <CFSRelated />
    </Tab.Pane>
  ),
},
{
  menuItem:
  <Menu.Item as="a" header key="4">
    <Icon name="search" />
      NCIC.
  </Menu.Item>,
  render: () => (
    <Tab.Pane className="cfs-info-tabcontent" key="tabCfsNcic">
      <NCIC />
    </Tab.Pane>
  ),
},
{
  menuItem:
  <Menu.Item as="a" header key="5" className="tooltip">
    <Icon name="bug" />
    <span className="tooltiptext">Simulate</span>
  </Menu.Item>,
  render: () => (
    <Tab.Pane className="cfs-info-tabcontent" key="tabSimulate">
      <Simulate />
    </Tab.Pane>
  ),
},
{
  menuItem:
  <Menu.Item as="a" header key="6" className="tooltip">
    <Icon name="map" />
    <span className="tooltiptext">Map</span>
  </Menu.Item>,
  render: () => (
    <Tab.Pane className="cfs-info-tabcontent" key="tabSimulate">
      <Simulate />
    </Tab.Pane>
  ),
},
{
  menuItem:
  <Menu.Item as="a" header key="7" className="tooltip">
    <Icon name="male" />
    <span className="tooltiptext">Supervisor</span>
  </Menu.Item>,
  // { key: '7', icon: 'male', content: '' },
  render: () => (
    <Tab.Pane className="cfs-info-tabcontent" key="tabSimulate">
      <Simulate />
    </Tab.Pane>
  ),
}];

const Home = props => (
  <div>
    <Grid columns={2}>
      <Grid.Column width={12} style={{ paddingRight: 0 }}>
        <Tab
          menu={{ inverted: true, style: { borderRadius: 0, height: 50 } }}
          defaultActiveIndex={1}
          renderActiveOnly
          panes={tabpanes}
          property={props}
        />
      </Grid.Column>

      <Grid.Column width={4} style={{ paddingLeft: 0 }}>
        <Menu inverted style={{ borderRadius: 0, height: 50 }}>
          <Menu.Item>
            <Input size="medium" label={{ icon: 'search' }} labelPosition="left corner" placeholder="Enter CFS Number" />
          </Menu.Item>
        </Menu>
        <CFSStatus />
      </Grid.Column>
    </Grid>
    <Button
      basic
      color="blue"
      icon="bars"
      className="cfs-case-selector"
      label={{
        size: 'large', as: 'a', basic: true, color: 'blue', pointing: 'left', content: '#2018-000132',
      }}
      onClick={this.toggleVisibility}
    />
  </div>
);

Home.propTypes = {
  getCFSListAsync: PropTypes.func.isRequired,
};

// Take application state (our redux store) as an argument,
// and passed as props to this component.
const mapStateToProps = state => ({
  cfsList: state.cfsList,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCFSListAsync,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
