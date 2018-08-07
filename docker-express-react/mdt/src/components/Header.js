import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';
import { CFSListPropType } from '../constants/propsTypes';
import * as itemTypes from '../constants/itemTypes';
import * as actionTypes from '../constants/actionTypes';
import isLoading from '../selectors/isLoading';
import { Menu, Image, Dropdown, Input, Icon } from 'semantic-ui-react';

const MenuItemCFSList = ({ isLoading, cfsList, onClickLink }) => {
  const cfsOptions = [];
  // cfsList.map(p => cfsOptions.push({ key: p._id, text: `${p.cfsNumber} [${p.cfsStatus}]`, value: p._id }));
  return (
    <Menu.Item header key="0">
      <Image
        size="mini"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
        alt=""
        height="14"
        style={{ marginRight: '0.5em' }}
      />
      <Dropdown
        loading={isLoading}
        simple
        text={`${cfsOptions.length} CFS(s)`}
        options={cfsOptions}
        onChange={(e, { /* name, */ value }) => onClickLink('ITEM', { category: itemTypes.CFS_INFO, id: `${value}` })}
      />
    </Menu.Item>
  );
};

// <MenuItemCFSList cfsList={cfsList} onClickLink={onClickLink} />
// <Menu.Item header key="1" >
//   <Link to={{ type: 'CFSINFO_FETCHED', payload: { category: 'CFSINFO_FETCHED', id: `${currentCFSInfo._id}` } }}>
//     <Icon name="vcard" /> CFS Summary
//   </Link>
// </Menu.Item>;

const Header = ({
  cfsList, isLoading, onClickLink,
}) => (
  <div>
    <div>
      <Link to={{ type: 'HOME' }}>Home </Link>
      <Link to={{ type: 'COUNTER' }}>Counter </Link>
      <Link to={{ type: 'ITEM', payload: { category: itemTypes.CFS_LIST } }}>CFSList </Link> { /* action updates location state + changes address bar */}
      <Link to={{ type: 'ITEM', payload: { category: itemTypes.CFS_INFO, id: '4dgr42fb01bab7ab4c5a1fd9' } }}>Cfs1 </Link>
      <Link to={{ type: 'ITEM', payload: { category: itemTypes.CFS_INFO, id: '5ae09d2fb01bab7ab4c51dd9' } }}>Cfs2 </Link>
    </div>
    {
      cfsList !== undefined ?
      (
        <Menu inverted style={{ borderRadius: 0, height: 50 }}>
          <MenuItemCFSList isLoading cfsList={cfsList} onClickLink={onClickLink} />
          <Menu.Item header key="1" onClick={() => onClickLink(actionTypes.CFSLIST_GET_SUCCEED)}>
            <Icon name="vcard" /> CFS Summary
          </Menu.Item>
          <Menu.Item header key="2" onClick={() => onClickLink(actionTypes.CFSRELATED_GET_SUCCEED)}>
            <Icon name="newspaper" /> Related Info.
          </Menu.Item>
          <Menu.Item header key="3">
            <Icon name="map" /> Map
          </Menu.Item>
          <Menu.Item header key="4">
            <Input size="medium" label={{ icon: 'search' }} labelPosition="left corner" placeholder="Enter CFS Number" />
          </Menu.Item>
          <Menu.Item header key="5" className="tooltip">
            <Icon name="male" />
            <span className="tooltiptext">Supervisor</span>
          </Menu.Item>
        </Menu>
      ) : (
        <Menu inverted style={{ borderRadius: 0, height: 50 }}>
          <Menu.Item header key="6" className="tooltip">
            <Icon name="male" />
            <span className="tooltiptext">Supervisor</span>
          </Menu.Item>
        </Menu>
      )
    }
  </div>
);

Header.propTypes = {
  cfsList: CFSListPropType,
  isLoading: PropTypes.bool.isRequired,
  onClickLink: PropTypes.func.isRequired,
};

Header.defaultProps = {
  cfsList: undefined,
};


const mapStateToProps = state => ({
  cfsList: state.itemsByCategory.CFS_LIST,
  isLoading: isLoading(state.loading),
});

const mapDispatchToProps = dispatch => ({
  onClickLink: (routingType, routingPayload = {}) => dispatch({ type: routingType, payload: routingPayload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
