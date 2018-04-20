import React from 'react';
import { Segment, Divider, Form } from 'semantic-ui-react';
import '../../assets/App.css';
import EditableListElement from '../general/EditableListElement';

const sampleData = `A fire started behind the pizza oven and is getting worse. One employee is stuck in bathroom. Propane Tanks in Basement. A fire started behind the pizza oven and is getting worse. One employee is stuck in bathroom. A fire started behind the pizza oven and is getting worse. One employee is stuck in bathroom. ropane Tanks in Basement. A fire started behind the pizza oven and is getting worse. One employee is stuck iaan bathroomf.`;

const CfsDesc = () => (
  <div>
    <Segment color="blue">
      <p className="cfs-title"> CFS Description: </p>
    </Segment>
    <EditableListElement editText={sampleData} isEditing={false} />
    <Divider />
  </div>
);

export default CfsDesc;
