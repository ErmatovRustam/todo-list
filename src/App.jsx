import React, {useState} from 'react'
import './App.css'
import ToDoList from './TodoList'
import ToDoForm from './ToDoForm'

function App() {
  const [todos, setTodos] = useState(" STUDYYYY");  
  return (
    <div>
      <h1>ToDo List</h1>
      <ToDoForm />
      <p>{todos}</p>
      <ToDoList />

    </div>
  )
}

export default App
