import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-between items-center text-[#F1F0E8] h-24 px-4 z-50 ${
        scroll
          ? 'bg-[#131010] bg-opacity-90 shadow-md transition-all duration-300'
          : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <Link to="/" className="mr-auto">
        <img
          src={Logo}
          alt="Orchestra Logo"
          className="h-[250px] md:h-[250px] object-contain cursor-pointer"
        />
      </Link>

      {/* Navbar Links */}
      <ul className="hidden md:flex space-x-6 mr-10">
        <li className="group relative p-4">
          <Link to="/" className="hover:text-gray-300">HOME</Link>
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#F1F0E8] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group relative p-4">
          <Link to="/orkestra" className="hover:text-gray-300">ORKESTRA</Link>
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#F1F0E8] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group relative p-4">
          <Link to="/konser" className="hover:text-gray-300">KONSER</Link>
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#F1F0E8] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group relative p-4">
          <Link to="/berita" className="hover:text-gray-300">BERITA</Link>
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#F1F0E8] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group relative p-4">
          <Link to="/kontak" className="hover:text-gray-300">KONTAK</Link>
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#F1F0E8] transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* Sidebar untuk Mobile */}
      <div
        className={`fixed left-0 top-0 w-[60%] h-full border-r border-gray-900 bg-[#131010] ease-in-out duration-500 ${
          nav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Link to="/" onClick={handleNav}>
          <img
            src={Logo}
            alt="Orchestra Logo"
            className="h-[250px] mx-5 my-5 object-contain"
          />
        </Link>
        <ul className="uppercase p-5">
          <li className="p-4 border-b border-gray-600">
            <Link to="/" onClick={handleNav}>
              HOME
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/orkestra" onClick={handleNav}>
              ORKESTRA
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/konser" onClick={handleNav}>
              KONSER
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/berita" onClick={handleNav}>
              BERITA
            </Link>
          </li>
          <li className="p-4">
            <Link to="/kontak" onClick={handleNav}>
              KONTAK
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
