"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { linearProgressData, scoreCategories, tabs } from "@/constants/test3";
import RelevanceLegend from "@/components/relevance";
import ScoreCard from "@/components/scorecard";

const ResultPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentHash, setCurrentHash] = useState<string>("#yourscore");

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

  const renderComponent = useCallback(() => {
    switch (currentHash) {
      case "#yourscore":
        return (
          <div className="w-full">
            <div className="flex items-center mb-2">
              <h2 className="text-blue-700 font-semibold text-lg">
                Your Scores
              </h2>
            </div>

            <RelevanceLegend />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scoreCategories.map((category) => (
                <ScoreCard
                  key={category.id}
                  id={category.id}
                  title={category.title}
                  score={category.score}
                  maxScore={category.maxScore}
                  relevance={category.relevance as "low" | "moderate" | "high"}
                  description={category.description}
                  pros={category.pros}
                  cons={category.cons}
                />
              ))}
            </div>
          </div>
        );
      case "#conclusion":
        return (
          <div className="w-full">
            <div className="flex items-center mb-4">
              <h2 className="text-blue-700 font-semibold text-lg mr-6">
                Summarised Result
              </h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-500"></div>
                  <span className="text-gray-500">Low Relevance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                  <span className="text-gray-500">Moderate Relevance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  <span className="text-gray-500">High Relevance</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-8">
              {linearProgressData.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 font-medium">
                        {item.id}
                      </div>
                      <span className="text-gray-600 font-medium">
                        {item.title}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="border border-gray-200 rounded-full px-3 py-0.5 flex items-center gap-2">
                        <span className="text-gray-700 font-medium">
                          {item.score}/{item.maxScore}
                        </span>
                        <div className="w-4 h-4 rounded-full bg-red-500"></div>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`absolute top-0 left-0 h-full ${item.color} rounded-full`}
                      style={{
                        width: `${(item.score / item.maxScore) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-[#0047AB] poppins-bold text-xl font-semibold mb-4">
                Conclusion
              </h3>
              <div className="bg-[#FF9706] text-white p-4 rounded-md">
                <p>
                  You thrive in structured, people-oriented roles where your
                  strengths in organization, empathy, and teamwork can shine. By
                  embracing personal growth strategies, you can mitigate
                  weaknesses and enhance your career success, as demonstrated by
                  real-world examples and case studies. Understanding and
                  developing your MBTI type can lead to fulfilling and impactful
                  career paths.
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return <div>Personality Component</div>;
    }
  }, [currentHash]);

  return (
    <section className="px-4 py-4 bg-white w-full mx-auto">
      <h3 className="text-[#FF9706] poppins-bold text-2xl my-4">
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
              tab.href === currentHash ? "border-b-3 border-[#FF9706]" : ""
            }`}
          >
            <Link
              href={tab.href}
              className="poppins-bold text-gray-600 hover:text-[#FF9706] whitespace-nowrap select-none"
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
