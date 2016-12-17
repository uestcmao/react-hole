import React from 'react'
import {
	render
} from 'react-dom'
import {
	Router,
	Route,
	browserHistory
} from 'react-router'
import routers from './src/route'
import {
	Provider
} from 'react-redux';
import configureStore from './src/configureStore';
var root = document.getElementById('root')
const store = configureStore();
render(
	<div>
	<Provider store={store}>
	<Router history={browserHistory}>
		{routers}
	    </Router>
	</Provider>
	</div>,
	root
)