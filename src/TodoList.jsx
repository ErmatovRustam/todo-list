import React from "react";
import TodoListItem  from "./TodoListItem"


function ToDoList(){
    const todos = [
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Build a ToDo App', completed: false },
    { id: 3, title: 'Share with friends', completed: false }
  ]
    return(
      <ul>
        {todos.map(el=> (
          <TodoListItem key = {el.id} todo = {el} />
        ))}
      </ul>
    )
}

export default ToDoList