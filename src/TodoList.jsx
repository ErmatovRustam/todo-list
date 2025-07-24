function ToDoList(){
    const todos = [
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Build a ToDo App', completed: false },
    { id: 3, title: 'Share with friends', completed: false }
  ]
    return(
      <ul>
        {todos.map(el=> (
          <li key = {el.id}>{el.title}</li>
        ))}
      </ul>
    )
}

export default ToDoList