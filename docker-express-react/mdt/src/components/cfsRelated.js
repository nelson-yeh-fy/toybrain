import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label, Header, Segment, Divider } from 'semantic-ui-react';

import EditableListElement from './EditableListElement';
import * as commonPropTypes from '../constants/propsTypes';
import '../assets/App.css';

const CFSRelated = ({ currentCFSInfo, routingId, patchCFSInfoAsync }) => (
  <Container>
    <Header size="large">{currentCFSInfo.cfsNumber} :102 SUNSET BOULEVARD, WEST CAPE MAY, NJ 08204
      <Label size="medium" color="green" horizontal>Verified</Label>
      <Label size="medium" color="red" horizontal>P1 - Residential Fire</Label>
    </Header>
    <div>
      <Segment color="blue">
        <p className="cfs-title"> CFS Related Info: </p>
      </Segment>
      <EditableListElement
        funcToInvoke={patchCFSInfoAsync}
        itemIdToBeUpdate={routingId}
        fieldKeyTBUpdate="cfsDesc"
        fieldValueTBUpdate={currentCFSInfo.cfsDesc}
      />
      <Divider />
      <Segment color="blue">
        <p className="cfs-title"> Location Related Info: </p>
      </Segment>
      <EditableListElement
        funcToInvoke={patchCFSInfoAsync}
        itemIdToBeUpdate={routingId}
        fieldKeyTBUpdate="cfsDesc"
        fieldValueTBUpdate={currentCFSInfo.cfsDesc}
      />
      <Divider />
    </div>
  </Container>
);

CFSRelated.propTypes = {
  ...commonPropTypes.CFSPropType.isRequired,
  ...commonPropTypes.RoutingIdPropType.isRequired,
  patchCFSInfoAsync: PropTypes.func.isRequired,
};

export default CFSRelated;
