import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Navbar from "./Components/Pages/Navbar";
import About from "./Components/Pages/About";
import Profile from "./Components/Pages/Profile";
import Footer from "./Components/Pages/Footer";
import Experience from "./Components/Pages/Experience";
import Projects from "./Components/Pages/Projects";
import Contact from "./Components/Pages/Contact";
import "./index.css";

const App = () => {

  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <motion.section
      style={y}
      className="absolute top-0 right-0 h-full w-screen z-[1] items-center justify-center"
    >
      <div>
        <Navbar />
      </div>

      <div className="mt-[50px]">
        <Profile />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </motion.section>
  );
};

export default App;
