import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CFSList = props => (
  <div>
    <ul>
      {
        props.cfsInfoList.map(p => (
          <li key={p._id}>
            <Link to={`/CFS/${p._id}`}>{p.cfsNumber}</Link>
          </li>
        ))
      }
    </ul>
    {props.isVisible ? <p>I'm visible</p> : <p> Not Visible </p>}
    <button onClick={props.toogleVisibility}> Click me! </button>
  </div>
);

CFSList.propTypes = {
  cfsInfoList: PropTypes.arrayOf(PropTypes.shape({
    addon: PropTypes.string,
    _id: PropTypes.string,
    cfsNumber: PropTypes.string,
    cfsStatus: PropTypes.number,
    cfsDesc: PropTypes.string,
    addby: PropTypes.string,
  })).isRequired,
};

export default CFSList;
