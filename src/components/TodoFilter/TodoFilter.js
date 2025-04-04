import React from "react";
import "./TodoFilter.css";

function TodoFilter({ filter, onFilterChange, onClearCompleted, todoCount }) {
  return (
    <div className="todo-filter">
      <span className="todo-count">{todoCount} items left</span>
      <div className="todo-filter-buttons">
        {["All", "Active", "Completed"].map((filterType) => (
          <button
            key={filterType}
            onClick={() => onFilterChange(filterType)}
            className={filter === filterType ? "active" : ""}
          >
            {filterType}
          </button>
        ))}
      </div>
      <button onClick={onClearCompleted} className="todo-clear-btn">
        Clear Completed
      </button>
    </div>
  );
}

export default TodoFilter;
