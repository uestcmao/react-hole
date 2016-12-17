import React, {
	Component
} from 'react'
export default class RefBtn extends Component {
	render() {
		return ( < button onClick = {
				(e) => this.props.onRefClick()
			} > Refresh < /button>)
		}
	}