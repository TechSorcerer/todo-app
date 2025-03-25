import React from "react";
import "./TodoItem.css";
import { Check, Trash2 } from "lucide-react";

function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <div className="todo-item">
      <div className="checkbox-wrapper">
        <label className="custom-checkbox">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="todo-checkbox"
          />
          <span className="checkbox-custom">
            {todo.completed && <Check size={14} className="check-icon" />}
          </span>
        </label>
      </div>
      <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)} className="todo-delete-btn">
        <Trash2 size={18} />
      </button>
    </div>
  );
}

export default TodoItem;
