import React from 'react'
import {
	FlatButton,
	LinearProgress
} from 'material-ui'
import {
	Link
} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
class PaperIndex extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
				<div>
				<LinearProgress mode="indeterminate" />
				<Link to="/rS">
				<FlatButton label="click" />
				</Link>
				</div>
			</MuiThemeProvider>
		)
	}
}
export default PaperIndex