// src/App.js
import React, { useState } from "react";
import PromptInput from "./components/PromptInput";
import ModelSelector from "./components/ModelSelector";
import OutputDisplay from "./components/OutputDisplay";
import CostBreakdown from "./components/CostBreakdown";

function App() {
  const [response, setResponse] = useState("");
  const [selectedModel, setSelectedModel] = useState("GPT-4");
  const [tokens, setTokens] = useState(1000); // Placeholder token count

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        Prompt Engineering Analyzer
      </h1>

      <ModelSelector
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
      />
      <PromptInput onResponse={(res) => setResponse(res)} />
      <OutputDisplay response={response} />
      <CostBreakdown tokens={tokens} modelType={selectedModel} />
    </div>
  );
}

export default App;
