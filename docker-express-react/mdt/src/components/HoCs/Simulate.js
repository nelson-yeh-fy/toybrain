import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Button, Label } from 'semantic-ui-react';
import CfsAbstract from '../CFSAbstract';
import {
  getCFSInfoAsync,
  postCFSInfoAsync,
  putCFSInfoAsync,
  patchCFSInfoAsync,
} from '../../reducers/cfsInfo';
import '../../assets/App.css';

const Simulate = props => (
  <Container>
    <CfsAbstract />
    <Label>{props.cfsStatus}</Label>
    <Button
      disabled={props.isCFSUpdating}
      // onClick={() => { props.updateCFS(1); }}
      onClick={() => {
        props.postCFSInfoAsync({
        cfsNumber: '2018-000120',
        cfsStatus: 0, // 0:new, 1:dispatched, 2:closed
        cfsDesc: 'Dispatching unit 0310 to CFS2017-00123',
        addby: 'System',
      });
      }}
      size="mini"
      content="Add fake CFSInfo"
      icon="refresh"
      primary
    />

    <Button
      disabled={props.isCFSUpdating}
      // onClick={() => { props.updateCFS(1); }}
      onClick={() => {
        props.putCFSInfoAsync({
        toBeUpdateId: '5adf7c0a61496a7fbcbb5ba5',
        cfsNumber: '2018-000122',
        cfsStatus: 1, // 0:new, 1:dispatched, 2:closed
        cfsDesc: '1Dispatching unit 0310 to CFS2017-00123',
        addby: 'System',
      });
      }}
      size="mini"
      content="Update(Put) fake CFSInfo"
      icon="refresh"
      primary
    />

    <Button
      disabled={props.isCFSUpdating}
    // onClick={() => { props.updateCFS(1); }}
      onClick={() => {
      props.patchCFSInfoAsync({
      toBeUpdateId: '5adf7c0a61496a7fbcbb5ba5',
      cfsDesc: 'add 0310 to CFS2017-00123',
      addby: 'System',
    });
    }}
      size="mini"
      content="Patch fake CFSInfo"
      icon="refresh"
      primary
    />
  </Container>
);

Simulate.propTypes = {
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
)(Simulate);
