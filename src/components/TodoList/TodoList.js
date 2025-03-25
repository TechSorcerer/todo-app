import React, { useState } from "react";
import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";

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
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Create a new todo..."
          className="todo-input"
        />
        <button type="submit" className="todo-add-btn">
          +
        </button>
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
