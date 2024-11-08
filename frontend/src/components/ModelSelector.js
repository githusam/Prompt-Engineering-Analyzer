import React from "react";

function ModelSelector({ selectedModel, setSelectedModel }) {
  return (
    <div className="p-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Select Model:
      </label>
      <select
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={selectedModel}
        onChange={(e) => setSelectedModel(e.target.value)}
      >
        <option value="GPT-4">GPT-4</option>
        <option value="GPT-3.5">GPT-3.5</option>
      </select>
    </div>
  );
}

export default ModelSelector;
