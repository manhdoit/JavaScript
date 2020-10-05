import React, { Component } from 'react';

class Todo extends Component {
	render(){
		const {arr, removeTodo} = this.props
		return (
			<div className="Todo column">
				<div className="heading">Todo</div>
				{
					arr.map((item, index) =>
					 <div className="ToDo_item" key={index}>
						 <span>{item}</span>
						 <button onClick={() => removeTodo(item)}>delete</button>
					 </div>
				)
				}
			</div>
		)
	}
}

export default Todo;