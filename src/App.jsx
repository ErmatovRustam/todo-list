import './App.css'

function App() {

  const todos = [
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Build a ToDo App', completed: false },
    { id: 3, title: 'Share with friends', completed: false }
  ]
  return (
    <div>
      <h1>ToDo List</h1>
      <ul>
        {
          todos.map((el) =>{
            return(
              <li key = {el.id}>
                {el.title}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App
