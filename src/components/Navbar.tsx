"use client"; // Add this at the very top

import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto py-8 px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-bold">Muhammad Annus</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex  gap-8 lg:gap-12 font-bold">
          <li className="hover:text-blue-400 transition">
            <a href="#hero">HOME</a>
          </li>
          <li className="hover:text-blue-400 transition">
            <a href="#about">ABOUT</a>
          </li>
          <li className="hover:text-blue-400 transition">
            <a href="#projects">PROJECTS</a>
          </li>
          <li className="hover:text-blue-400 transition">
            <a href="#skills">SKILLS</a>
          </li>
          <li className="hover:text-blue-400 transition">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isMenuOpen ? (
            <IoClose size={30} onClick={toggleMenu} className="cursor-pointer" />
          ) : (
            <IoMenu size={30} onClick={toggleMenu} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 py-4 px-6">
          <ul className="flex flex-col gap-4 font-semibold">
            <li>
              <a href="#hero" onClick={toggleMenu} className="hover:text-blue-400 transition">
                HOME
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu} className="hover:text-blue-400 transition">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu} className="hover:text-blue-400 transition">
                PROJECTS
              </a>
            </li>
            <li>
              <a href="#skills" onClick={toggleMenu} className="hover:text-blue-400 transition">
                SKILLS
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu} className="hover:text-blue-400 transition">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
