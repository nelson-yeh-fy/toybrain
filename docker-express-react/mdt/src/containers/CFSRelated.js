import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from 'semantic-ui-react';
import cfsAbstract from '../components/cfsAbstract';
import cfsRelated from '../components/cfsRelated';
import '../assets/App.css';

const CFSRelated = props => (
  <Container>
    <cfsAbstract />
    <cfsRelated />
  </Container>
);


CFSRelated.propTypes = {

};

// Take application state (our redux store) as an argument,
// and passed as props to this component.
const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CFSRelated);
