import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  // External links open in new tab using Link + window.open
  const openExternal = (url) => (e) => {
    e.preventDefault();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Aritra Mahattam</h3>
            <p className="text-gray-400">
              Aspiring Full-Stack Developer based in India, specializing in web and
              software development.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
                py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Aritra Mahattam. All rights reserved.
          </p>

          {/* Social Media Links (External using Link and window.open) */}
          <div className="flex space-x-4 my-4 md:my-0">
            <Link
              to="#"
              onClick={openExternal("https://www.facebook.com/aritra.mahattam.2025")}
              className="text-gray-400 hover:text-white"
            >
              <FaFacebook />
            </Link>
            <Link
              to="#"
              onClick={openExternal("https://x.com/2004Aritra")}
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter />
            </Link>
            <Link
              to="#"
              onClick={openExternal("https://www.linkedin.com/in/aritra-mahattam-b43369299/")}
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin />
            </Link>
            <Link
              to="#"
              onClick={openExternal("https://github.com/Arit-2004")}
              className="text-gray-400 hover:text-white"
            >
              <FaGithub />
            </Link>
          </div>

          {/* Internal Navigation Links */}
          <div className="flex space-x-4">
            <Link to="/privacy" className="text-gray-400 hover:text-white">
              Privacy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
