import {
	combineReducers
} from 'redux'
import {
	ADD_CON,
	REFRESH,
	DELETE_CON,
	READALREADY,
	REQUEST_POSTS,
	RECEIVE_POSTS
} from './actions'

function refreshContent(state = 0, action) {
	switch (action.type) {
		case REFRESH:
			return state + 1
		default:
			return state
	}
}

function mainContent(state = [], action) {
	switch (action.type) {
		case ADD_CON:
			return [
				...state, {
					content: action.content,
					readalready: false
				}
			]
		case READALREADY:
			return [
				...state.slice(0, action.index),
				Object.assign({}, state[action.index], {
					readalready: true
				}),
				...state.slice(action.index + 1)
			]
		case DELETE_CON:
			return [
				...state.slice(0, action.index),
				...state.slice(action.index + 1)
			]
		default:
			return state
	}
}

function postItems(state = {}, action) {
	if (state[action.date] == undefined) {
		state[action.date] = []
	}
	switch (action.type) {
		case RECEIVE_POSTS:
			return Object.assign({}, state, {
				[action.date]: [...state[action.date], action.posts]
			})
		default:
			return state
	}
}

function post(state = {
	isFetching: false,
	items: {}
}, action) {
	switch (action.type) {
		case REQUEST_POSTS:
			return Object.assign({}, state, {
				isFetching: true
			})
		case RECEIVE_POSTS:
			return Object.assign({}, state, {
				isFetching: false,
				items: postItems(state.items, action)
			})
		default:
			return state
	}
}
const reducer = combineReducers({
	refreshContent,
	mainContent,
	post
})
export default reducer