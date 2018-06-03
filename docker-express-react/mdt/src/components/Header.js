import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Image, Dropdown, Input, Icon } from 'semantic-ui-react';
import Link from 'redux-first-router-link';
import * as commonPropTypes from '../constants/propsTypes';

const MenuItemCFSList = ({ cfsInfoList, onClickLink }) => (
  <Menu.Item as="a" header key="0">
    <Image
      size="mini"
      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
      alt=""
      height="14"
      style={{ marginRight: '0.5em' }}
    />
    <Dropdown item simple text="2018-000354 (3 more)">
      <Dropdown.Menu>
        {
        cfsInfoList.map(p => (
          <Dropdown.Item key={p._id} onClick={() => onClickLink('CFSINFO', { id: `${p._id}` })} >
            {`${p.cfsNumber} [${p.cfsStatus}]`}
          </Dropdown.Item>
        ))
        }
        <Dropdown.Divider />
        <Dropdown.Item>New CFS</Dropdown.Item>
        <Dropdown.Item>New Car Stop</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Menu.Item>
);

const MenuItemCFSInfo = ({ routingId, onClickLink }) => (
  <Menu.Item as="a" header key="1" onClick={() => onClickLink('CFSINFO', { id: routingId })}>
    <Icon name="vcard" /> CFS Summary
  </Menu.Item>
);

const MenuItemCFSRelated = ({ routingId, onClickLink }) => (
  <Menu.Item as="a" header key="2" onClick={() => onClickLink('CFSRELATED', { id: routingId })}>
    <Icon name="newspaper" /> Related Info.
  </Menu.Item>
);

const MenuItemMap = () => (
  <Menu.Item as="a" header key="3">
    <Icon name="map" /> Map
  </Menu.Item>
);

const MenuItemSupervisor = () => (
  <Menu.Item as="a" header key="6" className="tooltip">
    <Icon name="male" />
    <span className="tooltiptext">Supervisor</span>
  </Menu.Item>
);

const MenuItemSearch = () => (
  <Menu.Item>
    <Input size="medium" label={{ icon: 'search' }} labelPosition="left corner" placeholder="Enter CFS Number" />
  </Menu.Item>
);

const Header = ({
  cfsInfoList, routingId, onClick, onClickLink,
}) => (
  <div>
    {console.log(`routingId:${routingId}`)}
    {
      routingId !== undefined ?
      (
        <Menu inverted style={{ borderRadius: 0, height: 50 }}>
          <MenuItemCFSList cfsInfoList={cfsInfoList} onClickLink={onClickLink} />
          <MenuItemCFSInfo routingId={routingId} onClickLink={onClickLink} />
          <MenuItemCFSRelated routingId={routingId} onClickLink={onClickLink} />
          <MenuItemMap />
          <MenuItemSupervisor />
          <MenuItemSearch />
        </Menu>
      ) : (
        <Menu inverted style={{ borderRadius: 0, height: 50 }}>
          <MenuItemCFSList cfsInfoList={cfsInfoList} onClickLink={onClickLink} />
          <MenuItemMap />
          <MenuItemSupervisor />
          <MenuItemSearch />
        </Menu>
      )
    }

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
  ...commonPropTypes.CFSPropType,
  ...commonPropTypes.RoutingIdPropType,
  onClick: PropTypes.func.isRequired,
  onClickLink: PropTypes.func.isRequired,
};

Header.defaultProps = {
  routingId: undefined,
};

export default Header;
