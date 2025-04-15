import type React from "react";

type RelevanceType = "low" | "moderate" | "high";

interface ScoreCardProps {
  id: number;
  title: string;
  score: number;
  maxScore: number;
  relevance: RelevanceType;
  description: string;
  pros: string;
  cons: string;
}

const ScoreCard: React.FC<ScoreCardProps> = ({
  id,
  title,
  score,
  maxScore,
  relevance,
  description,
  pros,
  cons,
}) => {
  const getRelevanceColor = (relevance: RelevanceType) => {
    switch (relevance) {
      case "low":
        return "bg-red-500";
      case "moderate":
        return "bg-yellow-400";
      case "high":
        return "bg-green-500";
      default:
        return "bg-gray-400";
    }
  };

  const getScoreBackgroundColor = (id: number) => {
    const colors = [
      "bg-teal-500",
      "bg-orange-500",
      "bg-teal-400",
      "bg-yellow-400",
      "bg-purple-500",
      "bg-blue-500",
      "bg-blue-800",
      "bg-pink-500",
      "bg-red-400",
      "bg-orange-400",
    ];
    return colors[(id - 1) % colors.length];
  };

  const getCircleColor = (id: number) => {
    const colors = [
      "text-teal-500 border-teal-500",
      "text-orange-500 border-orange-500",
      "text-teal-400 border-teal-400",
      "text-yellow-400 border-yellow-400",
      "text-purple-500 border-purple-500",
      "text-blue-500 border-blue-500",
      "text-blue-800 border-blue-800",
      "text-pink-500 border-pink-500",
      "text-red-400 border-red-400",
      "text-orange-400 border-orange-400",
    ];
    return colors[(id - 1) % colors.length];
  };

  const getTitleColor = (id: number) => {
    const colors = [
      "text-teal-500",
      "text-orange-500",
      "text-teal-400",
      "text-yellow-400",
      "text-purple-500",
      "text-blue-500",
      "text-blue-800",
      "text-pink-500",
      "text-red-400",
      "text-orange-400",
    ];
    return colors[(id - 1) % colors.length];
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div
            className={`w-8 h-8 rounded-full border-2 ${getCircleColor(
              id
            )} flex items-center justify-center font-semibold`}
          >
            {id}
          </div>
          <h3 className={`${getTitleColor(id)} poppins-bold font-semibold`}>
            {title}
          </h3>
        </div>
        <div
          className={`flex items-center gap-2 ${getScoreBackgroundColor(
            id
          )} text-white px-3 py-1 rounded-full`}
        >
          <span className="font-semibold">
            {score}/{maxScore}
          </span>
          <div
            className={`w-4 h-4 rounded-full ${getRelevanceColor(relevance)}`}
          ></div>
        </div>
      </div>
      <div className="border rounded-lg p-4 mb-4">
        <p className="text-gray-700 mb-4">{description}</p>

        <div className="space-y-3">
          <div>
            <h4 className="font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              Pros
            </h4>
            <p className="text-gray-700 ml-4">{pros}</p>
          </div>

          <div>
            <h4 className="font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              Cons
            </h4>
            <p className="text-gray-700 ml-4">{cons}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
