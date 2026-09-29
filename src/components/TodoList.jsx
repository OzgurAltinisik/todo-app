import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-4xl mb-2">🌤️</p>
        <p className="text-gray-400 text-sm">Henüz görev yok, ekleyerek başla!</p>
      </div>
    );
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;