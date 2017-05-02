import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import FilterableTable from './containers/FilterableTable';
import About from './components/About';
import TodoBoard from './containers/TodoBoard';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={FilterableTable} />
		<Route path="/todo" component={TodoBoard} />
		<Route path="/about" component={About} />
	</Route>
);