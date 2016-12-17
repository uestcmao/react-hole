import React, {
	Component
} from 'react'
import Node from './Node'
export default class ContentList extends Component {
	render() {
		return (
			<div>
		{this.props.mainContent.map((node,index)=>
			<Node {...node}
				key={index}
				onClick={()=>this.props.onReadClick(index)} />)}
		</div>)
	}
}