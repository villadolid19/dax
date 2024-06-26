import React from "react";
import "./style.css";
import { Link } from "react-scroll";

const Footer = () => {

  return (
    <section id="About" className="flex flex-col p-4 gap-4 justify-center">
      <dvi className="flex flex-row justify-center">
        <ul className="hidden sm:flex sm:flex-row sm:justify-center">
          <li className="w-full text-center text-xl">
            <Link
              to="Profile"
              className="list p-3 block m-4 text-gray-600 font-bold hover:underline hover:cursor-pointer hover:opacity-75"
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
            >
              Profile
            </Link>
          </li>

          <li className="w-full text-center text-xl">
            <Link
              to="About"
              className="list p-3 block m-4 text-gray-600 font-bold hover:underline hover:cursor-pointer hover:opacity-75"
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
            >
              About
            </Link>
          </li>

          <li className="w-full text-center text-xl">
            <Link
              to="Exp"
              className="list p-3 block m-4 text-gray-600 font-bold hover:underline hover:cursor-pointer hover:opacity-75"
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
            >
              Experience
            </Link>
          </li>

          <li className="w-full text-center text-xl">
            <Link
              to="Projects"
              className="list p-3 block m-4 text-gray-600 font-bold hover:underline hover:cursor-pointer hover:opacity-75"
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
              to="Contact"
              className="list p-3 block m-4 text-gray-600 font-bold hover:underline hover:cursor-pointer hover:opacity-75"
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
            >
              Contact
            </Link>
          </li>
        </ul>
      </dvi>
      <p className="text-center mb-14">
        Copyright &#169; 2024 3D Villadolid. All Rights Reserved.
      </p>
    </section>
  );
};

export default Footer;