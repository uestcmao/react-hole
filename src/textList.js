import React from 'react'
import MobileTearSheet from './MobileTearSheet'
import {
	Link
} from 'react-router'
import {
	List,
	ListItem,
	Divider,
	IconMenu,
	IconButton,
	MenuItem,
	Subheader
} from 'material-ui'
import {
	grey400,
	darkBlack,
	lightBlack
} from 'material-ui/styles/colors';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
const iconButtonElement = (
	<IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

class TextList extends React.Component {
	render() {
		let url;
		return (
			<MobileTearSheet>
      <List>
      	<Subheader>{this.props.items[0].datepicker}</Subheader>
        {this.props.items.map((node,index)=>{
        	url="/concrete/"+index
        	return(<ListItem
          key={index}
          rightIconButton={
          	<IconMenu iconButtonElement={iconButtonElement}>
    		<Link to={{pathname:'/concrete/'+this.props.listkey+'/'+index}}><MenuItem>Reply</MenuItem></Link>
    		<MenuItem>Forward</MenuItem>
    		<MenuItem>Delete</MenuItem>
  			</IconMenu>
          }
          primaryText="Look Me"
          secondaryText={node.title}/>)
        })}
      </List>
      </MobileTearSheet>
		)
	}
}
export default TextList