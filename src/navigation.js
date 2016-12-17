import React from 'react';
import {
	Link
} from 'react-router';
import fetch from 'isomorphic-fetch';
import {
	AppBar,
	Drawer,
	RaisedButton,
	FlatButton,
	Menu,
	MenuItem,
	IconMenu,
	IconButton,
	Divider
} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
export default class Navigation extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
		};
		this.handleOpen = () => {
			this.setState({
				open: true
			});
		};
		this.handleClose = () => {
			this.setState({
				open: false
			});
		};
		this.postmessage = () => {
			console.log("xxx");
			var posturl = new Request('/postmessage', {
				method: "post",
				headers: {
					"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
				},
				body: 'title=xxx&content=my'
			});
			fetch(posturl).then((response) => {
				return response.json()
			}).then((json) => {
				console.log(json)
				this.handleOpen();
			}).catch((err) => {
				console.log(err);
			});
		}

	}
	render() {
		return (
			<div>
			<AppBar title="Plante"
					iconElementLeft={<IconButton onTouchTap={this.handleOpen}><NavigationClose /></IconButton>}
    				iconElementRight={<IconMenu iconButtonElement={
      											<IconButton><MoreVertIcon /></IconButton>
    								 }
    											targetOrigin={{horizontal: 'right', vertical: 'top'}}
   												anchorOrigin={{horizontal: 'right', vertical: 'top'}} >
   												<MenuItem primaryText="Refresh" />
    											<MenuItem primaryText="Help" />
			<MenuItem onTouchTap={this.postmessage} primaryText="Sign out" />
  									 </IconMenu>}
  />
  			<Drawer open={this.state.open}
  		  			docked={false}
  		  			onRequestChange={(open) => this.setState({open})}>
  		  		<Link to="rS"><MenuItem>Read</MenuItem></Link>
		 		<Divider />
		  		<Link to="wS"><MenuItem>Write</MenuItem></Link>
  		  	</Drawer>
			</div>
		)
	}
}