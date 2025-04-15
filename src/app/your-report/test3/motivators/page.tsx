import { reportTopics } from "@/constants/test2";
import React from "react";

const RiasecPage = () => {
  return (
    <section className="px-4 py-8 bg-white w-full">
      <h3 className="text-[#0047AB] poppins-bold my-3">
        Applications of the Emotional Intelligence Test in career development
        include
      </h3>
      <p className="poppins-regular text-[#5B6871]">
        Congratulations on taking the first step for personalized Career
        Planning & Assessment! We understand the significance of making informed
        decisions as you navigate your academic journey and future career. We
        are committed to empowering individuals with the tools and insights
        needed to confidently navigate the world of careers and education.
      </p>
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
      <h3 className="text-[#0047AB] poppins-bold my-3">
        Understanding emotional intelligence for career planning offers several
        benefits, including
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
