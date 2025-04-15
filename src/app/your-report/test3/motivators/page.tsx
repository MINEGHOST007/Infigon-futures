import { reportTopics } from "@/constants/test2";
import React from "react";

const careerMotivators = [
  {
    number: 1,
    title: "Achievement and Results",
    color: "#1999A1", // teal-600
    ringColor: "#1999A1", // teal-400
  },
  {
    number: 2,
    title: "Helping Others",
    color: "#A15A19", // amber-800
    ringColor: "#A15A19", // amber-500
  },
  {
    number: 3,
    title: "Financial Rewards",
    color: "#55DCDC", // cyan-400
    ringColor: "#55DCDC", // cyan-400
  },
  {
    number: 4,
    title: "Creativity and Innovation",
    color: "#F6C61A", // yellow-400
    ringColor: "#F6C61A", // yellow-400
  },
  {
    number: 5,
    title: "Security and Stability",
    color: "#9140F8", // purple-600
    ringColor: "#9140F8", // purple-400
  },
  {
    number: 6,
    title: "Leadership and Influence",
    color: "#00A3FF", // blue-500
    ringColor: "#00A3FF", // blue-400
  },
  {
    number: 7,
    title: "Continuous Learning",
    color: "#194CA1", // blue-900
    ringColor: "#194CA1", // blue-900
  },
  {
    number: 8,
    title: "Independence",
    color: "#EE82FF", // pink-400
    ringColor: "#EE82FF", // pink-300
  },
  {
    number: 9,
    title: "Teamwork and Collaboration",
    color: "#B97979", // rose-400
    ringColor: "#B97979", // rose-300
  },
  {
    number: 10,
    title: "Flexibility and Work-Life Balance",
    color: "#FA9B56", // orange-400
    ringColor: "#FA9B56", // orange-300
  },
];

const RiasecPage = () => {
  return (
    <section className="px-4 py-8 bg-white w-full">
      <h3 className="text-[#0047AB] text-xl font-bold my-3">
        TOP 10 Career Motivators
      </h3>

      {/* Motivators Design */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {careerMotivators.map(({ number, title, color, ringColor }) => (
          <div
            key={number}
            className="flex items-center justify-between rounded-full px-4 py-2"
            style={{ boxShadow: `0 0 0 1px ${ringColor}` }}
          >
            <div
              className="rounded-full w-8 h-8 flex items-center justify-center text-white font-semibold"
              style={{ backgroundColor: color }}
            >
              {number}
            </div>
            <div className="flex-1 text-center font-bold text-gray-800">
              {title}
            </div>
          </div>
        ))}
      </div>

      {/* Applications Section */}
      <h3 className="text-[#0047AB] text-xl font-bold my-3">
        Purpose and Applications of Career Motivators in career development
        include
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {reportTopics.map((topic) => (
          <div
            key={topic.title}
            className="bg-[#CACACA33] rounded-lg p-4 shadow-sm"
          >
            <h3 className="font-semibold text-lg">{topic.title}</h3>
            <p className="text-sm text-gray-700">{topic.description}</p>
          </div>
        ))}
      </div>

      <h3 className="text-[#0047AB] text-xl font-bold my-3">
        Benefits of understanding interest using career motivators for career
        planning include
      </h3>
      <div className="flex flex-wrap gap-4 p-4">
        {reportTopics.map((topic) => (
          <div
            key={topic.title}
            className="bg-[#CACACA33] rounded-lg p-4 shadow-sm"
          >
            <h3 className="font-semibold text-lg">{topic.title}</h3>
            <p className="text-sm text-gray-700">{topic.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RiasecPage;
