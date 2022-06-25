import React, { useEffect } from "react";

import AOS from "aos";

import { Cursor } from "./Components/Cursor/Cursor";
import { Navbar } from "./Components/Navbar/Navbar";
import { Landing } from "./Components/Landing/Landing";
import { AboutMe } from "./Components/AboutMe/AboutMe";
import { TechIKnow } from "./Components/TechIKnow/TechIKnow";
import { Experience } from "./Components/Experience/Experience";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";

import "aos/dist/aos.css";
import "./antd.css";
import "./App.less";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Cursor />
      <Navbar />
      <Landing />
      <AboutMe />
      <TechIKnow />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
