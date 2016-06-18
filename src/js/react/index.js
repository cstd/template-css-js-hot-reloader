require('es6-promise').polyfill();

import React from 'react';
import { render } from 'react-dom';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { match, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';
import { routes } from './routes';


// Grab the state from a global injected into server-generated HTML
const initialState = window.__INITIAL_STATE__;

const store = createStore(
	rootReducer, 
	initialState, 
	compose(
		applyMiddleware(
			routerMiddleware(browserHistory),
			thunkMiddleware
		)
	)
);

const history = syncHistoryWithStore(browserHistory, store);

match({ history, routes }, (error, redirectLocation, renderProps) => {
	render(
		<Provider store={store}>
			<Router {...renderProps}></Router>
		</Provider>,
		document.getElementById('root')
	);
});