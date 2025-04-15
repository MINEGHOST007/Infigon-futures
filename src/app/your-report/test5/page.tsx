import { reportTopics } from "@/constants/test3";
import { learningstyles } from "@/constants/test5";
import Image from "next/image";
import React from "react";

const UnderstandingPage = () => {
  return (
    <section className="px-4 py-8 bg-white w-full">
      <h1 className="text-3xl poppins-bold mb-5">
        Understanding <span className="text-[#DE5AFF]">Learning Styles</span>
      </h1>
      <h4 className="poppins-bold mb-2">Introduction</h4>
      <p className="poppins-regular text-[#5B6871]">
        The<strong> VARK Learning Style</strong> test identifies and
        individual’s prefereed learning style based on visual, auditory, reading
        and Kinesthetic The VARK Learning Style test identifies and individual’s
        prefereed learning style based on visual, auditory, reading and
        Kinesthetic The VARK Learning Style test identifies and individual’s
        prefereed learning style based on visual, auditory, reading and
        Kinesthetic.
      </p>
      <br />
      <div className="flex flex-col md:flex-row gap-4">
        {learningstyles.map((style) => (
          <div
            className="group md:w-1/3 p-6 rounded-xl transition-all duration-300 hover:shadow-lg cursor-pointer border border-gray-200 hover:border-[#DE5AFF] relative"
            key={style.id}
          >
            <div className="flex flex-col items-center">
              <Image
                height={24}
                width={24}
                src={`/${style.image}`}
                alt={style.name}
                className="w-16 h-16 mb-4 transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="poppins-bold text-lg mb-2 text-center">
                {style.name}
              </h3>
              <p className="text-[#5B6871] text-sm text-center opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[100px] transition-all duration-300">
                {style.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-[#0047AB] poppins-bold my-3">
        The purposes and applications of learning styles in career development
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
      <h3 className="text-[#0047AB] poppins-bold my-3">
        The purposes and applications of learning styles in career development
        include
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

export default UnderstandingPage;
