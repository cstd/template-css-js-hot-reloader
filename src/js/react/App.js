import React, { Component, PropTypes } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as appActions from './actions/appActions';

import { Link } from 'react-router';


class App extends Component {
	render() {
		return (
			<section>
				<header>
					<h1>Hello World</h1>
					<ul>
						<li><Link to={"/page1/"}>Go to Page1</Link></li>
						<li><Link to={"/page2/thunder/"}>Go to Page2/Thunder</Link></li>
						<li><Link to={"/page2/fire/"}>Go to Page2/Fire</Link></li>
					</ul>
					<hr/>
				</header>

				<main>
					{this.props.children}
				</main>

				<footer>
					<hr/>
					<small>CSTD</small>
				</footer>
			</section>
		);
	}
}

function mapStateToProps(state) {
	return {
		routing: state.routing
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(appActions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)