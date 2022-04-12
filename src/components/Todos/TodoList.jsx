import React from "react";
import Todo from "../Todos/Todo";

import "./Todos.css";

const TodoList = ({
  addedTodos,
  setAddedTodos,
  filteredTodos,
  setTodoTitle,
}) => {
  return (
    <ul className="list-group">
      {filteredTodos?.map((todo) => (
        <>
          <Todo
            key={todo.id}
            todo={todo}
            addedTodos={addedTodos}
            setAddedTodos={setAddedTodos}
            setTodoTitle={setTodoTitle}
          />
        </>
      ))}
    </ul>
  );
};

export default TodoList;
