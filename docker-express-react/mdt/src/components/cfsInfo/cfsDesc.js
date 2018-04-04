import React from 'react';
import { Segment, Divider } from 'semantic-ui-react';
import '../../assets/App.css';

const CfsDesc = () => (
  <div>
    <Segment color="blue">
      <p className="cfs-title"> CFS Description: </p>
    </Segment>
    <p className="cfs-description">
      {`A fire started behind the pizza oven and is getting worse.
          One employee is stuck in bathroom. Propane Tanks in Basement.
          A fire started behind the pizza oven and is getting worse.
          One employee is stuck in bathroom.
          A fire started behind the pizza oven and is getting worse.
          One employee is stuck in bathroom. Propane Tanks in Basement.
          A fire started behind the pizza oven and is getting worse.
          One employee is stuck in bathroom.`}
    </p>
    <Divider />
  </div>
);

export default CfsDesc;
