import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label, Header, Segment, Divider } from 'semantic-ui-react';

import EditableListElement from './EditableListElement';
import '../assets/App.css';

const CFSInfo = ({ cfsInfoList, routingId, patchCFSInfoAsync }) => {
  // const sampleData = `A fire started behind the pizza oven and is getting worse. One employee is stuck in bathroom. Propane Tanks in Basement. A fire started behind the pizza oven and is getting worse. One employee is stuck in bathroom. A fire started behind the pizza oven and is getting worse. One employee is stuck in bathroom. ropane Tanks in Basement. A fire started behind the pizza oven and is getting worse. One employee is stuck iaan bathroomf.`;
  // <Container textAlign="justified" fluid style={{ paddingBottom: 15 }}>
  // <h4>CFSnumber: {props.cfsInfo.cfsNumber}</h4>
  // <CFSAbstract />
  // <CFSDesc funcPatchCFSInfo={props.patchCFSInfoAsync} />
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
  cfsInfoList: PropTypes.arrayOf(PropTypes.shape({
    addon: PropTypes.string,
    _id: PropTypes.string,
    cfsNumber: PropTypes.string,
    cfsStatus: PropTypes.number,
    cfsDesc: PropTypes.string,
    addby: PropTypes.string,
  })).isRequired,
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
