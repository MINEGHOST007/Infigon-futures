import React from "react";
import { dichotomies, reportTopics } from "@/constants/test1";

const UnderstandingPage = () => {
  return (
    <section className="px-4 py-8 bg-white w-full">
      <h1 className="text-3xl poppins-bold mb-5">
        Understanding{" "}
        <span className="text-[#0047AB]">Personality Explorer</span>
      </h1>
      <h4 className="poppins-bold mb-2">Introduction</h4>
      <p className="poppins-regular text-[#5B6871]">
        Congratulations on taking the first step for personalized Career
        Planning & Assessment! We understand the significance of making informed
        decisions as you navigate your academic journey and future career. We
        are committed to empowering individuals with the tools and insights
        needed to confidently navigate the world of careers and education.
      </p>
      <br />
      <p className="poppins-regular text-[#5B6871]">
        <span className="poppins-bold text-black">
          To understand your personality Myers-Brig Type Indicator (MBTI) test
          was used.{" "}
        </span>
        It is a personality explorer psychometric assessment tool that helps
        individuals understand their preferences, strengths, and areas for
        growth. Developed by Isabel Briggs Myers and Katharine Cook Briggs, the
        MBTI categorizes individuals into 16 personality types based on four
        dichotomies. The goal is to gain deeper self-awareness, enhance personal
        development, and improve interpersonal relationships
      </p>
      <h3 className="text-[#0047AB] poppins-bold my-3">THE FOUR DICHOTOMIES</h3>
      {dichotomies.map((dichotomy) => (
        <div key={dichotomy.id} className="my-4 max-w-[70vw] mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mt-2">
            <div
              key={dichotomy.traits[0].id}
              className="border-[#CACACA] border-1 p-3 rounded-lg flex-1"
            >
              <h5 className="font-semibold">
                {dichotomy.traits[0].name} ({dichotomy.traits[0].id})
              </h5>
              <p className="text-[#696969]">
                {dichotomy.traits[0].description}
              </p>
            </div>
            <div className="md:flex hidden items-center justify-center min-w-20 max-w-40">
              <div className="w-4 h-4 bg-green-600 rounded-full"></div>
              <div className="flex-1 h-1 bg-gradient-to-r from-green-600 to-red-500"></div>
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            </div>
            <div
              key={dichotomy.traits[1].id}
              className="border-[#CACACA] border-1 p-3 rounded-lg flex-1"
            >
              <h5 className="font-semibold">
                {dichotomy.traits[1].name} ({dichotomy.traits[1].id})
              </h5>
              <p className="text-[#696969]">
                {dichotomy.traits[1].description}
              </p>
            </div>
          </div>
          <hr className="mt-4 md:hidden" />
        </div>
      ))}
      <h3 className="text-[#0047AB] poppins-bold my-3">
        Purpose, Applications, and Benefits of MBTI in Career Development
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
    </section>
  );
};

export default UnderstandingPage;
