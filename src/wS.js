import Navigation from "./navigation";
import {
	connect
} from 'react-redux'
import {
	postFetch
} from './actions'
import React from 'react';
import {
	Paper,
	TextField,
	RaisedButton,
	Snackbar,
	DatePicker,
	FlatButton,
	Dialog
} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class WriteS extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "none",
			content: "none",
			datepicker: "Fri Dec 23 2016 00:00:00",
			open: false
		}
		this.onChangeTi = (e) => {
			this.setState({
				title: e.target.value
			})
		}
		this.onChangeCo = (e) => {
			this.setState({
				content: e.target.value
			})
		}
		this.onChangeDate = (e, date) => {
			this.setState({
				datepicker: date
			})
		}
		this.handleOn = (e) => {
			this.setState({
				open: true
			})
		}
		this.handleOff = (e) => {
			this.setState({
				open: false
			})
		}
	}
	render() {
		const {
			dispatch,
			post
		} = this.props
		const actions = [
			<FlatButton
        	label="Cancel"
        	primary={true}
        	onTouchTap={this.handleOff}
      	/>,
			<FlatButton
        	label="Submit"
        	primary={true}
        	keyboardFocused={true}
        	onTouchTap={()=>dispatch(postFetch(this.state.title,this.state.content,this.state.datepicker))}
      	/>,
		];
		return (
			<MuiThemeProvider>
				<div>
				<Navigation />
				<Paper zDepth={4}>
			  		<TextField onChange={this.onChangeTi} hintText="title" floatingLabelText="write here" value={this.state.title}/>
			 		<TextField onChange={this.onChangeCo} hintText="content" floatingLabelText="write here" fullWidth={true} multiLine={true} value={this.state.content} />
			  		<DatePicker onChange={this.onChangeDate} hintText="date" value={this.state.datepicker}/>
					<RaisedButton label="提交" onTouchTap={this.handleOn} />
			  		<Snackbar open={post.isFetching} message="loading" autoHideDuration={8000} />
			  	</Paper>
			  	<Dialog
          			title="Dialog With Actions"
          			actions={actions}
          			modal={false}
          			open={this.state.open}
          			onRequestClose={this.handleOn}
        		>
          			Are you sure to submit?
        		</Dialog>
			  	</div>
			</MuiThemeProvider>
		)
	}
}

function select(state) {
	return {
		post: state.post
	}
}
export default connect(select)(WriteS);