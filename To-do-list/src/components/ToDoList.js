import React, { memo } from 'react';
import Todo from './Todo'
const ToDoList = memo(props => {
    const { todoList, isCheckedAll, checkAllTodo } = props
    console.log('checked', isCheckedAll  )
    return (
        <section>
            <input 
                className="toggle-all" 
                type="checkbox"
                checked={isCheckedAll}
                />
            <label htmlFor="toggle-all" onClick={checkAllTodo}>toggle</label>
            <ul className="todo-list">
                {
                    todoList.map((todo, index) => <Todo key={`todo${todo.id}`} {...{todo}} {...props} index={index}/>)
                }
            </ul>
        </section>
    )
})
export default ToDoList; 