"use client";
import type React from "react";
import { useState } from "react";

const RiasecWheel: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const sections = [
    {
      id: "R",
      title: "Realistic",
      text: "Realistic individuals are practical, physical, hands-on problem solvers who like working with tools, machines, plants, or animals.",
    },
    {
      id: "I",
      title: "Investigative",
      text: "Investigative individuals are analytical, intellectual, and scientific, enjoying research, mathematical, or scientific activities.",
    },
    {
      id: "A",
      title: "Artistic",
      text: "Artistic individuals are creative, original, and independent, preferring unstructured environments to express their creativity.",
    },
    {
      id: "S",
      title: "Social",
      text: "Social individuals are helpful, friendly, and trustworthy, enjoying working with and helping others through teaching, counseling, or caregiving.",
    },
    {
      id: "E",
      title: "Enterprising",
      text: "Enterprising individuals are energetic, ambitious, and sociable, enjoying leadership, persuading others, and taking risks for profit.",
    },
    {
      id: "C",
      title: "Conventional",
      text: "Conventional individuals are organized, detail-oriented, and methodical, preferring structured environments with clear rules and regulations.",
    },
  ];

  const getColor = (id: string, isSelected: boolean) => {
    const colors: { [key: string]: string } = {
      R: isSelected ? "fill-[#be123c]" : "fill-[#e11d48] hover:fill-[#be123c]",
      I: isSelected ? "fill-[#d97706]" : "fill-[#f59e0b] hover:fill-[#d97706]",
      A: isSelected ? "fill-[#059669]" : "fill-[#10b981] hover:fill-[#059669]",
      S: isSelected ? "fill-[#0284c7]" : "fill-[#0ea5e9] hover:fill-[#0284c7]",
      E: isSelected ? "fill-[#7c3aed]" : "fill-[#8b5cf6] hover:fill-[#7c3aed]",
      C: isSelected ? "fill-[#4f46e5]" : "fill-[#6366f1] hover:fill-[#4f46e5]",
    };
    return colors[id];
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]">
        {/* Outer circle with sections */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {sections.map((section, index) => {
            const angle = index * 60;
            const isSelected = selectedSection === section.id;

            // Geometry calculations
            const centerX = 50;
            const centerY = 50;
            const outerRadius = 50;
            const innerRadius = 40;

            // Calculate angles
            const startAngle = ((angle - 30) * Math.PI) / 180;
            const endAngle = ((angle + 30) * Math.PI) / 180;

            // Outer arc points
            const outerX1 = centerX + outerRadius * Math.cos(startAngle);
            const outerY1 = centerY + outerRadius * Math.sin(startAngle);
            const outerX2 = centerX + outerRadius * Math.cos(endAngle);
            const outerY2 = centerY + outerRadius * Math.sin(endAngle);

            // Inner arc points
            const innerX1 = centerX + innerRadius * Math.cos(endAngle);
            const innerY1 = centerY + innerRadius * Math.sin(endAngle);
            const innerX2 = centerX + innerRadius * Math.cos(startAngle);
            const innerY2 = centerY + innerRadius * Math.sin(startAngle);

            // Create the SVG path for the rim segment
            const path = `
              M ${outerX1} ${outerY1}
              A ${outerRadius} ${outerRadius} 0 0 1 ${outerX2} ${outerY2}
              L ${innerX1} ${innerY1}
              A ${innerRadius} ${innerRadius} 0 0 0 ${innerX2} ${innerY2}
              Z
            `;

            // Text positioning
            const textRadius = (outerRadius + innerRadius) / 2;
            const textX =
              centerX + textRadius * Math.cos((angle * Math.PI) / 180);
            const textY =
              centerY + textRadius * Math.sin((angle * Math.PI) / 180);

            return (
              <div
                key={section.id}
                className={`
                  absolute inset-0
                  transition-transform duration-300
                  ${isSelected ? "scale-[1.02] z-20" : "z-10"}
                `}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <g
                    onClick={() =>
                      setSelectedSection(
                        selectedSection === section.id ? null : section.id
                      )
                    }
                    className="cursor-pointer"
                  >
                    <path
                      d={path}
                      className={`
                        ${getColor(section.id, isSelected)}
                        transition-all duration-200
                        ${
                          isSelected
                            ? "stroke-white stroke-2"
                            : "stroke-transparent"
                        }
                      `}
                    />
                    <text
                      x={textX}
                      y={textY}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="fill-white font-bold text-[4px]"
                      transform={`rotate(${angle + 90}, ${textX}, ${textY})`}
                    >
                      {section.id}
                    </text>
                  </g>
                </svg>
              </div>
            );
          })}
        </div>

        {/* Center circle with information */}
        <div className="absolute inset-0 m-auto w-[80%] h-[80%] bg-white rounded-full shadow-lg z-30 flex items-center justify-center p-4">
          <div className="text-center w-full h-full flex items-center justify-center">
            {selectedSection ? (
              <div
                style={{ backgroundColor: "#0047AB" }}
                className={` text-white bg-opacity-10 w-full h-full rounded-full flex items-center justify-center p-6 transition-all duration-300`}
              >
                <div>
                  <h2 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-white">
                    {sections.find((s) => s.id === selectedSection)?.title}
                  </h2>
                  <p className="text-xs md:text-sm text-white">
                    {sections.find((s) => s.id === selectedSection)?.text}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-xs md:text-sm text-gray-600">
                Click on a colored section to learn about RIASEC personalities.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiasecWheel;
