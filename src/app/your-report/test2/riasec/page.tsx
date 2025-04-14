"use client";
import { reportTopics } from "@/constants/test2";
import React from "react";
import RaisecWheel from "@/components/raisecwheel";

const RiasecPage = () => {
  return (
    <section className="px-4 py-8 bg-white w-full">
      <h3 className="text-[#0047AB] poppins-bold my-3">Themes of RIASEC </h3>
      <div>
        <RaisecWheel />
      </div>
      <div>
        {" "}
        <h3 className="text-[#0047AB] poppins-bold my-3">
          Purpose and Applications of RIASEC in Career Development{" "}
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
          Benefits of Understanding Interest Using RIASEC for Career Planning{" "}
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
      </div>
    </section>
  );
};

export default RiasecPage;
