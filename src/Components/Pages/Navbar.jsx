import React, { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import {Link} from 'react-scroll';
import "./Navbar.css";


const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <nav className="bg-white fixed flex flex-col justify-between h-auto w-full rounded-lg shadow-xl z-[1000] lg:backdrop-blur-sm lg:overflow-hidden lg:flex-row">
      <div className="flex ml-4 md:ml-12 p-3 rounded-[15px] lg:ml-28">
        <h1 className="font-bold text-xl text-slate-700">Denzel</h1>
      </div>

      <div className="lg:hidden relative">
        <div
          className={`absolute top-0 right-0 h-4/5 w-[220px] rounded-lg transition-transform transform duration-300 ${
            click ? "translate-x-0" : "translate-x-[300px]"
          }`}
        >
          <ul className="flex flex-col gap-6 items-center p-4 shadow-md bg-white rounded-lg">
            <li className="w-full text-center text-xl">
              <Link
                id="Link"
                to="Profile"
                className="text-gray-600 font-semibold"
                onClick={closeMenu}
                spy={true}
                smooth={true}
                offset={-50}
                duration={600}
                activeClass="active"
              >
                Profile
              </Link>
            </li>

            <li className="w-full text-center text-xl">
              <Link
                id="Link"
                to="About"
                className="text-gray-600 font-semibold"
                onClick={closeMenu}
                spy={true}
                smooth={true}
                offset={0}
                duration={600}
                activeClass="active"
              >
                About
              </Link>
            </li>
            <li className="w-full text-center text-xl">
              <Link
                id="Link"
                to="Experience"
                className="text-gray-600 font-semibold"
                onClick={closeMenu}
                spy={true}
                smooth={true}
                offset={0}
                duration={600}
                activeClass="active"
              >
                Experience
              </Link>
            </li>
            <li className="w-full text-center text-xl">
              <Link
                id="Link"
                to="Projects"
                className="text-gray-600 font-semibold"
                onClick={closeMenu}
                spy={true}
                smooth={true}
                offset={0}
                duration={600}
                activeClass="active"
              >
                Projects
              </Link>
            </li>
            <li className="w-full text-center text-xl">
              <Link
                id="Link"
                to="Contact"
                className="text-gray-600 font-semibold"
                onClick={closeMenu}
                spy={true}
                smooth={true}
                offset={0}
                duration={600}
                activeClass="active"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden lg:flex items-center mr-40 rounded-[15px] lg:w-auto">
        <ul className="flex gap-10">
          <li className="w-full text-center text-xl">
            <Link
              id="Link"
              to="Profile"
              className="text-gray-600 font-semibold"
              spy={true}
              smooth={true}
              offset={-50}
              duration={600}
              activeClass="active"
            >
              Profile
            </Link>
          </li>
          <li className="w-full text-center text-xl">
            <Link
              id="Link"
              to="About"
              className="text-gray-600 font-semibold"
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
              activeClass="active"
            >
              About
            </Link>
          </li>
          <li className="w-full text-center text-xl">
            <Link
              id="Link"
              to="Experience"
              className="text-gray-600 font-semibold"
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
              activeClass="active"
            >
              Experience
            </Link>
          </li>
          <li className="w-full text-center text-xl">
            <Link
              id="Link"
              to="Projects"
              className="text-gray-600 font-semibold"
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
              activeClass="active"
            >
              Projects
            </Link>
          </li>
          <li className="w-full text-center text-xl">
            <Link
              id="Link"
              to="Contact"
              className="text-gray-600 font-semibold"
              onClick={closeMenu}
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
              activeClass="active"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div
        className="absolute top-3 right-4 mr-6 text-slate-700 lg:hidden"
        onClick={handleClick}
      >
        {click ? (
          <LiaTimesSolid size={30} />
        ) : (
          <div className="flex flex-col m-0 p-0 gap-[1.5px]">
            <div className="flex flex-row gap-[1.5px]">
              <div className="border-2 border-slate-700 w-3 h-3 rounded-[2px] rounded-tl-[4px] rounded-br-[4px]"></div>
              <div className="border-2 border-slate-700 w-3 h-3 rounded-[2px] rounded-tl-[4px] rounded-br-[4px]"></div>
            </div>
            <div className="flex flex-row gap-[1.5px]">
              <div className="border-2 border-slate-700 w-3 h-3 rounded-[2px] rounded-tl-[4px] rounded-br-[4px]"></div>
              <div className="border-2 border-slate-700 w-3 h-3 rounded-[2px] rounded-tl-[4px] rounded-br-[4px]"></div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
