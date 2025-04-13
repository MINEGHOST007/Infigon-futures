"use client";
import React, { useState } from "react";
import { sideBarItems } from "@/constants/sidebar";
import Image from "next/image";

interface Subroute {
  name: string;
}

export interface SectionItem {
  title: string;
  icon: string;
  subheading?: string;
  color: string;
  subroutes?: Subroute[];
}

interface SectionProps {
  item: SectionItem;
  isActive: boolean;
  onClick: (title: string) => void;
}

const Section: React.FC<SectionProps> = ({ item, isActive, onClick }) => {
  return (
    <div className="w-full flex justify-start flex-col items-start pl-12">
      <div
        onClick={() => onClick(item.title)}
        className={`hover:cursor-pointer flex gap-2 rounded-lg w-[20vw] my-4 px-2 py-3 transition-all duration-300 ${
          isActive ? "border-r-4 shadow-md" : ""
        } text-[${item.color}]`}
      >
        <Image alt="sidebar-icon" src={item.icon} width={38} height={38} />
        <div>
          <h3 className="cursor-pointer text-[#666B72]">{item.title}</h3>
          {item.subheading && (
            <h4 className={`poppins-medium text-[${item.color}]`}>
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
    </div>
  );
};

const Sidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>("TEST 1");

  const handleSectionClick = (title: string) => {
    setActiveSection((prev) => (prev === title ? null : title));
  };

  return (
    <aside className="sidebar h-[78.5vh] w-[25vw] bg-white border-r shadow-sm border-gray-300 flex flex-col justify-start items-center gap-4 py-16">
      {sideBarItems.map((item) => (
        <Section
          key={item.title}
          item={item}
          isActive={activeSection === item.title}
          onClick={handleSectionClick}
        />
      ))}
      <button>

      </button>
    </aside>
  );
};

export default Sidebar;
