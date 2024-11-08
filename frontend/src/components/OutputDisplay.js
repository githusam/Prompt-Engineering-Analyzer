import React from "react";

function OutputDisplay({ response }) {
  return (
    <div className="p-6 bg-gray-100 rounded-lg mt-4">
      <h3 className="text-lg font-semibold">Response</h3>
      <p className="mt-2 text-gray-800">{response}</p>
    </div>
  );
}

export default OutputDisplay;
