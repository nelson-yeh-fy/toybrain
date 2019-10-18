import React from 'react';
import Loadable from 'react-loadable';
import { Grid } from 'semantic-ui-react';
import Loading from './loading';

const LoadableChildrenOverview = Loadable({
  loader: () => import(/* webpackChunkName: "cssr-home" */ './childrenOverview'),
  loading: Loading,
  delay: 500
});

const Home = () => (
  <Grid columns={2}>
    <Grid.Column width={12} style={{ paddingRight: 0 }}>
      <LoadableChildrenOverview />
    </Grid.Column>
    <Grid.Column width={4} style={{ paddingLeft: 0 }}>
      p
    </Grid.Column>
  </Grid>
);

export default Home;
