import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { NOT_FOUND } from 'redux-first-router';

import Header from './Header';
import CFSList from './enhancedCFSList';
import CFSInfo from './enhancedCFSInfo';
import CFSLog from './enhancedCFSLog';
import CFSRelated from './enhancedCFSRelated';
import CFSStatus from '../CFSStatus';
import Counter from './Counter';

const getContentPage = (routingType, routingId) => {
  let page = null;
  switch (routingType) {
    case 'CFSLIST':
      page = () => (<div><CFSList /></div>);
      break;
    case 'CFSINFO':
      page = () => (
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
      break;
    case 'CFSRELATED':
      page = () => (<div><CFSRelated /></div>);
      break;
    case 'COUNTER':
      page = () => (<div><header>COUNTER: {routingId}</header><main><Counter /></main></div>);
      break;
    case 'USER':
      page = () => (<div>USER: {routingId}</div>);
      break;
    case NOT_FOUND:
      page = () => (<div>Not Found</div>);
      break;
    case 'HOME':
    default:
      page = () => (<div>Home</div>);
      break;
  }
  return page;
};

const App = ({ routingType, routingId }) => {
  const ContentPage = getContentPage(routingType, routingId);
  return (
    <div>
      <Header />
      <ContentPage />
    </div>
  );
};

App.propTypes = {
  routingType: PropTypes.string.isRequired,
  routingId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

const mapStateToProps = state => ({
  routingType: state.location.type,
  routingId: state.location.payload.id || -1,
});

export default connect(mapStateToProps)(App);
