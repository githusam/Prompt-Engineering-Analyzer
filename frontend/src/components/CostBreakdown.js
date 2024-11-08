import React, { useEffect, useState } from "react";
import axios from "axios";

function CostBreakdown({ tokens, modelType }) {
  const [cost, setCost] = useState(0);

  useEffect(() => {
    const fetchCost = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/cost/calculate?tokens=${tokens}&modelType=${modelType}`
        );
        setCost(res.data.cost);
      } catch (error) {
        console.error("Error fetching cost:", error);
      }
    };
    fetchCost();
  }, [tokens, modelType]);

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-2">Cost Breakdown</h3>
      <p className="text-gray-700">Estimated Cost: ${cost.toFixed(2)}</p>
    </div>
  );
}

export default CostBreakdown;
