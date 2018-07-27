import React from 'react';
import Link from 'redux-first-router-link';
import { connect } from 'react-redux';
import { CFSListPropType } from '../constants/propsTypes';
import { CFS_INFO } from '../constants/actionTypes';

const CFSList = ({ CfsList }) => (
  <div>
    <ul>
      {
        CfsList.map(p => (
          <li key={p._id}>
            <Link to={{ type: 'ITEM', payload: { category: CFS_INFO, id: `${p._id}` } }}>{p.cfsNumber}</Link>
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
