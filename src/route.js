import React from 'react';
import {
	Route,
	IndexRoute
} from 'react-router';
import App from './App';
import MyDialog from './example';
import ReadS from './rS';
import WriteS from './wS';
import PaperIndex from './paperIndex'
import ConContext from './conContext'
const routers = (
	<Route path="/">
	<IndexRoute component={PaperIndex} />
	<Route path = "wS" component = {WriteS}/>
	<Route path = "rS" component = {ReadS} />
	<Route path="concrete/:key/:index" component={ConContext} />
	</Route>
);
export default routers;