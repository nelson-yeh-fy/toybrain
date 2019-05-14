import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Home';
import About from './About';
import Counter from './Counter';
import './App.css';

const App = () => (
  <Counter />
);

export default App;


// <Switch>
// <Route exact path="/" component={Home} />
// <Route exact path="/about" component={About} />
// <Route exact path="/count" component={Counter} />
// </Switch>