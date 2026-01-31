import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(() => {
    const items = window.localStorage.getItem("todos");
    return items ? JSON.parse(items) : [];
  });

  const [updateIndex, setUpdateIndex] = useState(null);
  const [newTodo, setNewTodo] = useState("");

  // Add a new todo
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  // Remove a todo
  const removeTodo = (i) => setTodos(todos.filter((_, idx) => idx !== i));

  // Update a todo
  const updateTodo = (i) => {
    if (newTodo.trim()) {
      setTodos(todos.map((todo, idx) => (idx === i ? newTodo : todo)));
      setUpdateIndex(null);
      setNewTodo("");
    }
  };

  // state presistent
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
        style={{ width: "200px", height: "34px", padding: "4px 8px" }}
      />
      <button onClick={addTodo} style={{ marginLeft: "12px", height: "42px" }}>
        Add
      </button>

      <ol>
        {todos.map((todo, i) => (
          <li key={i} style={{ marginTop: "8px" }}>
            {updateIndex === i ? (
              <>
                <input
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  style={{ width: "150px", height: "28px", padding: "2px 6px" }}
                />
                <button
                  onClick={() => updateTodo(i)}
                  style={{ marginLeft: "8px", height: "42px" }}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                {todo}
                <span
                  style={{ cursor: "pointer", marginLeft: "18px" }}
                  onClick={() => {
                    setUpdateIndex(i);
                    setNewTodo(todo);
                  }}
                >
                  ✏️
                </span>
                <span
                  style={{ cursor: "pointer", marginLeft: "18px" }}
                  onClick={() => removeTodo(i)}
                >
                  ❌
                </span>
              </>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
