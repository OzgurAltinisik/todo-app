function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="group flex items-center justify-between bg-gray-50 hover:bg-white hover:shadow-md border border-transparent hover:border-gray-100 rounded-xl px-4 py-3 mb-2 transition-all duration-200">
      <label className="flex items-center gap-3 flex-1 cursor-pointer">
        <div className="relative flex items-center justify-center">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:bg-indigo-500 checked:border-indigo-500 cursor-pointer transition"
          />
          <span className="pointer-events-none absolute text-white text-xs opacity-0 peer-checked:opacity-100 transition">
            ✓
          </span>
        </div>
        <span
          className={
            todo.completed
              ? "line-through text-gray-400 transition"
              : "text-gray-700 transition"
          }
        >
          {todo.text}
        </span>
      </label>

      <button
        onClick={() => onDelete(todo.id)}
        className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-600 text-sm font-medium transition-opacity duration-200 ml-2"
      >
        Sil
      </button>
    </li>
  );
}

export default TodoItem;