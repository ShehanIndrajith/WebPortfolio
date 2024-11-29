import React from 'react'
import logo from "../assets/shehanlogo.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

export const Navbar = () => {
  const handleClick = (url) => {
    // Open the URL in a new tab
    window.open(url, '_blank');
  };

  return (
    <nav className="backdrop-blur-xl py-4 mb-20 flex items-center justify-between">
        <div className="flex flex-shrink-0 items-center">
            <img className='mx-8 w-28' src={logo} alt="logo"/>
        </div>
        
        <div className="mx-8 flex items-center justify-center gap-4 text-2xl">
            <a href="public\resume.pdf" download="Shehan_Indrajith_Resume.pdf" className="text-indigo-500 hover:text-white border border-indigo-500 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-indigo-700 dark:text-indigo-500 dark:hover:text-white dark:hover:bg-indigo-500 dark:focus:ring-indigo-800">Resume</a>
            <FaLinkedin className="mb-2 cursor-pointer transition-transform duration-200 hover:scale-110" 
            onClick={() => handleClick('https://www.linkedin.com/in/shehan-indrajith-47b512216/')}/>

            <FaGithub
            className="mb-2 cursor-pointer transition-transform duration-200 hover:scale-110" 
            onClick={() => handleClick('https://github.com/ShehanIndrajith')}
            />

            <FaFacebook
            className="mb-2 cursor-pointer transition-transform duration-200 hover:scale-110" 
            onClick={() => handleClick('https://www.facebook.com/profile.php?id=100090037665318')}
            />
        </div>
    </nav>
  );
};
