"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { tabs } from "@/constants/test1";
import Image from "next/image";

const ResultPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentHash, setCurrentHash] = useState<string>(window.location.hash);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const type = {
    code: "INTJ Personality",
    title: "Inspector",
    description:
      "Congratulations on taking the first step for personalized Career Planning & Assessment! We understand the significance of making informed decisions as you navigate your academic journey and future career. We are committed to empowering individuals with the tools and insights needed to confidently navigate the world of careers and education.",
    color: "#D9E9F0",
    image: "/inspector.png",
    tags: ["STRATEGIC", "ANALYTICAL", "INDEPENDENT"],
  };

  const renderComponent = useCallback(() => {
    switch (currentHash) {
      case "#personality":
        return (
          <div className="w-full rounded-2xl text-center flex flex-col md:flex-row py-4 bg-white poppins-regular">
            <div
              className="rounded-lg h-48 flex items-center justify-center mb-3 flex-1/3"
              style={{ backgroundColor: type.color }}
            >
              <Image
                src={type.image || "/architect.png"}
                alt={type.title || "Architect"}
                width={100}
                height={100}
                className="h-28 object-contain"
              />
            </div>
            <div className="flex-2/3 flex flex-col justify-start items-start px-4">
              <div className="flex flex-row justify-start gap-4 items-center mb-2 w-full">
                <h2 className="text-xl font-bold text-gray-800">
                  {type.title || "Architect"}
                </h2>
                <span
                  className={`text-md font-bold border-l-2 border-gray-400 pl-4`}
                  style={{
                    color: `color-mix(in srgb, ${type.color}, black 60%)`,
                  }}
                >
                  {type.code || "INTJ Personality"}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {(type.tags || ["STRATEGIC", "ANALYTICAL", "INDEPENDENT"]).map(
                  (tag, index) => (
                    <span
                      key={index}
                      style={{
                        color: `color-mix(in srgb, ${type.color}, black 60%)`,
                      }}
                      className={`text-xs font-bold bg-[${type.color}] px-3 py-1 rounded-full`}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed text-start">
                {type.description ||
                  "Congratulations on taking the first step for personalized Career Planning & Assessment! We understand the significance of making informed decisions as you navigate your academic journey and future career. We are committed to empowering individuals with the tools and insights needed to confidently navigate the world of careers and education."}
              </p>
            </div>
          </div>
        );
      case "#characteristics":
        return (
          <div className="mt-5">
            <h3 className="text-[#0047AB] poppins-bold text-xl font-semibold">
              Characteristics
            </h3>
            <ul className="list-disc marker:font-bold marker:text-black pl-10 space-y-3 mt-6 text-lg">
              {[
                {
                  title: "Strategic and Analytical",
                  description:
                    "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
                },
                {
                  title: "Independent and Visionary",
                  description:
                    "Natural leaders who enjoy theoretical thinking and long-term planning. They often have strong intuitions about possibilities.",
                },
                {
                  title: "Logical and Rational",
                  description:
                    "Make decisions based on objective analysis rather than emotions. Value competence and knowledge above all else.",
                },
                {
                  title: "Goal Oriented and Determined",
                  description:
                    "Once they set their mind on a goal, they pursue it with singular focus and determination until completion.",
                },
                {
                  title: "Confident and Assertive",
                  description:
                    "Trust their own judgment implicitly and aren't afraid to voice their opinions or challenge conventional wisdom.",
                },
              ].map((item, index) => (
                <li key={index} className="text-gray-800">
                  <strong className="font-bold">{item.title}</strong>
                  <br />
                  <span className="text-gray-600 text-md">
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );
      case "#strengths-weaknesses":
        const traits = [
          {
            title: "Strategic Thinking",
            description:
              'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.',
          },
          {
            title: "Problem Solving",
            description:
              'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.',
          },
          {
            title: "Independence",
            description:
              'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.',
          },
          {
            title: "Visionary Leadership",
            description:
              'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.',
          },
          {
            title: "Efficiency",
            description:
              'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.',
          },
        ];

        return (
          <div className="flex flex-col md:flex-row gap-1 mt-4">
            <div className="flex-1 bg-white rounded-xl p-6">
              <h3 className="text-[#0047AB] font-bold text-lg mb-4">
                Strengths
              </h3>
              <div className="border rounded-xl border-gray-300 p-3">
                {traits.map((trait, index) => (
                  <div
                    key={`strength-${index}`}
                    className="bg-[#309759] text-white p-4 rounded-md mb-3"
                  >
                    <span className="font-semibold">{trait.title}:</span>{" "}
                    {trait.description}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 bg-white rounded-xl p-6">
              <h3 className="text-[#0047AB] font-bold text-lg mb-4">
                Weaknesses
              </h3>
              <div className="border rounded-xl border-gray-300 p-3 ">
                {traits.map((trait, index) => (
                  <div
                    key={`weakness-${index}`}
                    className="bg-[#dc5c5c] text-white p-4 rounded-md mb-3"
                  >
                    <span className="font-semibold">{trait.title}:</span>{" "}
                    {trait.description}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "#work-style":
        return (
          <div className="mt-5">
            <h3 className="text-[#0047AB] poppins-bold text-xl font-semibold">
              Work Style
            </h3>
            <ul className="list-disc marker:font-bold marker:text-black py-8 px-10 mt-5 space-y-3 text-lg border border-gray-300 rounded-xl">
              {[
                {
                  title: "Strategic and Analytical",
                  description:
                    "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
                },
                {
                  title: "Independent and Visionary",
                  description:
                    "Natural leaders who enjoy theoretical thinking and long-term planning. They often have strong intuitions about possibilities.",
                },
                {
                  title: "Logical and Rational",
                  description:
                    "Make decisions based on objective analysis rather than emotions. Value competence and knowledge above all else.",
                },
                {
                  title: "Goal Oriented and Determined",
                  description:
                    "Once they set their mind on a goal, they pursue it with singular focus and determination until completion.",
                },
                {
                  title: "Confident and Assertive",
                  description:
                    "Trust their own judgment implicitly and aren't afraid to voice their opinions or challenge conventional wisdom.",
                },
              ].map((item, index) => (
                <li key={index} className="text-gray-800">
                  <strong className="font-bold">{item.title}</strong>
                  <br />
                  <span className="text-gray-600 text-md">
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );
      case "#preferences":
        return <div>Leadership Component</div>;
      case "#interpersonal-interaction":
        return <div>Personality Component</div>;
      case "#work-culture":
        return <div>Career Component</div>;
      case "#roles":
        return <div>Learning Component</div>;
      case "#case-studies":
        return <div>Leadership Component</div>;
      case "#famous-personalities":
        return <div>Leadership Component</div>;
      case "#recommendations":
        return <div>Leadership Component</div>;
      default:
        return <div>Personality Component</div>;
    }
  }, [currentHash]);

  return (
    <section className="px-4 py-4 bg-white w-full mx-auto">
      <h3 className="text-[#0047AB] poppins-bold text-2xl my-4">
        <span className="text-black">Your</span> Result
      </h3>

      <div
        ref={scrollRef}
        className="h-9 flex flex-row overflow-hidden w-[70vw] gap-4 border-b-2 border-[#D9E9F0] cursor-default"
        style={{
          userSelect: "none",
          WebkitUserSelect: "none",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`px-2 select-none ${
              tab.href === currentHash ? "border-b-3 border-[#0047AB]" : ""
            }`}
          >
            <Link
              href={tab.href}
              className="poppins-bold text-gray-600 hover:text-[#0047AB] whitespace-nowrap select-none"
              draggable="false"
              onClick={(e) => {
                e.preventDefault();
                setCurrentHash(tab.href);
                window.location.hash = tab.href;
              }}
            >
              {tab.name}
            </Link>
          </div>
        ))}
      </div>
      {renderComponent()}
    </section>
  );
};

export default ResultPage;
