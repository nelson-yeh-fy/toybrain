import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import * as commonPropTypes from '../constants/propsTypes';

const CFSListMenuItem = ({ cfsList, onClickLink }) => (
  <Menu.Item as="a" header>
    <Image
      size="mini"
      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
      alt=""
      height="14"
      style={{ marginRight: '0.5em' }}
    />
    <Dropdown item simple text="2018-000354(3 more)">
      <Dropdown.Menu>
        {
          cfsList.map(p => (
            <Dropdown.Item key={p._id} onClick={() => onClickLink('CFS', { id: `${p._id}` })} >
              {`${p.cfsNumber} [${p.cfsStatus}]`}
            </Dropdown.Item>
          ))
        }
        <Dropdown.Item>2018-000354 [Car Stop]</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>New CFS</Dropdown.Item>
        <Dropdown.Item>New Car Stop</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Menu.Item>
);

CFSListMenuItem.propTypes = {
  ...commonPropTypes.CFSListPropType.isRequired,
  onClickLink: PropTypes.func.isRequired,
};

export default CFSListMenuItem;
