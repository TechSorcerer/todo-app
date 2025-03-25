import React, { useState } from "react";
import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";
import { Circle } from "lucide-react";

function TodoList({ todos, onDelete, onToggle, onAdd }) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      onAdd(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="todo-input-container">
        <Circle size={20} className="circle-icon" />
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Create a new todo..."
          className="todo-input"
        />
      </form>

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default TodoList;
