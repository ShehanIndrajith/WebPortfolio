import React, { useRef } from "react";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Overveiw from "./components/overveiw";
import Certifications from "./components/Certifications";
import Contact from "./components/Contactme";
import Social from "./components/socialapps";

import { FiArrowUp } from "react-icons/fi";

//import StarryBackground from './components/StarryBackground';
import InteractiveSpider from "./components/InteractiveSpider";

function App() {
  let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let socilnet = document.getElementById("socilnet");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
      socilnet.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#4338ca ${scrollValue}%, #0A0A0A ${scrollValue}%)`;
  };

  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;

  

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-50 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          <InteractiveSpider />
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="fixed w-full z-50">
        <Navbar />
      </div>

      

      {/* Main Content */}
      <div className="container flex flex-col mx-auto pt-40">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Overveiw />
        <Certifications />
        <Contact />
        
      </div>
      <div className="fixed left-2 top-1/4 transform -translate-y-1/2">
          <Social />
        </div>

      {/* Scroll Progress */}
      <div id="progress">
        <span id="progress-value">
          <FiArrowUp className="size-8" />
        </span>
      </div>

      {/* Draggable Social Component */}
    </div>
  );
}

export default App;
