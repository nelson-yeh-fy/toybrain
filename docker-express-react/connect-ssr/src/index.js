// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';
import Home from './components/home';
import Loading from './components/trial/loading';
import Toggle from './components/trial/toggle';
// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" height="14"/>
// const AsyncContactComponent = Loadable({
//   loader: () => import('./components/contact.component'),
//   loading: () => Loading
//   //modules: ['./components/contact.component']
// })
// <AsyncContactComponent />

const LoadableContact = Loadable({
  loader: () => import(/* webpackChunkName: "cssr-contact" */ './components/trial/contact'),
  loading: Loading,
  delay: 500
});

const styles = {
  app: {
    paddingTop: 40,
    textAlign: 'center'
  }
};

const App = () => {
  return (
    <div style={styles.app}>
      Welcome to React!
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={LoadableContact} />
          </Switch>
        </div>
      </BrowserRouter>
      <Toggle />
    </div>
  );
};

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('root'));
