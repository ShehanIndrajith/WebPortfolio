import React from 'react'
import {EXPERIENCE} from '../constants';
import { motion } from "framer-motion";
import { BriefcaseIcon } from 'lucide-react'
import { ExperienceCard } from './ExperienceCard'

export function Experience() {
  

  return (
    <section className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <BriefcaseIcon className="w-6 h-6 text-blue-400" />
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="inline-block relative">
              Professional Experience
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-500"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.3, duration: 0.5 }}
              ></motion.span>
            </span>
          </h2>
        </div>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">
          My journey through the tech industry and the roles that shaped my
          expertise
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block"></div>

        <div className="space-y-12">
          {EXPERIENCE.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-slate-800 border-4 border-blue-500 hidden md:block"></div>

              {/* Content */}
              <div className="md:w-1/2 md:px-10">
                <ExperienceCard
                  experience={experience}
                  isEven={index % 2 === 0}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
