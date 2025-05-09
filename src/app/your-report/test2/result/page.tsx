"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { tabs } from "@/constants/test2";
import Image from "next/image";

const ResultPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentHash, setCurrentHash] = useState<string>("#personality");

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
      case "#strengths":
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
      case "#preferences":
        return (
          <div className="mt-5">
            <h3 className="text-[#0047AB] poppins-bold text-xl font-semibold">
              Preferences
            </h3>
            <div className="bg-white rounded-xl p-6 mt-4 border border-gray-300">
              <div className="space-y-4">
                {[
                  {
                    title: "Intellectual Stimulation",
                    description:
                      "They thrive in environments that challenge them intellectually and provide opportunities for continuous learning and problem-solving.",
                  },
                  {
                    title: "Autonomy",
                    description:
                      "They prefer to work independently with minimal supervision, valuing the freedom to implement their own ideas and approaches.",
                  },
                  {
                    title: "Innovation",
                    description:
                      "They are drawn to creative environments that embrace new ideas and allow them to develop innovative solutions to complex problems.",
                  },
                  {
                    title: "Efficiency",
                    description:
                      "They value systems and processes that are logical, streamlined, and designed for maximum effectiveness with minimal waste.",
                  },
                ].map((preference, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-blue-500 pt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#0047AB"
                        width="24px"
                      >
                        <path d="M14.5998 8.00033H21C22.1046 8.00033 23 8.89576 23 10.0003V12.1047C23 12.3659 22.9488 12.6246 22.8494 12.8662L19.755 20.3811C19.6007 20.7558 19.2355 21.0003 18.8303 21.0003H2C1.44772 21.0003 1 20.5526 1 20.0003V10.0003C1 9.44804 1.44772 9.00033 2 9.00033H5.48184C5.80677 9.00033 6.11143 8.84246 6.29881 8.57701L11.7522 0.851355C11.8947 0.649486 12.1633 0.581978 12.3843 0.692483L14.1984 1.59951C15.25 2.12534 15.7931 3.31292 15.5031 4.45235L14.5998 8.00033ZM7 10.5878V19.0003H18.1606L21 12.1047V10.0003H14.5998C13.2951 10.0003 12.3398 8.77128 12.6616 7.50691L13.5649 3.95894C13.6229 3.73105 13.5143 3.49353 13.3039 3.38837L12.6428 3.0578L7.93275 9.73038C7.68285 10.0844 7.36341 10.3746 7 10.5878ZM5 11.0003H3V19.0003H5V11.0003Z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">
                        {preference.title}
                      </h4>
                      <p className="text-gray-600">{preference.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "#interaction":
        return (
          <div className="mt-5">
            <h3 className="text-[#0047AB] poppins-bold text-xl font-semibold">
              Interpersonal Interaction
            </h3>
            <ul className="list-disc marker:font-bold marker:text-black py-8 px-10 mt-5 space-y-3 text-lg border border-gray-300 rounded-xl">
              {[
                {
                  title: "Direct",
                  description:
                    "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
                },
                {
                  title: "Assertive",
                  description:
                    "Natural leaders who enjoy theoretical thinking and long-term planning. They often have strong intuitions about possibilities.",
                },
                {
                  title: "Reserved",
                  description:
                    "Make decisions based on objective analysis rather than emotions. Value competence and knowledge above all else.",
                },
                {
                  title: "Objective",
                  description:
                    "Once they set their mind on a goal, they pursue it with singular focus and determination until completion.",
                },
                {
                  title: "Visionary",
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
      case "#work-culture":
        return (
          <div className="mt-5">
            <h3 className="text-[#0047AB] poppins-bold text-xl font-semibold">
              Interpersonal Interaction
            </h3>
            <ul className="list-disc marker:font-bold marker:text-black py-8 px-10 mt-5 space-y-3 text-lg border border-gray-300 rounded-xl">
              {[
                "Trust their own judgment implicitly and aren't afraid to voice their opinions or challenge conventional wisdom.",
                "Trust their own judgment implicitly and aren't afraid to voice their opinions or challenge conventional wisdom.",
                "Trust their own judgment implicitly and aren't afraid to voice their opinions or challenge conventional wisdom.",
                "Trust their own judgment implicitly and aren't afraid to voice their opinions or challenge conventional wisdom.",
              ].map((item, index) => (
                <li key={index} className="text-gray-800">
                  <span className="text-gray-600 text-md">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      case "#conclusion":
        return (
          <div className="mt-5">
            <h3 className="text-[#0047AB] poppins-bold text-xl font-semibold">
              Conclusion
            </h3>
            <p className="bg-[#0047AB] text-white p-4 rounded-md mt-4">
              You thrive in structured, people-oriented roles where your
              strengths in organization, empathy, and teamwork can shine. By
              embracing personal growth strategies, you can mitigate weaknesses
              and enhance your career success, as demonstrated by real-world
              examples and case studies. Understanding and developing your MBTI
              type can lead to fulfilling and impactful career paths.
            </p>
          </div>
        );
      default:
        return <div>Personality Component</div>;
    }
  }, [currentHash, type.code, type.color, type.description, type.image, type.tags, type.title]);

  return (
    <section className="py-4 px-4 bg-white w-full mx-auto">
      <div className="flex items-center justify-start gap-2 mb-8">
        <h3 className="text-[#309759] poppins-bold text-2xl my-4 border-r-2 border-gray-300 pr-5">
          <span className="text-black">Your</span> Result
        </h3>

        <div
          key={"1"}
          className={`px-2 py-3 font-bold border-b-2 border-b-[#309759]`}
        >
          PRIMARY INTEREST
        </div>

        <div key={"2"} className={`px-2 py-3 font-bold hover:pointer-cursor`}>
          SECONDARY INTEREST
        </div>

        <div key={"3"} className={`px-2 py-3 font-bold hover:pointer-cursor`}>
          TERITIARY INTEREST
        </div>
      </div>

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
              tab.href === currentHash ? "border-b-3 border-[#309759]" : ""
            }`}
          >
            <Link
              href={tab.href}
              className="poppins-bold text-gray-600 hover:text-[#309759] whitespace-nowrap select-none"
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
