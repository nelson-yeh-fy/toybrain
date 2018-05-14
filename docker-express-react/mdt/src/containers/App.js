import React from 'react';
import { connect } from 'react-redux';

import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import { Image, Grid, Menu, Input, Icon, Dropdown, Header, Container } from 'semantic-ui-react';

import Home from './Home';
import Counter from './Counter';
import About from './About';
import CFS from './CFS';
import CFSLog from './CFSLog';
import CFSRealted from './CFSRelated';
import CFSStatus from '../components/cfsStatus';
import NCIC from './NCIC';
import Simulate from './Simulate';
import CFSList from './CFSList';

import Player from './Player';
import PlayerAPI from '../api/PlayerAPI';
import CFSAPI from '../api/CFSAPI';

const CFSinformation = (match, props) => (
  <div>
    {console.log(props.match.params.cfsId)}
    <h2>CFSinformation</h2>
    <h3>{match.id}</h3>
    <ul>
      <Link to={`${match.url}/related`}>Related</Link>
    </ul>
    <ul>
      <Link to={`${match.url}/ticket`}>ticket</Link>
    </ul>

    <Route path={`${match.url}/:related`} component={() => <h4>{match.params.id} related</h4>} />
    <Route path={`${match.url}/:ticket`} component={() => <h4>{match.params.id}ticket</h4>} />
  </div>
);

/*
const CFSList = () => (
  <div>
    <ul>
      {
        CFSAPI.all().map(p => (
          <li key={p._id}>
            <Link to={`/CFS/${p._id}`}>{p.cfsNumber}</Link>
          </li>
        ))
      }
    </ul>
  </div>
);*/

const CfsTmp = match => (
  <Container>
    <h2>CFS</h2>
    <Route exact path="/CFS" component={CFSList} />
    <Route path="/CFS/:cfsId" component={CFS} />
  </Container>
);

const FullRoster = () => (
  <div>
    <ul>
      {
        PlayerAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
);

const Roster = () => (
  <Switch>
    <Route exact path="/roster" component={FullRoster} />
    <Route path="/roster/:number" component={Player} />
  </Switch>
);

const AppContainer = () => (
  <BrowserRouter>
    <div>
      <header>
        <Link to="/">Home </Link>
        <Link to="/roster">Roster</Link>
        <Link to="/CFS">CFS </Link>
        <Link to="/Counter">Counter </Link>
        <Link to="/About">About </Link>
      </header>

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/roster" component={Roster} />
          <Route path="/CFS" component={CfsTmp} />
          <Route path="/Counter" component={Counter} />
          <Route path="/About" component={About} />
        </Switch>
      </main>
    </div>
  </BrowserRouter>
);

const App = connect(state => ({
  location: state.location,
}))(AppContainer);

export default App;
