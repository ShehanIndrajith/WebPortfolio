import React from "react";
import logo from "../assets/shehanlogo.png";
import { motion } from "framer-motion";

export const Navbar = () => {
  const handleClick = (url) => {
    // Open the URL in a new tab
    window.open(url, "_blank");
  };

  return (
    <nav className="backdrop-blur-xl py-4 mb-20 flex items-center justify-between">
      <div className="flex flex-shrink-0 basis-1/2 items-center">
        <img className="mx-8 w-28" src={logo} alt="logo" />
      </div>

      <div className="basis-1/2 mx-8 flex items-center justify-end text-2xl">
        <div className="flex flex-row w-full justify-center">
          <div className='basis-1/5 flex flex-row justify-center'>
            <a className="cursor-pointer text-[16px] font-normal hover:font-semibold">
              About
            </a>
          </div>
          <div className='basis-1/5 flex flex-row justify-center'>
            <a className="cursor-pointer text-[16px] font-normal hover:font-semibold">
              Education
            </a>
          </div>
          <div className='basis-1/5 flex flex-row justify-center'>
            <a className="cursor-pointer text-[16px] font-normal hover:font-semibold">
              Education
            </a>
          </div>
          <div className='basis-1/5 flex flex-row justify-center'>
            <a className="cursor-pointer text-[16px] font-normal hover:font-semibold">
              Projects
            </a>
          </div>
          <div className='basis-1/5 flex flex-row justify-center'>
            <a className="cursor-pointer text-[16px] font-normal hover:font-semibold">
              Certifications
            </a>
          </div>
          <div className='basis-1/5 flex flex-row justify-center'>
            <a className="cursor-pointer text-[16px] font-normal hover:font-semibold">
              Contact
            </a>
          </div>
        </div>
        <div className='flex flex-row items-center justify-center'>
        <motion.a
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
          href="public\resume.pdf"
          download="Shehan_Indrajith_Resume.pdf"
          className="text-white hover:text-white border border-white hover:border-indigo-600 hover:bg-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Resume
        </motion.a>
        </div>
        
      </div>
    </nav>
  );
};
