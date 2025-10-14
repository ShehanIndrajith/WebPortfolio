import React from 'react'
import {EDUCATION} from '../constants';
import { motion } from "framer-motion";
import { EducationCard } from "./EducationCard";
export function Education() {
  return (
    <section className="max-w-5xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="inline-block relative">
            Education
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.3, duration: 0.5 }}
            ></motion.span>
          </span>
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">
          My academic journey that shaped my development skills and knowledge
        </p>
      </motion.div>

      {/* Timeline Line */}
      <div className="relative">
        <motion.div
          className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.5 }}
        />

        {/* Education Cards */}
        <div className="space-y-12">
          {EDUCATION.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
            >
              <EducationCard {...item} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Closing Note */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.p
          className="text-slate-400"
          whileHover={{ scale: 1.05 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-colors">
            Always learning, always growing
          </span>
        </motion.p>
      </motion.div>
    </section>
  );
}
