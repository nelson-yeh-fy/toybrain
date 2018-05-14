import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from 'semantic-ui-react';
import CfsAbstract from '../components/cfsInfo/cfsAbstract';
import CfsDesc from '../components/cfsInfo/cfsDesc';
import {
  getCFSInfoAsync,
  postCFSInfoAsync,
  putCFSInfoAsync,
  patchCFSInfoAsync,
} from '../reducers/cfsInfo';
import CFSAPI from '../api/CFSAPI';
import '../assets/App.css';

const CFS = (props) => {
  console.log(`${props.match.params.cfsId}`);
  const foundCFS = CFSAPI.get(props.match.params.cfsId);
  if (!foundCFS) {
    return (
      <div>Sorry, but the CFS was not found</div>
    );
  }
  return (
    <Container>
      <CfsAbstract />
      <CfsDesc funcPatchCFSInfo={props.patchCFSInfoAsync} />
    </Container>
  );
};

CFS.propTypes = {
  cfsStatus: PropTypes.number.isRequired,
  isCFSUpdating: PropTypes.bool.isRequired,
  getCFSInfoAsync: PropTypes.func.isRequired,
  postCFSInfoAsync: PropTypes.func.isRequired,
  putCFSInfoAsync: PropTypes.func.isRequired,
  patchCFSInfoAsync: PropTypes.func.isRequired,
};

// Take application state (our redux store) as an argument,
// and passed as props to this component.
const mapStateToProps = state => ({
  cfsStatus: state.cfsInfo.cfsStatus,
  isCFSUpdating: state.cfsInfo.isCFSUpdating,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCFSInfoAsync,
  postCFSInfoAsync,
  putCFSInfoAsync,
  patchCFSInfoAsync,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CFS);
