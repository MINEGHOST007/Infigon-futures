"use client";
import React, { useState } from "react";
import { sideBarItems, SideBarItem } from "@/constants/sidebar";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";

interface SectionProps {
  item: SideBarItem;
  isActive: boolean;
  onClick: (title: string) => void;
}

const Section: React.FC<SectionProps> = ({ item, isActive, onClick }) => {
  return (
    <div className="w-full flex justify-start flex-col items-start pl-12">
      <div
        onClick={() => onClick(item.title)}
        className={`hover:cursor-pointer flex gap-2 rounded-lg w-[20vw] my-4 px-2 py-3 transition-all duration-300 ${
          isActive ? "border-r-4 shadow-[0_4px_12px_rgba(0,0,0,0.12)]" : ""
        }`}
        style={{
          borderColor: isActive ? item.color : "transparent",
        }}
      >
        <Image alt="sidebar-icon" src={item.icon} width={38} height={38} />
        <div>
          <h3 className="cursor-pointer text-[#666B72]">{item.title}</h3>
          {item.subheading && (
            <h4 className="poppins-medium" style={{ color: item.color }}>
              {item.subheading}
            </h4>
          )}
        </div>
      </div>
      {isActive && item.subroutes && (
        <ul className="flex flex-col gap-2 px-2">
          {item.subroutes.map((route) => (
            <li key={route.name}>{route.name}</li>
          ))}
        </ul>
      )}
      <div className="border-t-1 border-gray-300 w-[18vw] my-4"></div>
    </div>
  );
};

const Sidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>("TEST 1");

  const handleSectionClick = (title: string) => {
    setActiveSection((prev) => (prev === title ? null : title));
  };

  return (
    <aside className="sidebar h-[78.5vh] w-[25vw] bg-white border-r shadow-sm border-gray-300 flex flex-col justify-start items-center py-16">
      {sideBarItems.map((item) => (
        <Section
          key={item.title}
          item={item}
          isActive={activeSection === item.title}
          onClick={handleSectionClick}
        />
      ))}
      <button className="px-6 py-4 border shadow-sm poppins-semibold text-[#0047AB] border-[#0047AB] hover:cursor-pointer rounded-lg flex items-center gap-2">
        Download Report Card
        <FiDownload />
      </button>
    </aside>
  );
};

export default Sidebar;
