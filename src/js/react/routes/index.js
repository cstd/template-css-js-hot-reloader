import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../App';
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';


export const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Page1}/>
		<Route path="page1/" component={Page1}/>
		<Route path="page2/:slug/" component={Page2}/>
	</Route>
);