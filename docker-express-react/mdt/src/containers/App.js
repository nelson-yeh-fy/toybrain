import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import Counter from './Counter';
import About from './About';

const App = () => (
  <div>
    <header>
      <Link to="/">Home </Link>
      <Link to="/Counter">Counter </Link>
      <Link to="/About">About </Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/Counter" component={Counter} />
      <Route exact path="/About" component={About} />
    </main>
  </div>
);

export default App;
