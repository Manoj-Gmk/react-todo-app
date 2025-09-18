import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  
  const [task, setTask] = useState("");
  
  const [todos, setTodos] = useState([]);

  const [isEditing, setIsEditing] = useState(false);

  const [currentEditIndex, setCurrentEditIndex] = useState(null);

  const handlechange = (e) => {
    setTask(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }

    if (isEditing) {
      const updatedTodos = [...todos];
      updatedTodos[currentEditIndex] = task;
      setTodos(updatedTodos);
      setIsEditing(false);
      setCurrentEditIndex(null);
    } else {
      const newTodos = [...todos, task];
      setTodos(newTodos);
    }
    setTask("");
  };

  // Handle Edit button click
  const handleEdit = (index) => {
    setTask(todos[index]); 
    setIsEditing(true); 
    setCurrentEditIndex(index); 
  };

  // Handle Delete button click
  const handledelete = (indexValue) => {
    const newtodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newtodos); 
  };

  return (
    <div className="container">
      <div>
        <h1>TODO APPLICATION</h1>
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
          <button className="button">{isEditing ? "Update" : "Add"}</button>
        </form>

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
