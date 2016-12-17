import React from 'react';
import ReactDOM from 'react-dom';
import {
	Link
} from 'react-router'
import {
	Card,
	CardActions,
	CardHeader,
	CardMedia,
	CardTitle,
	CardText
} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {
	AppBar,
	FlatButton,
	RaisedButton,
	IconButton,
	Dialog,
	Drawer,
	TextField,
	Menu,
	MenuItem,
	Divider,
	Paper,
	Popover,
	IconMenu
} from 'material-ui';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
class MyDialog extends React.Component {
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
	}


	render() {
		const actions = [
			<FlatButton label="close" onTouchTap={this.handleClose} />,
			<FlatButton label="submit" keyboardFocused={true} onTouchTap={this.handleClose} />
		];
		return (
			<MuiThemeProvider>
			<div>
			<Link to='app'>
			<RaisedButton label="look" />
			</Link>
			<AppBar
    title="Title"
    onTouchTap={this.handleOpen}
    iconElementRight={<IconMenu iconButtonElement={
      							<IconButton><MoreVertIcon /></IconButton>
    								}
    							targetOrigin={{horizontal: 'right', vertical: 'top'}}
   								anchorOrigin={{horizontal: 'right', vertical: 'top'}} >
   							<MenuItem primaryText="Refresh" />
    						<MenuItem primaryText="Help" />
    						<MenuItem primaryText="Sign out" />
  						</IconMenu>}
  />
  <Drawer open={false}
  		  docked={false}
  		  onRequestChange={(open) => this.setState({open})}>
  		  <MenuItem>ItemOne</MenuItem>
		 <Divider />
		  <MenuItem>ItemTwo</MenuItem>
  		  </Drawer>
			<RaisedButton label="clickme" onTouchTap={this.handleOpen} />
			<Popover open={this.state.open}
					 anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          			 targetOrigin={{horizontal: 'left', vertical: 'top'}}
          			 onRequestClose={this.handleClose}>
          			 <Card>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="images/jsa-128.jpg"
    />
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
          	</Popover>
			<Dialog actions={actions}
					title="xxxx"
					open={false}>
					xxxxxxx</Dialog>
			</div>
			</MuiThemeProvider>)
	}
};
const styles = {
	button: {
		margin: 12,
	},
	exampleImageInput: {
		cursor: 'pointer',
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		width: '100%',
		opacity: 0,
	},
};
const App = () => (
	<MuiThemeProvider>
	<div>
	<MyDialog />
	<IconButton 
		iconClassName="muidocs-icon-custom-github"
		tooltip="botton-tip"
		tooltipPosition="top-right" />
	<RaisedButton
      label="Choose an Image"
      labelPosition = "before"
      style={styles.button}
      containerElement="label"
    >
      <input type="file" style={styles.exampleImageInput} />
    </RaisedButton>
    <br/>
    <TextField hintText="hello" floatingLabelText="write here" />
    <br/>
    <Paper zDepth={5}>
    <Card>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="images/jsa-128.jpg"
    />
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src="images/nature-600-337.jpg" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="agree" />
      <FlatButton label="disagree" />
    </CardActions>
  </Card>
  </Paper>
  <br/>
  <Paper zDepth={4}>
  <TextField hintText="hello" floatingLabelText="write here" style={styles.button}/>
  <TextField hintText="hello" floatingLabelText="write here" fullWidth={true} multiLine={true} />
  <RaisedButton label="提交" />
  </Paper>
  </div>
</MuiThemeProvider>
);
export default MyDialog;
/*ReactDOM.render(
	<App/>,
	document.getElementById('root')
)*/