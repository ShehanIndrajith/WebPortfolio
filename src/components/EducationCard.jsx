import React from "react";
import { motion } from "framer-motion";

export function EducationCard({
  degree,
  institution,
  duration,
  icon,
  color,
}) {
    const Icon = icon;
  return (
    
    <motion.div
      className="relative pl-8 sm:pl-12"
      whileHover={{
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
    >
      {/* Timeline dot */}
      <motion.div
        className={`absolute left-0 sm:left-0 p-2 rounded-full bg-gradient-to-r ${color} shadow-lg`}
        whileHover={{
          scale: 1.2,
        }}
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
        }}
      >
        <div className="w-3 h-3 bg-white rounded-full" />
      </motion.div>

      {/* Content card */}
      <div className="relative">
        {/* Time period badge */}
        <motion.div
          className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${color} text-white font-medium text-sm mb-4 shadow-lg`}
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
        >
          {duration}
        </motion.div>

        <div className="rounded-xl overflow-hidden bg-slate-800/70 backdrop-blur-sm border border-slate-700 shadow-xl">
          <div className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <motion.div
                whileHover={{
                  rotate: 10,
                }}
                className={`w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-r ${color} flex items-center justify-center shadow-lg`}
              >
                <Icon className="w-6 h-6 text-white" />
              </motion.div>

              <div>
                <h3 className="font-bold text-xl mb-1 text-white">{degree}</h3>
                <p className="text-slate-300 text-lg font-medium">
                  {institution}
                </p>
              </div>
            </div>


            
          </div>
        </div>
      </div>
    </motion.div>
  );
}
