import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky bg-black text-white px-4 md:px-16 lg:px-24 z-50">
      <div className="container mx-auto py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Aritra-Mahattam</div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl focus:outline-none">
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`flex-col md:flex-row md:flex items-center space-y-6 md:space-y-0 md:space-x-6 absolute md:static top-20 left-0 w-full md:w-auto bg-black md:bg-transparent px-6 py-4 md:p-0 transition-all duration-300 ${menuOpen ? 'flex' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <li>
              <NavLink to="/" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutme" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Button */}
          <button
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full mt-4 md:mt-0"
            onClick={() => {
              window.open('/contact');
            }}
          >
            Connect Me
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
