import React from 'react'

function navpanel({ scrollToSection, refs, active }) {
    const { aboutRef, educationRef, projectsRef, certificationsRef } = refs;
  return (
    <div className='flex flex-row flex-wrap rounded-full p-2 mt-2 w-[400px] h-12 bg-white/5 backdrop-blur-sm justify-center items-center space-x-2'>
      <div onClick={() => scrollToSection(aboutRef, "About")}className={`rounded-full items-center py-1 px-3 hover:bg-white/10 hover:cursor-pointer ${
          active === "About" ? "hover:bg-white bg-white text-black" : ""
        }`}>
        <a className=''>About</a>
      </div>
      <div onClick={() => scrollToSection(educationRef, "Education")} className={`rounded-full items-center py-1 px-3 hover:bg-white/10 hover:cursor-pointer ${
          active === "Education" ? "hover:bg-white bg-white text-black" : ""
        }`}>
        <a>Education</a>
      </div>
      <div onClick={() => scrollToSection(projectsRef, "Projects")} className={`rounded-full items-center py-1 px-3 hover:bg-white/10 hover:cursor-pointer ${
          active === "Projects" ? "hover:bg-white bg-white text-black" : ""
        }`}>
        <a>Projects</a>
      </div>
      <div onClick={() => scrollToSection(certificationsRef, "Certifications")} className={`rounded-full items-center py-1 px-3 hover:bg-white/10 hover:cursor-pointer ${
          active === "Certifications" ? "hover:bg-white bg-white text-black" : ""
        }`}>
        <a>Certifications</a>
      </div>
    </div>
  )
}

export default navpanel
