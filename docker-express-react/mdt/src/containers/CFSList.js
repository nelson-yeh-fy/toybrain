import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Container, Button } from 'semantic-ui-react';
import {
  getCFSInfoListAsync,
} from '../reducers/cfsInfoList';
import '../assets/App.css';

const CFSList = props => (
  <div>
    <Button
      disabled={false /* props.isCFSUpdating */}
      onClick={() => {
        props.getCFSInfoListAsync();
      }}
      size="mini"
      content="get cfsinfo list"
      icon="refresh"
      primary
    />
    <ul>
      {
        props.cfsInfoList.map(p => (
          <li key={p._id}>
            <Link to={`/CFS/${p._id}`}>{p.cfsNumber}</Link>
          </li>
        ))
      }
    </ul>
  </div>
);

CFSList.propTypes = {
  getCFSInfoListAsync: PropTypes.func.isRequired,
  cfsInfoList: PropTypes.arrayOf(PropTypes.shape({
    addon: PropTypes.string,
    id: PropTypes.number,
    cfsNumber: PropTypes.string,
    cfsStatus: PropTypes.number,
    cfsDesc: PropTypes.string,
    addby: PropTypes.string,
  })).isRequired,
};

// Take application state (our redux store) as an argument,
// and passed as props to this component.
const mapStateToProps = state => ({
  cfsInfoList: state.cfsInfoList,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCFSInfoListAsync,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CFSList);
