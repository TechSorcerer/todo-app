import React from "react";
import "./TodoItem.css";

function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="todo-checkbox"
      />
      <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)} className="todo-delete-btn">
        🗑️
      </button>
    </div>
  );
}

export default TodoItem;
