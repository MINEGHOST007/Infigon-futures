"use client";
import React from "react";
import { sideBarItems, SideBarItem } from "@/constants/sidebar";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

interface SectionProps {
  item: SideBarItem;
  isActive: boolean;
  onClick: (title: string) => void;
}

const Section: React.FC<SectionProps> = ({ item, isActive, onClick }) => {
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-start flex-col items-start px-4 md:px-6 lg:px-12 transition-all">
      <div
        onClick={() => onClick(item.title)}
        className={`hover:cursor-pointer flex items-center gap-3 rounded-lg w-full max-w-[300px] my-3 px-3 py-3 transition-all duration-300 ${
          isActive
            ? "border-r-4 shadow-[0_4px_12px_rgba(0,0,0,0.12)]"
            : "hover:bg-gray-50"
        }`}
        style={{
          borderColor: isActive ? item.color : "transparent",
        }}
      >
        <div className="flex-shrink-0">
          <Image
            alt={`${item.title} icon`}
            src={item.icon}
            width={32}
            height={32}
          />
        </div>
        <div className="overflow-hidden">
          <h3 className="text-[#666B72] font-medium text-sm md:text-base truncate">
            {item.title}
          </h3>
          {item.subheading && (
            <h4
              className="poppins-medium text-xs md:text-sm truncate"
              style={{ color: item.color }}
            >
              {item.subheading}
            </h4>
          )}
        </div>
      </div>
      {isActive && item.subroutes && (
        <ul className="flex flex-col gap-2 px-4 w-full max-w-[280px] mb-2">
          {item.subroutes.map((route) => (
            <li
              key={route.name}
              className={`text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded px-2 py-1.5 transition-colors ${
                pathname === route.path ? "font-bold" : ""
              }`}
            >
              <a href={route.path || "#"} className="block">
                {route.name}
              </a>
            </li>
          ))}
        </ul>
      )}
      <div className="border-t border-gray-200 w-full my-2"></div>
    </div>
  );
};

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const handleSectionClick = (title: string) => {
    const selectedItem = sideBarItems.find((item) => item.title === title);
    if (selectedItem) {
      const firstSubroute = selectedItem.subroutes[0]?.path;
      if (firstSubroute) {
        router.push(firstSubroute);
      }
    }
  };

  return (
    <aside className="sidebar h-auto max-w-full min-w-[25vw] bg-white border-r shadow-sm border-gray-300 flex flex-col justify-start items-center py-6 md:py-8 lg:py-12 overflow-y-auto">
      <div className="w-full space-y-1">
        {sideBarItems.map((item) => (
          <Section
            key={item.title}
            item={item}
            isActive={pathname.includes(item.key)}
            onClick={handleSectionClick}
          />
        ))}
      </div>
      <div className="pt-4 px-4 w-full flex justify-center">
        <button className="px-4 py-3 border shadow-sm poppins-semibold text-sm text-[#0047AB] border-[#0047AB] hover:bg-[#f0f5ff] hover:cursor-pointer rounded-lg flex items-center justify-center gap-3 w-full max-w-[240px] transition-colors">
          <span>Download Report Card</span>
          <FiDownload />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
