import type React from "react";

const RelevanceLegend: React.FC = () => {
  return (
    <div className="flex items-center gap-6 mb-6 mt-2 text-sm">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-red-500"></div>
        <span className="text-gray-600">Low Relevance</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
        <span className="text-gray-600">Moderate Relevance</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-green-500"></div>
        <span className="text-gray-600">High Relevance</span>
      </div>
    </div>
  );
};

export default RelevanceLegend;
