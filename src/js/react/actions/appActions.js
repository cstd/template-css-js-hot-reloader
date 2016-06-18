import { SET_PAGE1_DATA, SET_PAGE2_DATA } from '../constants/actionTypes';


export function setPage1Data(data) {
	return { type: SET_PAGE1_DATA, data }
}

export function setPage2Data(data) {
	return { type: SET_PAGE2_DATA, data }
}

export function getPage1Data() {
	return (dispatch) => {
		return fetch('/fakeData.json')
			.then(response => response.json())
			.then(json => {
				dispatch(setPage1Data(json.page1Data));
			})
	}
}

export function getPage2Data(slug) {
	return (dispatch) => {
		return fetch('/fakeData.json')
			.then(response => response.json())
			.then(json => {
				dispatch(setPage2Data(json.page2Data[slug]));
			})
	}
}