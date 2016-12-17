import fetch from 'isomorphic-fetch'
import {
	browserHistory
} from 'react-router'
export const ADD_CON = 'ADD_CON';
export const REFRESH = 'REFRESH';
export const DELETE_CON = 'DELETE_CON';
export const READALREADY = 'READALREADY';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const DISAGREEARTICLE = 'DISAGREEARTICLE'
export const AGREEARTICLE = 'AGREEARTICLE';
export function add_con(content) {
	return {
		type: ADD_CON,
		content
	}
}
export function refresh() {
	return {
		type: REFRESH
	}
}
export function delete_con(index) {
	return {
		type: DELETE_CON,
		index
	}
}
export function agreeArticle(key, index) {
	return {
		type: AGREEARTICLE,
		key,
		index
	}
}
export function disagreeArticle(key, index) {
	return {
		type: DISAGREEARTICLE,
		key,
		index
	}
}
export function readalready(index) {
	return {
		type: READALREADY,
		index
	}
}
export function requestPosts() {
	return {
		type: REQUEST_POSTS
	}
}
export function receivePosts(json, date) {
	return {
		type: RECEIVE_POSTS,
		posts: json,
		date: date
	}
}
export function postFetch(title, content, datepicker) {
	return dispatch => {
		dispatch(requestPosts());
		var posturl = new Request('/postmessage', {
			method: "post",
			headers: {
				"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
			},
			body: "title=" + title + "&content=" + content + "&datepicker=" + datepicker
		});
		return fetch(posturl).then(response => response.json())
			.then(json => dispatch(receivePosts(json, json.datepicker)))
			.then(() => {
				browserHistory.push('/rS')
			})
	}
}