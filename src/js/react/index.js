import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

import rootReducer from './reducers';

import App from './App';


// Grab the state from a global injected into server-generated HTML
const initialState = window.__INITIAL_STATE__;

const store = createStore(rootReducer, initialState, compose(applyMiddleware(routerMiddleware(browserHistory))));

const history = syncHistoryWithStore(browserHistory, store);

render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<Route path="page1/:id" component={null}/>
				<Route path="page2/:id" component={null}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);