import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { RiDownload2Line } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItemClassName =
    'text-white font-medium lg:text-lg text-sm transition duration-300 hover:text-purple-400 text-shadow-lg';

  const navItems = (
    <>
      <li className={navItemClassName}>
        <NavLink to="/">Home</NavLink>
      </li>
      <li className={navItemClassName}>
        <NavLink to="/about-me">About Me</NavLink>
      </li>
      <li className={navItemClassName}>
        <NavLink to="/skills">Skills</NavLink>
      </li>
      <li className={navItemClassName}>
        <NavLink to="/my-projects">My Projects</NavLink>
      </li>
      <li className={navItemClassName}>
        <NavLink to="/contact">Contact Me</NavLink>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#422679] via-indigo-800/40 to-[#2e1463] backdrop-blur-md shadow-md md:py-4 py-3 overflow-hidden border-b border-purple-600">
      <nav className="flex justify-between items-center w-11/12 mx-auto">
        {/* Logo */}
        <div>
          <Link
            to="/"
            className="md:text-2xl text-base font-extrabold bg-gradient-to-r from-purple-400 via-[#8269b5] to-[#3f217a] bg-clip-text text-transparent cursor-pointer hover:text-purple-800"
          >
            Tasmina
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex lg:space-x-6 space-x-4">{navItems}</ul>

        {/* CV Download & Toggle Button */}
        <div className="flex gap-2 md:gap-4 items-center">
          {/* ✅ Corrected to <a> tag */}
          <Link
            href="/resume.pdf"
            download
            className="download flex gap-2 items-center cursor-pointer text-shadow-md lg:text-lg text-xs text-white bg-gradient-to-r from-[#4b3e6e] to-[#2b0e66] px-3 py-2 rounded-lg hover:bg-purple-800 transition duration-300"
          >
            <RiDownload2Line className="lg:text-2xl text-md text-xs" />
            Download CV
          </Link>

          {/* Toggle Button for Mobile */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            type="button"
          >
            {isOpen ? (
              <IoClose
                size={30}
                className="border border-purple-600 text-white p-1 rounded-md transition duration-300"
              />
            ) : (
              <FaBars
                size={30}
                className="border border-purple-600 text-white p-1 rounded-md transition duration-300"
              />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-purple-800 mt-2 w-full flex flex-col gap-y-3 py-4 px-6 list-none">
          {navItems}
        </div>
      )}
    </header>
  );
}
