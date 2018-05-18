import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Divider } from 'semantic-ui-react';
import EditableListElement from './EditableListElement';
import '../assets/App.css';

let sampleData = `A fire started behind the pizza oven and is getting worse. One employee is stuck in bathroom. Propane Tanks in Basement. A fire started behind the pizza oven and is getting worse. One employee is stuck in bathroom. A fire started behind the pizza oven and is getting worse. One employee is stuck in bathroom. ropane Tanks in Basement. A fire started behind the pizza oven and is getting worse. One employee is stuck iaan bathroomf.`;

const CFSDesc = ({
  funcPatchCFSInfo,
}) => (
  <div>
    <Segment color="blue">
      <p className="cfs-title"> CFS Description: </p>
    </Segment>
    <EditableListElement
      funcToInvoke={funcPatchCFSInfo}
      itemIdToBeUpdate="5adf7c0a61496a7fbcbb5ba5"
      fieldKeyTBUpdate="cfsDesc"
      fieldValueTBUpdate={sampleData}
    />
    <Divider />
  </div>
);

CFSDesc.propTypes = {
  funcPatchCFSInfo: PropTypes.func.isRequired,
};

export default CFSDesc;
