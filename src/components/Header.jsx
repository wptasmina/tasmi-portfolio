import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { RiDownload2Line } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItemClass = 'text-white font-medium lg:text-lg text-sm transition duration-300 hover:border-b-3 hover:border-purple-400 '

  const navItems = (
    <>
       <li className={navItemClass}>
        <NavLink to="/">
          Home
        </NavLink>
      </li>

      <li className={navItemClass}>
        <NavLink to="/about-me">About Me</NavLink>
      </li>

      <li className={navItemClass}>
        <NavLink to="/services"> Services</NavLink>
      </li>

      <li className={navItemClass}>
        <NavLink to="/experience"> Work Experience</NavLink>
      </li>

      <li className={navItemClass}>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </li>
      <li className={navItemClass}>
        <NavLink to="/skills">Skills</NavLink>
      </li>
      <li className={navItemClass}>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-black backdrop-blur-md shadow-md py-4">
      <nav className="flex justify-between items-center w-11/12 mx-auto">
        {/* Logo */}
        <div>
          <Link
            to="/"
            className="logo text-2xl font-extrabold bg-gradient-to-r from-purple-600 via-amber-400 to-[#3f217a] bg-clip-text text-transparent cursor-pointer"
          >
            Tasmina
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex lg:space-x-6 space-x-4 text-lg">{navItems}</ul>
        </div>

        {/* CV Download & Toggle Button */}
        <div className="flex gap-4 items-center">
          {/* Download Button */}
          <button className="flex items-center justify-center cursor-pointer lg:text-lg text-sm lg:gap-2 gap-1 text-white bg-gradient-to-r from-purple-700 to-[#341B66] px-3 py-2 rounded-lg hover:bg-purple-800 transition duration-300">
            <RiDownload2Line className="lg:text-2xl text-lg" />
            Download CV
          </button>

          {/* Toggle Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} type="button">
            {isOpen ? (
              <IoClose size={30} className="border border-purple-600 text-white p-1 rounded-md transition duration-300" />
            ) : (
              <FaBars size={30} className="border border-purple-600 text-white p-1 rounded-md transition duration-300" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="bg-purple-800 transition duration-300 mt-4 text-white w-full flex flex-col gap-y-3 py-4 px-6 md:hidden list-none">
          {navItems}
        </div>
      )}
    </header>
  );
}
