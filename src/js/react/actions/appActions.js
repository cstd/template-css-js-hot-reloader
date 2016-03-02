import { SOME_CONST } from '../constants/actionTypes';


export function someAction(something) {
	return { type: SOME_CONST, something }
}