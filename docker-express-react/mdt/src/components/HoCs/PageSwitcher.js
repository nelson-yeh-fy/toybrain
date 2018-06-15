import React from 'react';
import { connect } from 'react-redux';

import { Grid } from 'semantic-ui-react';
import { NOT_FOUND } from 'redux-first-router';
import CFSList from './enhancedCFSList2';
import CFSInfo from './enhancedCFSInfo';
import CFSLog from './enhancedCFSLog';
import CFSRelated from './enhancedCFSRelated';
import CFSStatus from '../CFSStatus';
import Counter from './Counter';

const getContentPage = (requestedPage) => {
  let page = null;
  switch (requestedPage) {
    case 'List':
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
      page = () => (<div><Counter /></div>);
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

const TBDUniversalComponent = ({ Page }) => {
  const ContentPage = getContentPage(Page);
  return (
    <div>
      <ContentPage />
    </div>
  );
};

const PageSwitcher = ({ page, isLoading }) => (
  isLoading
    ? <div>Loading</div>
    : <TBDUniversalComponent Page={page} />
);


// const UniversalComponent = universal(props => import(`./${props.page}`), {
//   minDelay: 500,
//   chunkName: props => props.page,
//   loading: () => <div className='spinner'><div /></div>,
//   error: () => <div className='notFound'>PAGE NOT FOUND - 404</div>
// })

const mapState = state => ({
  page: state.page,
  isLoading: state.loading,
});

export default connect(mapState)(PageSwitcher);
