import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  // State to store the current task input
  const [task, setTask] = useState("");

  // State to store all todos
  const [todos, setTodos] = useState([]);

  // State to check if we are in editing mode
  const [isEditing, setIsEditing] = useState(false);

  // State to track the index of the task being edited
  const [currentEditIndex, setCurrentEditIndex] = useState(null);

  // Update the task state when input changes
  const handlechange = (e) => {
    setTask(e.target.value);
  };

  // Handle Add/Update button submission
  const handlesubmit = (e) => {
    e.preventDefault();

    // Prevent adding empty task
    if (task.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }

    // If editing, update the existing task
    if (isEditing) {
      const updatedTodos = [...todos];
      updatedTodos[currentEditIndex] = task;
      setTodos(updatedTodos);
      setIsEditing(false);
      setCurrentEditIndex(null);
    } else {
      // If not editing, add new task to list
      const newTodos = [...todos, task];
      setTodos(newTodos);
    }

    // Clear the input field after add/update
    setTask("");
  };

  // Handle Edit button click
  const handleEdit = (index) => {
    setTask(todos[index]); // Fill input with selected task
    setIsEditing(true); // Set editing mode to true
    setCurrentEditIndex(index); // Store index of task to edit
  };

  // Handle Delete button click
  const handledelete = (indexValue) => {
    const newtodos = todos.filter((todo, index) => index !== indexValue); // Remove the selected task
    setTodos(newtodos); // Update the todos state
  };

  return (
    <div className="container">
      <div>
        <h1>TODO APPLICATION</h1>

        {/* Form to input and submit tasks */}
        <form className="form" onSubmit={handlesubmit}>
          <input
            type="text"
            name="task"
            value={task}
            placeholder="What is the task today..."
            size={35}
            onChange={handlechange}
          />
          &nbsp;&nbsp;
          {/* Button changes based on mode: Add or Update */}
          <button className="button">{isEditing ? "Update" : "Add"}</button>
        </form>

        {/* Display the Todo list with edit and delete functionality */}
        <TodoList
          todos={todos}
          handledelete={handledelete}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default App;
