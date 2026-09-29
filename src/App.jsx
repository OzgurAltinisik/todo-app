import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const completedCount = todos.filter((t) => t.completed).length;
  const progress = todos.length === 0 ? 0 : (completedCount / todos.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex justify-center items-start pt-12 sm:pt-20 px-4 pb-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl shadow-lg mb-4">
            <span className="text-3xl">✓</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">To-Do List</h1>
          <p className="text-gray-500 text-sm mt-1">Günlük görevlerini takip et</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm shadow-2xl shadow-indigo-100 rounded-3xl p-6 border border-white">
          {todos.length > 0 && (
            <div className="mb-5">
              <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                <span>İlerleme</span>
                <span className="font-medium">{completedCount} / {todos.length}</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          <TodoForm onAdd={addTodo} />

          <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          React + Tailwind CSS ile yapıldı
        </p>
      </div>
    </div>
  );
}

export default App;