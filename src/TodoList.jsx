import React from "react";

// TodoList component receives todos, handledelete, and handleEdit as props
function TodoList({ todos, handledelete, handleEdit }) {
  return (
    <ol>
      {/* Map through each todo and display it in a list item */}
      {todos.map((todo, index) => (
        <li key={index}>
          {/* Display the task text */}
          <span className="text">{todo}</span>

          {/* Edit button to modify the selected task */}
          <button className="editbutton" onClick={() => handleEdit(index)}>
            Edit
          </button>

          {/* Delete button to remove the selected task */}
          <button className="deletebutton" onClick={() => handledelete(index)}>
            Delete
          </button>
        </li>
      ))}
    </ol>
  );
}

export default TodoList;
