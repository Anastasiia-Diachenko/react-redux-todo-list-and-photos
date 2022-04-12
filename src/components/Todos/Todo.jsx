import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { FiDelete } from "react-icons/fi";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import { toggleComplete, deleteTodo, editTodo } from "../../redux/todoSlice";

import "./Todos.css";

const Todo = ({ todo }) => {
  const [editingTitle, setEditingTitle] = useState("");
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();

  const handleComplete = (e) => {
    dispatch(toggleComplete({ id: todo.id, completed: !todo.completed }));
  };

  const handleUpdate = (e) => {
    dispatch(editTodo({ id: todo.id, title: editingTitle }));
    setEdit(false);
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id: todo.id }));
  };

  const openEditing = () => {
    setEdit(!edit);
    console.log(!edit);
  };

  return (
    <div className="li-item">
      {todo.completed === true ? (
        <button className="btn-complete" onClick={(e) => handleComplete(e)}>
          <RiCheckboxCircleFill className="icon-complete" />
        </button>
      ) : (
        <button className="btn-complete" onClick={(e) => handleComplete(e)}>
          <RiCheckboxBlankCircleLine className="icon-complete" />
        </button>
      )}

      <Link className="todo-link" to={`/todos/${todo.id}/${todo.title}`}>
        <li
          key={todo.id}
          className={`todo-item ${todo.completed ? "completed" : ""}`}
        >
          {todo.title}
        </li>
      </Link>

      {edit === true ? (
        <>
          <input
            type="text"
            onChange={(e) => setEditingTitle(e.target.value)}
            value={editingTitle}
            placeholder="Enter a new title"
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <FaEdit className="icons" onClick={openEditing} />
      )}

      <FiDelete className="icons" onClick={handleDelete} />
    </div>
  );
};

export default Todo;
