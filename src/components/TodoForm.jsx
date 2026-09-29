import { useState } from "react";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim() === "") return;
    onAdd(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-5">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ne yapman gerekiyor?"
        className="flex-1 border border-gray-200 bg-gray-50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white transition"
      />
      <button
        type="submit"
        className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-indigo-200 active:scale-95 transition-all"
      >
        Ekle
      </button>
    </form>
  );
}

export default TodoForm;