import React, { useState } from "react";
import "./App.css";

function Hacer({ gawin, bilang, completeTodo, removeTodo }) {
  return (
    <div
      style={{ textDecoration: gawin.isCompleted ? "line-through" : "" }}
      className="ginagawa"
    >
      {gawin.text}
      <div>
        <button onClick={() => completeTodo(bilang)}>Complete</button>
        <button onClick={() => removeTodo(bilang)}>X</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add Todo Here..."
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [tasks, setTodos] = useState([
    {
      text: "Lear React",
      isCompleted: false,
    },
    {
      text: "Learn React Native",
      isCompleted: false,
    },
    {
      text: "Lear Rust",
      isCompleted: false,
    },
    {
      text: "Fix Aina table",
      isCompleted: false,
    },
    {
      text: "Massage Ogawa",
      isCompleted: false,
    },
    {
      text: "Learn React Native",
      isCompleted: false,
    },
  ]);

  const addTodofunc = (text) => {
    const newTodos = [...tasks, { text }];
    setTodos(newTodos);
  };

  const completeTodofunc = (index) => {
    const newTodos = [...tasks];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodofunc = (index) => {
    const newTodos = [...tasks];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <section className="app">
      <div className="todo-list">
        {tasks.map((himo, numero) => (
          <Hacer
            key={numero}
            bilang={numero}
            gawin={himo}
            completeTodo={completeTodofunc}
            removeTodo={removeTodofunc}
          />
        ))}
        <TodoForm addTodo={addTodofunc} />
      </div>
    </section>
  );
}

export default App;
