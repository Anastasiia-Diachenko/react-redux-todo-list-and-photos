import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
import { useSelector } from "react-redux";

import "./Todos.css";

const Todos = () => {
  const todosFromLocalServer = JSON.parse(window.localStorage.getItem("todos"));

  const [todoTitle, setTodoTitle] = useState("");
  const [addedTodos, setAddedTodos] = useState(todosFromLocalServer);
  const [filteredTodos, setFilteredTodos] = useState(todosFromLocalServer);
  const [status, setStatus] = useState("all");

  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    onFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, status]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!todoTitle) {
      return;
    }

    saveToLocalStorage();
    resetForm();
  };

  const saveToLocalStorage = () => {
    setAddedTodos(todos);
    const stringifiedTodos = JSON.stringify(todos);
    window.localStorage.setItem("todos", stringifiedTodos);
  };

  const handleAddTodo = () => {
    dispatch(addTodo({ title: todoTitle }));
  };

  const onChangeTitle = (event) => {
    setTodoTitle(event.target.value);
  };

  const resetForm = () => {
    setTodoTitle("");
  };

  const onSelectStatus = (e) => {
    setStatus(e.target.value);
  };

  const onFilter = () => {
    switch (status) {
      case "done":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "todo":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div className="container">
      <h1 className="todos-title">TODOS</h1>
      <TodoList
        addedTodos={addedTodos}
        filteredTodos={filteredTodos}
        setAddedTodos={setAddedTodos}
        setTodoTitle={setTodoTitle}
      />
      <form className="form" onSubmit={handleSubmit}>
        <select className="select" onChange={onSelectStatus}>
          <option value="all">All</option>
          <option value="todo">Todo</option>
          <option value="done">Done</option>
        </select>

        <input
          className="input-add"
          type="text"
          value={todoTitle}
          placeholder="Add a new todo"
          onChange={onChangeTitle}
        />
        <button className="btn-add" onClick={handleAddTodo}>
          ADD TODO
        </button>
      </form>
    </div>
  );
};

export default Todos;
