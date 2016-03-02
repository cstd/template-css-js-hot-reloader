import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import appReducer from './appReducer';


const rootReducer = combineReducers({
	routing: routeReducer,
	appReducer
});

export default rootReducer;