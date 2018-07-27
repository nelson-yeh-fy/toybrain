import React from 'react';
import { connect } from 'react-redux';
import { TransitionGroup, Transition } from 'transition-group';

import { Grid } from 'semantic-ui-react';
import { NOT_FOUND } from 'redux-first-router';
import CFSList from './CFSList';
import CFSInfo from './CFSInfo';
import CFSLog from './HoCs/enhancedCFSLog';
import CFSRelated from './CFSRelated';
import CFSStatus from './CFSStatus';
import Counter from './Counter';

const onLeave = () => console.log('[Trainsition left]');
const onEmpty = () => console.log('[Trainsition group empty]');

const getComponent = (page) => {
  switch (page) {
    case 'Home':
      return <div>HOME</div>;
    case 'CFSList':
      return <CFSList />;
    case 'CFSInfo':
      return (
        <Grid columns={2}>
          <Grid.Column width={12} style={{ paddingRight: 0 }}>
            <CFSInfo />
            <CFSLog />
          </Grid.Column>
          <Grid.Column width={4} style={{ paddingLeft: 0 }}>
            <CFSStatus />
          </Grid.Column>
        </Grid>
      );
    case 'CFSRelated':
      return (
        <Grid columns={2}>
          <Grid.Column width={12} style={{ paddingRight: 0 }}>
            <CFSRelated />
          </Grid.Column>
          <Grid.Column width={4} style={{ paddingLeft: 0 }}>
            <CFSStatus />
          </Grid.Column>
        </Grid>
      );
    case 'Video':
      return <div>Video</div>;
    case 'Counter':
      return <Counter />;
    case NOT_FOUND:
      return <div>Not Found</div>;
    default:
      return <div>Default - getComponent</div>;
  }
};

const PageSwitcher = ({ page, isLoading }) => (
  <TransitionGroup
    className="whatever"
    duration={0}
    delay={0}
    prefix="fade"
    onEmpty={onEmpty}
  >
    <Transition key={page} duration={1000} enterDelay={0} leaveDelay={0} onLeave={onLeave}>
      {getComponent(page)}
    </Transition>

  </TransitionGroup>
);

// const PageSwitcher = ({ page, isLoading }) => (
//   isLoading
//     ? <div>Loading</div>
//     : <TBDUniversalComponent Page={page} />
// );

const mapState = state => ({
  page: state.page,
  isLoading: state.loading,
});

export default connect(mapState)(PageSwitcher);
