import React from "react";
import { useParams } from "react-router-dom";

const TodoDetails = () => {
  const { title } = useParams();

  return <h1 className="todo-details">Todo Details: {title}</h1>;
};

export default TodoDetails;
