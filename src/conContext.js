import React from 'react'
import Navigation from "./navigation"
import {
	FlatButton
} from 'material-ui'
import {
	Card,
	CardActions,
	CardHeader,
	CardMedia,
	CardTitle,
	CardText
} from 'material-ui/Card'
import {
	connect
} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
class ConContext extends React.Component {
	render() {
		const {
			post
		} = this.props
		const index = this.props.params.index
		const key = this.props.params.key
		return (
			<MuiThemeProvider>
			<div>
			<Navigation />
			<Card>
          	<CardHeader
            title="URL Avatar"
            subtitle="Subtitle"
            avatar="images/jsa-128.jpg"
          	/>
          <CardTitle title={post.items[key][index].title} subtitle="Card subtitle" />
          <CardText>
            {post.items[key][index].content}
          </CardText>
          <CardActions>
            <FlatButton label="agree" />
            <FlatButton label="disagree" />
          </CardActions>
        </Card>
        </div>
        </MuiThemeProvider>
		)
	}
}

function select(store) {
	return {
		post: store.post
	}
}
export default connect(select)(ConContext)