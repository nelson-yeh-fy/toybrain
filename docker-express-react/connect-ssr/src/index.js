// index.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Loadable from 'react-loadable';
import logo from './logo.svg';
import * as pri from './components/print'

const AsyncContactComponent = Loadable({
  loader: () => import('./components/contact.component'),
  loading: () => <div>loading...</div>,
  //modules: ['./components/contact.component']
})

const styles = {
  app: {
    paddingTop: 40,
    textAlign: 'center',
  },
}

class App extends Component {
  render() {
    return (
      <div style={styles.app}>
        <img src={logo} className="App-logo" alt="logo" height="14"/>
        Welcome to React!
        <button onClick={() => pri()}> Print </button>
        <AsyncContactComponent />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
