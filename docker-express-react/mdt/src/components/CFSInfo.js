import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Label, Header, Segment, Divider } from 'semantic-ui-react';
import { CFSInfoPropType } from '../constants/propsTypes';
import { getCFSInfoAsync, patchCFSInfoAsync } from '../actions/cfsActions';
import '../assets/App.css';

const CFSInfo = ({ currentCFSInfo, getCFSInfoAsync }) => (
  <Container>
    <Header id="headerOfCfsInfo" size="large">{currentCFSInfo.cfsNumber} :102 SUNSET BOULEVARD, WEST CAPE MAY, NJ 08204
      <Label htmlFor="headerOfCfsInfo" size="medium" color="green" horizontal>Verified</Label>
      <Label htmlFor="headerOfCfsInfo" size="medium" color="red" horizontal>P1 - Residential Fire</Label>
    </Header>
    <div>
      <Segment color="blue">
        <p className="cfs-title"> CFS Description: </p>
      </Segment>
      <p className="cfs-description no-border">
        {currentCFSInfo.cfsDesc}
      </p>
      <Divider />
      <button onClick={() => { getCFSInfoAsync('4dgr42fb01bab7ab4c5a1fd9'); }} >getcfsinfo async</button>
    </div>
  </Container>
);

CFSInfo.propTypes = {
  currentCFSInfo: CFSInfoPropType.isRequired,
  getCFSInfoAsync: PropTypes.func.isRequired,
  patchCFSInfoAsync: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  currentCFSInfo: state.itemsByCategory.CFS_INFO,
});

const mapDispatchToProps = dispatch => bindActionCreators({ patchCFSInfoAsync, getCFSInfoAsync }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CFSInfo);

// import EditableListElement from './EditableListElement';
// <EditableListElement
// funcToInvoke={patchCFSInfoAsync}
// itemIdToBeUpdate={routingId}
// fieldKeyTBUpdate="cfsDesc"
// fieldValueTBUpdate={`${currentCFSInfo.cfsDesc}`}
// />
