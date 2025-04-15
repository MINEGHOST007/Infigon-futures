import { reportTopics } from "@/constants/test3";
import { learningstyles } from "@/constants/test5";
import Image from "next/image";
import React from "react";

const bgColors: Record<string, string> = {
  Auditory: "bg-red-500",
  Visual: "bg-yellow-400",
  Reading: "bg-yellow-400",
  Kinesthetic: "bg-green-500",
};

const UnderstandingPage = () => {
  return (
    <section className="px-4 py-8 bg-white w-full min-h-screen">
      <h1 className="text-3xl poppins-bold mb-5">
        Understanding <span className="text-[#DE5AFF]">Learning Styles</span>
      </h1>
      <h4 className="poppins-bold mb-2">Introduction</h4>
      <p className="poppins-regular text-[#5B6871]">
        The <strong>VARK Learning Style</strong> test identifies an individual’s
        preferred learning style based on visual, auditory, reading, and
        kinesthetic modalities.
      </p>
      <br />
      <div className="flex flex-col md:flex-row gap-6">
        {learningstyles.map((style) => (
          <div
            key={style.id}
            className={`
      group md:w-1/3 p-0 rounded-xl transition-all duration-300
      cursor-pointer border border-gray-200 relative overflow-hidden
      bg-white
      hover:${bgColors[style.name] || "bg-yellow-400"}
      hover:shadow-2xl hover:scale-105
    `}
            style={{ minHeight: 180 }}
          >
            <div className="flex flex-col items-center justify-center h-full py-8 transition-all duration-300">
              <Image
                height={64}
                width={64}
                src={`/${style.image}`}
                alt={style.name}
                className={`
          transition-all duration-300
          group-hover:opacity-0 group-hover:scale-0
          mb-0 w-16 h-16
        `}
                style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.10))" }}
              />
              <div
                className={`
          transition-all duration-300
          opacity-100 max-h-40 mt-2
          flex flex-col items-center
          w-full
          group-hover:opacity-100
        `}
              >
                <h3 className="poppins-bold text-lg text-black mb-1">
                  {style.name}
                </h3>
                <p className="text-black text-sm text-center">
                  {style.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-[#0047AB] poppins-bold my-6">
        The purposes and applications of learning styles in career development
        include
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {reportTopics.map((topic) => (
          <div
            key={topic.title}
            className="bg-[#CACACA33] rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h3 className="font-semibold text-lg mb-2">{topic.title}</h3>
            <p className="text-sm text-gray-700">{topic.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UnderstandingPage;
