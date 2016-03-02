import React, { Component, PropTypes } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as appActions from './actions/appActions';


class App extends Component {
	static propTypes = {
		something: PropTypes.string,
		actions: PropTypes.shape({
			someAction: PropTypes.func
		})
	};

	handleClick = () => {
		this.props.actions.someAction("AWESOME!");
	};

	render() {
		return (
			<section>
				<h1>Hello World</h1>
				<p>Something: {this.props.something}</p>
				<button onClick={this.handleClick}>Change something</button>
			</section>
		);
	}
}

function mapStateToProps(state) {
	return {
		something: state.appReducer.something,
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