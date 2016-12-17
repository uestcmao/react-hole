import React, {
	Component
} from 'react'
export default class AddBtn extends Component {
	render() {
		return (
			<div>
		<input type='text' ref='input' />
		<button onClick={(e)=>this.handle(e)} >add </button>
		</div>)
	}
	handle(e) {
		const nodetext = this.refs.input.value
		this.props.onAddClick(nodetext)
		this.refs.input.value = ''

	}
}