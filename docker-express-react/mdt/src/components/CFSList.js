import React from 'react';
import Link from 'redux-first-router-link';
import { connect } from 'react-redux';
import * as itemTypes from '../constants/itemTypes';
import { CFSListPropType } from '../constants/propsTypes';

const CFSList = ({ CfsList }) => (
  <div>
    <ul>
      {
        CfsList.map(p => (
          <li key={p._id}>
            <Link to={{ type: itemTypes.CFS_INFO, payload: { category: itemTypes.CFS_INFO, id: `${p._id}` } }}>{p.cfsNumber}</Link>
          </li>
        ))
      }
    </ul>
  </div>
);

CFSList.propTypes = {
  CfsList: CFSListPropType.isRequired,
};


const mapStateToProps = state => ({
  CfsList: state.itemsByCategory.CFS_LIST,
});

export default connect(mapStateToProps)(CFSList);
