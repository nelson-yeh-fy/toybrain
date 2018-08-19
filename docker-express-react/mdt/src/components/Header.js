import React from 'react';
import PropTypes from 'prop-types';
import Link from 'redux-first-router-link';
import { connect } from 'react-redux';
import { Menu, Image, Dropdown, Input, Icon } from 'semantic-ui-react';
import { CFSListPropType, CFSInfoPropType } from '../constants/propsTypes';
import * as itemTypes from '../constants/itemTypes';

const Header = ({
  cfsList, cfsInfo, isCfsListLoading, onClickLink,
}) => {
  const cfsOptions = [];
  if (cfsList !== undefined) {
    cfsList.map(p => cfsOptions.push({ key: p._id, text: `${p.cfsNumber} [${p.cfsStatus}]`, value: p._id }));
  }
  return (
    <div>
      <div>
        <Link to={{ type: 'HOME' }}>Home </Link>
        <Link to={{ type: 'COUNTER' }}>Counter </Link>
        <Link to={{ type: 'CFS_LIST' }}>CFSList </Link> { /* action updates location state + changes address bar */}
      </div>
      <Menu inverted style={{ borderRadius: 0, height: 50 }}>
        <Menu.Item header key="0">
          <Image
            size="mini"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
            alt=""
            height="14"
            style={{ marginRight: '0.5em' }}
          />
          <Dropdown
            loading={isCfsListLoading}
            simple
            text={`${cfsOptions.length} CFS(s)`}
            options={cfsOptions}
            onChange={(e, { /* name, */ value }) => onClickLink(itemTypes.CFS_INFO, value)}
          />
        </Menu.Item>
        {
          cfsInfo !== undefined ? (
            <Menu.Item header key="1" onClick={() => onClickLink(itemTypes.CFS_INFO, cfsInfo._id)}>
              <Icon name="vcard" /> CFS Summary
            </Menu.Item>) : null
        }
        {
          cfsInfo !== undefined ? (
            <Menu.Item header key="2" onClick={() => onClickLink(itemTypes.CFS_RELATED, cfsInfo._id)}>
              <Icon name="newspaper" /> Related Info.
            </Menu.Item>) : null
        }
        <Menu.Item header key="3" onClick={() => onClickLink(itemTypes.CFS_MAP)}>
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
    </div>
  );
};

Header.propTypes = {
  cfsList: CFSListPropType,
  cfsInfo: CFSInfoPropType,
  isCfsListLoading: PropTypes.bool.isRequired,
  onClickLink: PropTypes.func.isRequired,
};

Header.defaultProps = {
  cfsList: undefined,
  cfsInfo: undefined,
};

const mapStateToProps = state => ({
  cfsList: state.itemsByCategory.CFS_LIST,
  cfsInfo: state.itemsByCategory.CFS_INFO,
  isCfsListLoading: state.loadingStatus.isCfsListLoading,
});

const mapDispatchToProps = dispatch => ({
  onClickLink: (routingType, id) => dispatch({ type: routingType, payload: { category: routingType, id } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
