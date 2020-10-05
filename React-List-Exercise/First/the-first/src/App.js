import React from 'react';
import TodoItem from './components/TodoItem';
import './App.css';
import { render } from 'react-dom';


class App extends React.Component {

	constructor(props){
		super();
		this.todoItems = [
		{
			title : '1',
			isComplete: true
		}, 
		{
			title : '4'
		},
		{
			title : '2'
		},
		{
			title : '3'
		},
		{
			title : '5'
		}
		];
	}
	render(){
		return (
		<div className="App">
			{
			this.todoItems.map((item, index) => 
				<TodoItem key={index}
				item={item} 
							/>
			)
			}
		</div>
		)
	}
}
export default App;

