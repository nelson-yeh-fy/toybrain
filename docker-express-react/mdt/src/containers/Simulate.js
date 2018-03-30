import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Button, Label } from 'semantic-ui-react';
import cfsAbstract from '../components/cfsAbstract';
import {
  updateCFSStatus,
  updateCFSStatusAsync,
} from '../reducers/cfsDetail';
import '../assets/App.css';

const Simulate = props => (
  <Container>
    <cfsAbstract />
    <Label>{props.cfsStatus}</Label>
    <Button
      disabled={props.isCFSStatusUpdating}
      onClick={() => { props.updateCFSStatus(1); }}
      size="mini"
      content="Dispatched"
      icon="refresh"
      primary
    />
  </Container>
);

Simulate.propTypes = {
  cfsStatus: PropTypes.number.isRequired,
  isCFSStatusUpdating: PropTypes.bool.isRequired,
  updateCFSStatus: PropTypes.func.isRequired,
};

// Take application state (our redux store) as an argument,
// and passed as props to this component.
const mapStateToProps = state => ({
  cfsStatus: state.cfsDetail.cfsStatus,
  isCFSStatusUpdating: state.cfsDetail.isCFSStatusUpdating,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateCFSStatus,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Simulate);
