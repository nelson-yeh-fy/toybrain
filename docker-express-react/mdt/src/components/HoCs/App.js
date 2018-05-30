import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Menu, Input, Image, Dropdown, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';

import CFSList from './enhancedCFSList';
import CFSLog from './enhancedCFSLog';
import CFSInfo from './enhancedCFSInfo';
import CFSStatus from '../CFSStatus';
import Counter from './Counter';
import Home from './Home';
import About from '../About';
import Scientist from './enhancedScientist';

const getHeaderPage = (onClick, onClickLink) => {
  // <Menu tabular>
  //   <Menu.Item name='bio' active={activeItem === 'bio'} onClick={this.handleItemClick} />
  //   <Menu.Item name='photos' active={activeItem === 'photos'} onClick={this.handleItemClick} />
  // </Menu>
  return () => (
    <div>
      <Menu inverted style={{ borderRadius: 0, height: 50 }}>
        <Menu.Item>
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
        </Menu.Item>
        <Menu.Item as="a" header key="0" onClick={() => onClickLink('CFSList')} >
          CFS List
        </Menu.Item>
        <Menu.Item as="a" header key="1">
          <Icon name="vcard" />
          CFS Summary
        </Menu.Item>
        <Menu.Item as="a" header key="2">
          <Icon name="newspaper" />
          Related Info.
        </Menu.Item>
        <Menu.Item as="a" header key="3">
          <Icon name="ticket" />
          eTickets.
        </Menu.Item>
        <Menu.Item as="a" header key="4">
          <Icon name="search" />
          NCIC.
        </Menu.Item>
        <Menu.Item as="a" header key="5" className="tooltip">
          <Icon name="bug" />
          <span className="tooltiptext">Simulate</span>
        </Menu.Item>
        <Menu.Item as="a" header key="6" className="tooltip">
          <Icon name="map" />
          <span className="tooltiptext">Map</span>
        </Menu.Item>
        <Menu.Item as="a" header key="7" className="tooltip">
          <Icon name="male" />
          <span className="tooltiptext">Supervisor</span>
        </Menu.Item>
        <Menu.Item name="User456" onClick={() => onClickLink('USER', { id: 456 })} />
        <Menu.Item>
          <Input size="medium" label={{ icon: 'search' }} labelPosition="left corner" placeholder="Enter CFS Number" />
        </Menu.Item>
      </Menu>

      <div>
        <Link to="/user/123">User 123 </Link>  { /* action updates location state + changes address bar */ }
        <Link to={{ type: 'USER', payload: { id: 456 } }}>User 456 </Link> { /* so does this */ }
        <span onClick={onClick}>User 5 </span>  { /* so does this, but without SEO benefits */ }
        <Link to={{ type: 'CFSList' }}>CFSList </Link>
        <Link to={{ type: 'COUNTER' }}>Counter </Link>
      </div>
    </div>
  );
};

const Footer = () => (<div>Footer</div>);

const getContentPage = (routingType, routingId) => {
  let page = null;
  switch (routingType) {
    case 'CFSList':
      page = () => (<div><h3>CFSList</h3><CFSList /></div>);
      break;
    case 'CFS':
      page = () => (
        <Grid columns={2}>
          <Grid.Column width={12} style={{ paddingRight: 0 }}>
            <CFSInfo />
            <CFSLog />
          </Grid.Column>
          <Grid.Column width={4} style={{ paddingLeft: 0 }}>
            <CFSStatus />
          </Grid.Column>
        </Grid>
      );
      break;
    case 'COUNTER':
      page = () => (<div><header>COUNTER: {routingId}</header><main><Counter /></main></div>);
      break;
    case 'USER':
      page = () => (<div>USER: {routingId}</div>);
      break;
    case 'HOME':
    default:
      page = () => (<div>Home</div>);
      break;
  }
  return page;
};

const App = ({ routingType, routingId, onClick, onClickLink }) => {
  const HeaderPage = getHeaderPage(onClick, onClickLink);
  const ContentPage = getContentPage(routingType, routingId);
  return (
    <div>
      <HeaderPage />
      <ContentPage />
      <Footer />
    </div>
  );
};

App.propTypes = {
  routingType: PropTypes.string.isRequired,
  routingId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  onClickLink: PropTypes.func.isRequired,
};

// const mapStateToProps = ({ userId }) => ({ userId });
const mapStateToProps = state => ({
  routingType: state.location.type,
  routingId: state.location.payload.id || -1,
});
const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch({ type: 'USER', payload: { id: 5 } }),
  onClickLink: (routingType, routingPayload = {}) => dispatch({ type: routingType, payload: routingPayload }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
