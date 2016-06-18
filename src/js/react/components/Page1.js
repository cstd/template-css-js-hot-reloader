import React, { Component, PropTypes } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as appActions from '../actions/appActions';


class Page1 extends Component {
	componentWillMount() {
		this.props.actions.getPage1Data();
	}

	render() {
		return (
			<section>
				<h1>Page1</h1>
				<p>Page 1 Data: {this.props.page1Data}</p>
			</section>
		);
	}
}

function mapStateToProps(state) {
	return {
		page1Data: state.appReducer.page1Data,
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
)(Page1)