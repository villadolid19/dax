import React from 'react'
import "./style.css";
import Pic1 from "../Assets/Don1.jpg";
import git from "../Assets/github.png";
import Resume from "../Assets/Villadolid-Resume CV.pdf";
import { Link } from "react-scroll";

const Profile = () => {
  const openResume = () => {
    window.open(Resume, "_blank");
  };

  const openGit = () => {
    window.open("https://github.com/", "_blank");
  }; 

  return (
    <section
      id="Profile"
      className="flex-row-reverse h-auto w-screen justify-center items-center gap-20 mb-12 lg:flex lg:justify-center lg:items-center lg:h-auto"
    >
      <div className="flex justify-center items-center">
        <img
          src={Pic1}
          className="mt-24 rounded-full h-[250px] w-[250px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px]"
          alt="Denzel Villadolid"
        />
      </div>

      <div className="items-center self-center text-center font-semibold gap-6 mb-12">
        <p className="text-center text-xl text-slate-500 m-4">Hello, I'm</p>
        <h1 className="text-center text-4xl">Denzel Dax Darryl C. Villadolid</h1>
        <p className="text-2xl text-slate-600">A Front-end Developer</p>

        <div className="flex justify-center gap-3 mt-3">
          <button
            className="cursor-pointer p-2 w-36 rounded-3xl border-2 border-slate-400 hover:bg-slate-400 hover:border-black"
            onClick={openResume}
          >
            Download CV
          </button>
          <Link
            to="Contact"
            className="cursor-pointer p-2 w-36 rounded-3xl border-2 border-black bg-slate-400 text-black"
            spy={true}
            smooth={true}
            offset={0}
            duration={600}
          >
            Contact Info
          </Link>
        </div>

        <div className="flex justify-center mt-3 gap-3">
          <img
            src={git}
            className="h-7 w-7 cursor-pointer"
            alt="Git"
            onClick={openGit}
          />
        </div>
      </div>
    </section>
  );
}

export default Profile