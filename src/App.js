import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";

import React, { useState } from "react";
function App() {
  const [task, setTask] = useState();
  const [todos, setTodo] = useState([]);

  const changeHandler = (e) => {
    setTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newTodos = [...todos, task];
    setTodo(newTodos);
    setTask("");
  };
  const deleteHandler = (indexvalue) => {
    const newTodos = todos.filter((todo, index) => index !== indexvalue);
    setTodo(newTodos);
  };
  return (
    <div className="App">
      <center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Todo Management Application</h5>
            <form onSubmit={submitHandler}>
              <input
                size="30"
                type="text"
                name="task"
                value={task}
                onChange={changeHandler}
              />
              &nbsp;&nbsp;
              <input type="submit" name="Add" value="Add" />
            </form>
            <TodoList todoList={todos} deleteHandler={deleteHandler} />
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
