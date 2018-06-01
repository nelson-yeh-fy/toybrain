import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label, Header, Segment, Divider } from 'semantic-ui-react';

import EditableListElement from './EditableListElement';
import * as commonPropTypes from '../constants/propsTypes';
import '../assets/App.css';

const CFSInfo = ({ cfsInfoList, routingId, patchCFSInfoAsync }) => {
  const currentCFSInfo = cfsInfoList.find(item => item._id === routingId);
  return (
    <Container>
      <Header size="large">{currentCFSInfo.cfsNumber} :102 SUNSET BOULEVARD, WEST CAPE MAY, NJ 08204
        <Label size="medium" color="green" horizontal>Verified</Label>
        <Label size="medium" color="red" horizontal>P1 - Residential Fire</Label>
      </Header>
      <div>
        <Segment color="blue">
          <p className="cfs-title"> CFS Description: </p>
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
};

CFSInfo.propTypes = {
  ...commonPropTypes.CFSPropType,
  routingId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  // cfsStatus: PropTypes.number.isRequired,
  // isCFSUpdating: PropTypes.bool.isRequired,
  // getCFSInfoAsync: PropTypes.func.isRequired,
  // postCFSInfoAsync: PropTypes.func.isRequired,
  // putCFSInfoAsync: PropTypes.func.isRequired,
  patchCFSInfoAsync: PropTypes.func.isRequired,
};

export default CFSInfo;