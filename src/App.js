import {
	connect
} from 'react-redux'
import React, {
	Component
} from 'react'
import {
	add_con,
	refresh,
	delete_con,
	readalready
} from './actions'
import AddBtn from './components/AddBtn'
import ContentList from './components/ContentList'
import Node from './components/Node'
import RefBtn from './components/RefBtn'
class App extends Component {
	render() {
		const {
			dispatch,
			refreshContent,
			mainContent
		} = this.props
		return (
			<div>
			<AddBtn onAddClick={content=>dispatch(add_con(content))}/>
			<ContentList mainContent={mainContent} onReadClick={index=>dispatch(readalready(index))}/>
			<RefBtn onRefClick={()=>dispatch(refresh())}/>
			</div>)
	}
}

function select(state) {
	return {
		refreshContent: state.refreshContent,
		mainContent: state.mainContent
	}
}
export default connect(select)(App)