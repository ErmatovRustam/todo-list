function ToDoForm() {
  return (
    <form >
        <label htmlFor="todoTitle">TODO</label>
      <input type="text" id = "todoTitle" />
      <button type="submit"> Add Todo</button>
    </form>
  );
}

export default ToDoForm;