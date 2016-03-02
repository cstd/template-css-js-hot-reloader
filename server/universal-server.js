import path from 'path';
import Express from 'express';
import React from 'react';

import { Provider } from 'react-redux';
import rootReducer from '../src/js/react/reducers';

import App from '../src/js/react/App';

import { renderToString } from 'react-dom/server';
import { createStore, compose, applyMiddleware } from 'redux';
import { Router, Route, createMemoryHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';


const app = Express();
const port = 3000;

// This is fired every time the server side receives a request
app.get('/', handleRender);

app.get('/page1/*', handleRender);
app.get('/page2/*', handleRender);

// We are going to fill these out in the sections to follow
function handleRender(req, res) {
	console.log(req.url);

	const memoHistory = createMemoryHistory();

	const store = createStore(rootReducer, initialState, compose(applyMiddleware(routerMiddleware(memoHistory))));

	const history = syncHistoryWithStore(memoHistory, store);

	// Render the component to a string
	const html = renderToString(
		<Provider store={store}>
			<Router history={history}>
				<Route path="/" component={App}>
					<Route path="page1/:id" component={null}/>
					<Route path="page2/:id" component={null}/>
				</Route>
			</Router>
		</Provider>
	);

	// Grab the initial state from our Redux store
	const initialState = store.getState();

	// Send the rendered page back to the client
	res.send(renderFullPage(html, initialState));
}

function renderFullPage(html, initialState) {
	return `
		<!DOCTYPE html>
		<html>
			<head>
				<title>CSTD Development</title>
				<link rel="icon" href="/static/img/favicon.ico">
    			<link rel="stylesheet" href="/static/css/app.css">
			</head>
			<body>
				<div id="root">${html}</div>
				<script>
					window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
				</script>
				<script src="/static/js/app.js"></script>
			</body>
		</html>
		`
}

app.use('/static/', Express.static('./public/static'));

app.listen(port);