import React, { useState, useRef, useEffect } from "react";
//import {Navbar}  from "./components/Navbar"
import { Link, Element } from 'react-scroll';
import Hero from "./components/Hero";
import About from "./components/About";
//import Badges from "./components/Badges";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Overveiw from "./components/overveiw";
import Certifications from "./components/Certifications";
import Contact from "./components/Contactme";
import Social from "./components/socialapps";
import Navpanel from "./components/navpanel";
import Gallery from "./components/gallery";
import { LoadingIntro } from "./components/LoadingIntro";
import { motion, AnimatePresence } from "framer-motion";

import { FiArrowUp } from "react-icons/fi";



//import StarryBackground from './components/StarryBackground';
//import InteractiveSpider from "./components/InteractiveSpider";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const certificationsRef = useRef(null);
  const [active, setActive] = useState("");

  const scrollToSection = (ref, sectionName) => {
    setActive(sectionName);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sections = [
      { ref: aboutRef, name: "About" },
      { ref: experienceRef, name: "Experience" },
      { ref: educationRef, name: "Education" },
      { ref: projectsRef, name: "Projects" },
      { ref: certificationsRef, name: "Certifications" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.dataset.name);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        section.ref.current.dataset.name = section.name;
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) observer.unobserve(section.ref.current);
      });
    };
  }, []);

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
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingIntro onComplete={() => setIsLoading(false)} />
        ) : (
          <>
            {/* Background */}
            <div className="fixed top-0 -z-50 h-full w-full">
              <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
            </div>

            {/* Navigation Bar */}
            <div className="fixed flex flex-wrap w-full flex-row justify-center items-start z-50">
              <div className="hidden md:flex">
                <Navpanel
                  scrollToSection={scrollToSection}
                  refs={{
                    aboutRef,
                    experienceRef,
                    educationRef,
                    projectsRef,
                    certificationsRef,
                  }}
                  active={active}
                />
              </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col mx-auto pt-16 lg:pt-40">
              <Hero />
              <div ref={aboutRef}>
                <About />
              </div>
              <Skills />
              <div ref={experienceRef}>
                <Experience />
              </div>
              <div ref={educationRef}>
                <Education />
              </div>
              <div ref={projectsRef}>
                <Projects />
              </div>
              <Overveiw />
              <div ref={certificationsRef}>
                <Certifications />
              </div>
              <Gallery />
              <Element name="contactMeSection">
                <Contact />
              </Element>
            </div>

            {/* Scroll Progress */}
            <motion.div
              whileHover={{ y: -8 }}
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 1, opacity: 1 }}
              exit={{ x: 20, duration: 5 }}
              id="progress"
            >
              <span id="progress-value">
                <FiArrowUp className="size-8" />
              </span>
            </motion.div>

            {/* Social Links */}
            <div className="fixed left-2 top-1/4 transform -translate-y-1/2">
              <Social />
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

