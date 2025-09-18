import React from "react";

function TodoList({ todos, handledelete, handleEdit }) {
  return (
    <ol>
      {todos.map((todo, index) => (
        <li key={index}>
          <span className="text">{todo}</span>
          <button className="editbutton" onClick={() => handleEdit(index)}>
            Edit
          </button>
          <button className="deletebutton" onClick={() => handledelete(index)}>
            Delete
          </button>
        </li>
      ))}
    </ol>
  );
}

export default TodoList;
