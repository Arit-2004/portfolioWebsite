import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className= ' sticky bg-black text-white px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto py-4 flex justify-between items-center'>
        {/* Logo */}
        <div className='text-2xl font-bold'>Aritra-Mahattam</div>

        {/* Navigation Links */}
        <div className='flex items-center space-x-6'>
          <ul className='flex space-x-6'>
            <li>
              <NavLink to="/" className="hover:text-gray-400">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutme" className="hover:text-gray-400">
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-gray-400">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="hover:text-gray-400">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-gray-400">
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Button */}
          <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full hidden md:inline'
          onClick={()=>window.open('/contact')}>
            Connect Me
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
