import React, { Component } from 'react';
import logo from './logo.svg';
import Loadable from 'react-loadable';
import './App.css';

const AsyncComponent = Loadable({
  loader: () => import('./SomeComponent'),
  loading: () => <div>loading...</div>,
  modules: ['./SomeComponent']
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" height="14"/>
          <h3 className="App-title">Welcome to React</h3>
        </header>
        <div className="App-intro">
          <AsyncComponent />
        </div>
      </div>
    );
  }
}

export default App;
