import React from 'react';
import { render } from 'react-dom';

import App from './App';

import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistory } from 'react-router-redux';


// Grab the state from a global injected into server-generated HTML
const initialState = window.__INITIAL_STATE__;

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore);

const store = createStoreWithMiddleware(rootReducer, initialState);

// Required for replaying actions from devtools to work
reduxRouterMiddleware.listenForReplays(store);

render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="page1/:id" component={null}/>
				<Route path="page2/:id" component={null}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);