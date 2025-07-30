import React, {useState} from 'react'
import './App.css'
import ToDoList from './TodoList'
import ToDoForm from './ToDoForm'

function App() {
  const [newTodo, setNewTodo] = useState('new task');
  return (
    <div>
      <h1>ToDo List</h1>
      <ToDoForm />
      <p>{newTodo}</p>
      <ToDoList />

    </div>
  )
}

export default App
