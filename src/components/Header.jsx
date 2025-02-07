import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { RiDownload2Line } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItemClass = 'text-white font-medium text-lg transition duration-300 hover:text-purple-600  '

  const navItems = (
    <>
       <li className={navItemClass}>
        <NavLink to="/" className={navItemClass}>
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
          <ul className="flex space-x-6 text-lg">{navItems}</ul>
        </div>

        {/* CV Download & Toggle Button */}
        <div className="flex gap-4 items-center">
          {/* Download Button */}
          <button className="flex items-center cursor-pointer gap-2 text-white bg-gradient-to-r from-purple-700 to-[#341B66] px-5 py-2 rounded-lg hover:bg-purple-800 transition duration-300">
            <RiDownload2Line className="text-2xl" />
            Download CV
          </button>

          {/* Toggle Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            type="button"
          >
            {isOpen ? (
              <AiFillCloseCircle size={30} className="text-white" />
            ) : (
              <FaBars size={30} className="text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="bg-purple-500 text-white w-full flex flex-col gap-y-3 py-4 px-6 md:hidden list-none">
          {navItems}
        </div>
      )}
    </header>
  );
}
