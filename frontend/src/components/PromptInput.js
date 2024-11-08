import React, { useState } from "react";
import axios from "axios";

function PromptInput({ onResponse }) {
  const [prompt, setPrompt] = useState("");

  const handlePromptSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:5000/prompt/process", {
        prompt,
        modelType: "GPT-4",
      });
      onResponse(res.data.output);
    } catch (error) {
      console.error("Error processing prompt:", error);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <textarea
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here..."
      />
      <button
        className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
        onClick={handlePromptSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default PromptInput;
