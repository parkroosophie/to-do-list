import React, { Component } from "react";

import s from "./List.scss";

const List = ({ removeTodo, todos }) => {
  // a.dueDate and b.dueDate are both moment objects, .diff is built-in moment method
  const orderedTodos = todos.sort((a, b) => a.dueDate.diff(b.dueDate));

  if (orderedTodos.length === 0) return <p>No todos yet.</p>;

  return (
    <ul>
      {orderedTodos.map((todoObj, index) => (
        <li key={index}>
          <span>
            {todoObj.body} - {todoObj.dueDate.format("DD MMM YYYY")}
          </span>
          <button className={s.button} onClick={() => removeTodo(index)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
