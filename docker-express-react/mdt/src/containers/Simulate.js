import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Button, Label } from 'semantic-ui-react';
import CfsAbstract from '../components/cfsAbstract';
import {
  getCFSInfoAsync,
  addCFSInfoAsync,
  updateCFS,
  updateCFSAsync,
} from '../reducers/cfsInfo';
import '../assets/App.css';

const Simulate = props => (
  <Container>
    <CfsAbstract />
    <Label>{props.cfsStatus}</Label>
    <Button
      disabled={props.isCFSUpdating}
      // onClick={() => { props.updateCFS(1); }}
      onClick={() => {
        props.addCFSInfoAsync({
        id: Date.now(),
        cfsNumber: '2018-000120',
        cfsStatus: 0, // 0:new, 1:dispatched, 2:closed
        cfsDesc: 'Dispatching unit 0310 to CFS2017-00123',
        addby: 'System',
        addon: new Date(Date.now()).toLocaleString(),
        isCFSUpdating: false,
      });
      }}
      size="mini"
      content="Dispatched"
      icon="refresh"
      primary
    />
  </Container>
);

Simulate.propTypes = {
  cfsStatus: PropTypes.number.isRequired,
  isCFSUpdating: PropTypes.bool.isRequired,
  getCFSInfoAsync: PropTypes.func.isRequired,
  addCFSInfoAsync: PropTypes.func.isRequired,
  updateCFS: PropTypes.func.isRequired,
};

// Take application state (our redux store) as an argument,
// and passed as props to this component.
const mapStateToProps = state => ({
  cfsStatus: state.cfsInfo.cfsStatus,
  isCFSUpdating: state.cfsInfo.isCFSUpdating,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCFSInfoAsync,
  addCFSInfoAsync,
  updateCFS,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Simulate);
