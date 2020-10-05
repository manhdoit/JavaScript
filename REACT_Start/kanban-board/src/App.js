import React, {Component} from 'react';
import './App.css';
import Todo from "./components/Todo";
import Doing from "./components/Doing";
import Done from "./components/Done";


class App extends Component{
  constructor(props) {
      super(props);
      this.state = {
          todoItem: [
              'chó',
              'gà',
              'vịt',
              'ngan'
          ],
          name: '',
      }
      this.addNewTodo = this.addNewTodo.bind(this)
      this.removeTodo = this.removeTodo.bind(this)
  }
  addNewTodo() {
    let {name, todoItem} = this.state
    
    if (!name){
        return
    }
    name = name.trim();
      if (!name){
          return
      }
    this.setState({
        name: '',
        todoItem: [
            ...todoItem,
            name,
        ],
        
    })
  }
    removeTodo(item){
        let {todoItem} = this.state;
        const index = todoItem.indexOf(item)
        const newArray = todoItem.splice(index, 1)
        console.log(newArray)
        this.setState({
            todoItem: todoItem
        })
  }
  render() {
      let {todoItem} = this.state;
      
      return (
          <div className="App">
              <header className="App-header">
                  <input onChange={value => this.setState({name: value.target.value})} value={this.state.name} type="text"/>
                  <button onClick={this.addNewTodo}>Create New</button>
              </header>
              <section className="App-content">
                  <Todo arr={todoItem} removeTodo={this.removeTodo} />
                  <Doing title="lorem ipsum dolor"/>
                  <Done title="lorem ipsum dolor"/>
            
              </section>
        
          </div>
      );
  }
}

export default App;
