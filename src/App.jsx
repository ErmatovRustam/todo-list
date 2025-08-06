import React, {useState} from 'react'
import './App.css'
import ToDoList from './TodoList'
import ToDoForm from './ToDoForm'

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title
    };
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <ToDoForm onAddTodo={addTodo} />
      <ToDoList todoList={todoList} />
    </div>
  );
}

export default App;

