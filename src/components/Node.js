import React, {
	Component
} from 'react'
export default class Node extends Component {
	render() {
		return ( < div onClick = {
				this.props.onClick
			}
			style = {
				{
					textDecoration: this.props.readalready ? 'line-through' : 'none',
					cursor: this.props.readalready ? 'default' : 'pointer'
				}
			} > {
				this.props.content
			} < /div>)
		}
	}