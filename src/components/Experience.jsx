import React from 'react'
import {EXPERIENCE} from '../constants';
import { motion } from "framer-motion";

const Experience = () => {

    
  return (
    <div className="flex flex-col justify-center border-b border-neutral-800 pb-12 px-2 sm:px-6 lg:px-36">
  {/* Section Title */}
  <h2 className="my-12 sm:my-20 text-center text-white text-3xl sm:text-4xl">Experience</h2>

  {/* Experience List */}
  <div className="flex flex-col gap-10 sm:gap-16 items-center bg-white/5 backdrop-blur-sm py-6 sm:py-10 px-2 sm:px-6 rounded-lg w-full">
    {EXPERIENCE.map((experience, index) => (
      <motion.div
        key={index}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-center gap-6 lg:gap-16 w-full max-w-4xl"
      >
        {/* Left: Logo */}
        <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-center">
          <img
            className="rounded-lg shadow-lg w-full h-full object-contain bg-white p-2"
            src={experience.logo}
            alt={experience.Company}
          />
        </div>

        {/* Right: Details */}
        <div className="flex flex-col text-center lg:text-left text-white text-neutral-300 max-w-2xl">
          <p className="text-sm text-cyan-400">{experience.year}</p>
          <p className="text-lg sm:text-xl font-bold mt-1">{experience.Job}</p>
          <p className="text-base mt-1">{experience.Company}</p>
          <p className="text-sm text-neutral-400 mt-1">Type: {experience.type}</p>
          <p className="mt-2 sm:mt-3 text-neutral-400 text-justify leading-relaxed">
            {experience.details}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</div>

  )
}

export default Experience