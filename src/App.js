import React, { useState, useEffect } from "react";

import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import TodoFilter from "./components/TodoFilter/TodoFilter";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  // Add new Todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle Todo
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Cleat Todo
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // Filter Todo
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  // save to LS
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Install Todo from LS
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoList
        todos={filteredTodos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
        onAdd={addTodo}
      />
      <TodoFilter
        filter={filter}
        onFilterChange={setFilter}
        onClearCompleted={clearCompleted}
        todoCount={todos.filter((todo) => !todo.completed).length}
      />
    </div>
  );
}

export default App;
