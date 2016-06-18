import { SET_PAGE1_DATA, SET_PAGE2_DATA } from '../constants/actionTypes';
import { UPDATE_LOCATION } from 'react-router-redux';


const initialState = {
    page1Data: null,
    page2Data: null
}

export default function appReducer(state = initialState, action) {
	switch (action.type) {
	    case SET_PAGE1_DATA:
			return Object.assign({}, state, {
				page1Data: action.data
			});

		case SET_PAGE2_DATA:
			return Object.assign({}, state, {
				page2Data: action.data
			});

		case UPDATE_LOCATION:
			// console.log(action);

		default:
			return state;
		}
}