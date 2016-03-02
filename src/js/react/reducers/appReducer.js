import { SOME_CONST } from '../constants/actionTypes';
import { UPDATE_LOCATION } from 'react-router-redux';


const initialState = {
    something: null
}

export default function appReducer(state = initialState, action) {
	switch (action.type) {
	    case SOME_CONST:
			return Object.assign({}, state, {
				something: action.something
			});

		case UPDATE_LOCATION:
			// console.log(action);

		default:
			return state;
		}
}