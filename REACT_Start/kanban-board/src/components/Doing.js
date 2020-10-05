import React, { Component } from 'react';

class Doing extends Component {
	render(){
		return (
			<div className="ToDo column">
				<div className="ToDo_item">{this.props.title}</div>
			</div>
		)
	}
}

export default Doing;