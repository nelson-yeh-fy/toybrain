import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';

import Home from './components/HoCs/Home';
import Counter from './components/HoCs/Counter';
import About from './components/About';
import CFSInfo from './components/HoCs/enhancedCFSInfo';
import CFSList from './components/HoCs/enhancedCFSList';
import Scientist from './components/HoCs/enhancedScientist';

import Player from './components/Player';
import PlayerAPI from './api/PlayerAPI';

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
        <Link to="/Scientist">Scientist </Link>
        <Link to="/Counter">Counter </Link>
        <Link to="/About">About </Link>
      </header>

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/CFS"
            component={() => (
              <div>
                <h2>CFS</h2>
                <Route exact path="/CFS" component={CFSList} />
                <Route path="/CFS/:cfsId" component={CFSInfo} />
              </div>
            )}
          />
          <Route path="/Scientist" component={Scientist} />
          <Route path="/Counter" component={Counter} />
          <Route path="/About" component={About} />
          <Route path="/roster" component={Roster} />
        </Switch>
      </main>
    </div>
  </BrowserRouter>
);

const App = connect(state => ({
  location: state.location,
}))(AppContainer);

export default App;
