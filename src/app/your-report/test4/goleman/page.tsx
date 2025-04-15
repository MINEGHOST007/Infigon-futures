import { reportTopics } from "@/constants/test2";
import React from "react";

const emotionalElements = [
  {
    id: 1,
    label: "Self-awareness",
    color: "from-[#FFB370] to-[#FFF2E3]",
    dot: "bg-[#FF8A00]",
  },
  {
    id: 2,
    label: "Self-regulation",
    color: "from-[#42B2FF] to-[#E1F4FF]",
    dot: "bg-[#009DFF]",
  },
  {
    id: 3,
    label: "Motivation",
    color: "from-[#EBA7FF] to-[#FFF0FF]",
    dot: "bg-[#D94EFF]",
  },
  {
    id: 4,
    label: "Empathy",
    color: "from-[#C6A19E] to-[#F7ECEC]",
    dot: "bg-[#A05956]",
  },
  {
    id: 5,
    label: "Social Skills",
    color: "from-[#83E3C7] to-[#E5FAF5]",
    dot: "bg-[#0DBB94]",
  },
];

const RiasecPage = () => {
  return (
    <section className="px-4 py-8 bg-white w-full">
      <h3 className="text-[#0047AB] poppins-bold text-lg">
        5 Emotional Elements
      </h3>

      <div className="flex flex-wrap justify-center items-end gap-6 my-10">
        {emotionalElements.map(({ id, label, color, dot }) => (
          <div key={id} className="flex flex-col items-center">
            <div
              className={`w-36 h-36 rounded-full bg-gradient-to-b ${color} flex items-end justify-center relative`}
            >
              <div
                className={`w-10 h-10 ${dot} rounded-full flex items-center justify-center text-white text-sm font-bold absolute bottom-2`}
              >
                {id}
              </div>
            </div>
            <span className="text-sm font-medium text-center mt-2 w-24 text-[#333]">
              {label}
            </span>
          </div>
        ))}
      </div>

      <h3 className="text-[#0047AB] poppins-bold my-3 text-lg">
        Applications of the Emotional Intelligence Test in career development
        include
      </h3>
      <p className="poppins-regular text-[#5B6871] text-sm">
        Congratulations on taking the first step for personalized Career
        Planning & Assessment! We understand the significance of making informed
        decisions as you navigate your academic journey and future career. We
        are committed to empowering individuals with the tools and insights
        needed to confidently navigate the world of careers and education.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-4">
        {reportTopics.map((topic) => (
          <div
            key={topic.title}
            className="bg-[#CACACA33] rounded-lg p-4 shadow-sm"
          >
            <h3 className="font-semibold text-lg text-[#0047AB]">
              {topic.title}
            </h3>
            <p className="text-sm text-gray-700">{topic.description}</p>
          </div>
        ))}
      </div>

      <h3 className="text-[#0047AB] poppins-bold my-3 text-lg">
        Understanding emotional intelligence for career planning offers several
        benefits, including
      </h3>
      <div className="flex flex-wrap gap-4 p-4">
        {reportTopics.map((topic) => (
          <div
            key={topic.title}
            className="bg-[#CACACA33] rounded-lg p-4 shadow-sm"
          >
            <h3 className="font-semibold text-lg text-[#0047AB]">
              {topic.title}
            </h3>
            <p className="text-sm text-gray-700">{topic.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RiasecPage;
