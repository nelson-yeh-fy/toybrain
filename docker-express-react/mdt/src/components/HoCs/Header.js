import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Input, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';

import CFSList from './enhancedCFSList';
import CFSListMenuItem from './enhancedCFSListMenuItem';
import CFSLog from './enhancedCFSLog';
import CFSInfo from './enhancedCFSInfo';
import Counter from './Counter';
import Home from './Home';
import Scientist from './enhancedScientist';
import CFSStatus from '../CFSStatus';
import About from '../About';

const Header = ({ onClick, onClickLink }) => (
  <div>
    <Menu inverted style={{ borderRadius: 0, height: 50 }}>
      { /* <CFSListMenuItem /> */ }
      <Menu.Item as="a" header key="1">
        <Icon name="vcard" />
        CFS Summary
      </Menu.Item>
      <Menu.Item as="a" header key="2" onClick={() => onClickLink('CFSRELATED', { id: 456 })}>
        <Icon name="newspaper" />
        Related Info.
      </Menu.Item>
      <Menu.Item as="a" header key="3">
        <Icon name="map" />
        Map
      </Menu.Item>
      <Menu.Item as="a" header key="4">
        <Icon name="ticket" />
      </Menu.Item>
      <Menu.Item as="a" header key="5">
        <Icon name="search" />
      </Menu.Item>
      <Menu.Item as="a" header key="6" className="tooltip">
        <Icon name="male" />
        <span className="tooltiptext">Supervisor</span>
      </Menu.Item>
      <Menu.Item as="a" header key="7" className="tooltip">
        <Icon name="bug" />
        <span className="tooltiptext">Simulate</span>
      </Menu.Item>
      <Menu.Item>
        <Input size="medium" label={{ icon: 'search' }} labelPosition="left corner" placeholder="Enter CFS Number" />
      </Menu.Item>
    </Menu>

    <div>
      <Link to="/user/123">User1 </Link>  { /* action updates location state + changes address bar */}
      <Link to={{ type: 'USER', payload: { id: 456 } }}>User4 </Link> { /* so does this */}
      <span onClick={() => onClick()}>User5 </span>  { /* so does this, but without SEO benefits */}
      <Link to={{ type: 'CFSLIST' }}>CFSList </Link>
      <Link to={{ type: 'CFSINFO', payload: { id: '4dgr42fb01bab7ab4c5a1fd9' } }}>CFS1Info </Link>
      <Link to={{ type: 'CFSINFO', payload: { id: '5ae09d2fb01bab7ab4c51dd9' } }}>CFS2Info </Link>
      <Link to={{ type: 'CFSRELATED', payload: { id: '4dgr42fb01bab7ab4c5a1fd9' } }}>CFS1Related </Link>
      <Link to={{ type: 'CFSRELATED', payload: { id: '5ae09d2fb01bab7ab4c51dd9' } }}>CFS2Related </Link>
      <Link to={{ type: 'COUNTER' }}>Counter </Link>
    </div>
  </div>
);

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  onClickLink: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch({ type: 'USER', payload: { id: 5 } }),
  onClickLink: (routingType, routingPayload = {}) => dispatch({ type: routingType, payload: routingPayload }),
});

export default connect(
  null,
  mapDispatchToProps,
)(Header);

