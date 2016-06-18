import React, { Component, PropTypes } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as appActions from '../actions/appActions';


class Page2 extends Component {
	componentWillMount() {
		this.props.actions.getPage2Data(this.props.params.slug);
	}

	shouldComponentUpdate(nextProps) {
		if (nextProps.params.slug !== this.props.params.slug) {
			this.props.actions.getPage2Data(nextProps.params.slug);
		}
		return true;
	}

	render() {
		return (
			<section>
				<h1>Page2</h1>
				<p>Page 2 Data: {this.props.page2Data}</p>
			</section>
		);
	}
}

function mapStateToProps(state) {
	return {
		page2Data: state.appReducer.page2Data,
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
)(Page2)