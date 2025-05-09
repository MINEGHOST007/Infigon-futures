"use client";
import React, { useState } from "react";
import { FaBell, FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Infigon, Profile } from "@/assets";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white flex items-center justify-between px-6 py-4 shadow-sm border-b border-gray-200">
        <div className="flex items-center">
          <div className="flex items-center">
            <Image
              src={Infigon}
              alt="Company Logo"
              className="hover:cursor-pointer h-8 ml-4 my-2 mr-4"
            />
          </div>
          <div className="hidden md:flex space-x-2">
            <NavLink>Home</NavLink>
            <NavLink>My Tests</NavLink>
            <NavLink>My Sessions</NavLink>
            <NavLink>Career Library</NavLink>
            <NavLink active route="/your-report/test1">
              Your Report
            </NavLink>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-gray-600 hover:cursor-pointer">
            <FaBell size={20} />
          </button>
          <button
            className="md:hidden text-gray-600 hover:text-gray-800 hover:cursor-pointer"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
          <button className="flex items-center justify-around gap-1">
            <Image
              src={Profile}
              alt="Profile"
              className="h-8 w-8 rounded-full hover:cursor-pointer"
            />
            <IoIosArrowDown
              className="text-gray-400 hover:cursor-pointer"
              size={16}
            />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="bg-white border-b border-gray-200 md:hidden px-6 py-4">
          <div className="flex flex-col space-y-2">
            <NavLink>Home</NavLink>
            <NavLink>My Tests</NavLink>
            <NavLink>My Sessions</NavLink>
            <NavLink>Career Library</NavLink>
            <NavLink active route="/your-report/test1">
              Your Report
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};
const NavLink = ({
  children,
  active,
  route = "#",
}: {
  children: React.ReactNode;
  active?: boolean;
  route?: string;
}) => {
  return (
    <Link
      href={route}
      className={`text-sm poppins-medium px-4 py-2 ${
        active
          ? "bg-[#F9FAFB] rounded-lg"
          : "text-[#5B6871] hover:poppins-semibold hover:bg-[#F9FAFB] hover:rounded-lg"
      }`}
    >
      {children}
    </Link>
  );
};
