import React from "react";
import Image from "next/image";
import { personalityTypes } from "@/constants/test1";

const TypesPage = () => {
  return (
    <section className="px-4 py-4 bg-white w-full mx-auto">
      <h3 className="text-[#0047AB] poppins-bold text-2xl my-4">
        Personality Types
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {personalityTypes.map((type) => (
          <div
            key={type.code}
            className="w-full max-w-xs rounded-2xl p-5 text-center flex flex-col hover:shadow-lg transition-shadow duration-300"
          >
            <div
              className="w-full rounded-lg h-36 flex items-center justify-center mb-3"
              style={{ backgroundColor: type.color }}
            >
              <Image
                src={type.image || "/inspector.png"}
                alt={type.title || "Inspector"}
                width={100}
                height={100}
                className="h-28 object-contain transition-transform hover:scale-105 duration-300"
              />
            </div>
            <div className="flex flex-row justify-between items-center mb-3">
              <h2 className="text-xl font-semibold">
                {type.title || "Inspector"}
              </h2>
              <span className="text-sm font-bold bg-[#D9E9F0] px-3 py-1 rounded-full text-[#3B4E58]">
                {type.code || "ISTJ"}
              </span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              {type.description ||
                "Focuses on concrete, tangible information and present realities tangible information and present realities"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TypesPage;
