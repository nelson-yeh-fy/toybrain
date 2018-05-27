import React from 'react';
import PropTypes from 'prop-types';
import Link from 'redux-first-router-link';

const CFSList = ({ cfsInfoList, toogleVisibility, isVisible }) => (
  <div>
    <ul>
      {
        cfsInfoList.map(p => (
          <li key={p._id}>
            <Link to={{ type: 'CFS', payload: { id: `${p._id}` } }}>{p.cfsNumber}</Link>
          </li>
        ))
      }
    </ul>
    <button onClick={toogleVisibility}> Click me! </button>
    {isVisible ? <p>Visible</p> : <p> Not Visible </p>}
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
  isVisible: PropTypes.bool.isRequired,
  toogleVisibility: PropTypes.func.isRequired,
};

export default CFSList;
