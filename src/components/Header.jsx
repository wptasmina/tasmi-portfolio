import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { RiDownload2Line } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItemclassName = 'text-white font-medium lg:text-lg text-sm transition duration-300 hover:text-purple-400 text-shadow-lg'

  const navItems = (
    <>
       <li className={navItemclassName}>
        <NavLink to="/">
          Home
        </NavLink>
      </li>

      <li className={navItemclassName}>
        <NavLink to="/about-me">About Me</NavLink>
      </li>

      <li className={navItemclassName}>
        <NavLink to="/skills">Skills</NavLink>
      </li>
      <li className={navItemclassName}>
        <NavLink to="/my-projects">My Projects</NavLink>
      </li>
      <li className={navItemclassName}>
        <NavLink to="/contact">Contact Me</NavLink>
      </li>
    </>
  );

  return (
    <header className="sticky border top-0 z-50 bg-black backdrop-blur-md shadow-md py-4">
      <nav className="flex justify-between items-center w-11/12 mx-auto">
        {/* Logo */}
        <div>
          <Link
            to="/"
            className="logo md:text-2xl font-extrabold bg-gradient-to-r from-purple-400 via-[#8269b5] to-[#3f217a] bg-clip-text text-transparent cursor-pointer hover:text-purple-800"
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
          <button className="download cursor-pointer text-shadow-md lg:text-lg text-sm lg:gap-2 gap-1 text-white bg-gradient-to-r from-[#4b3e6e] to-[#2b0e66]  px-3 py-2 rounded-lg hover:bg-purple-800 transition duration-300">
          <a href="/resume.pdf" className='flex gap-2 cursor-pointer '>
                <RiDownload2Line className="lg:text-2xl text-md " />
                Download CV
            </a>
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
