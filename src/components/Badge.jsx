import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircleIcon } from 'lucide-react'

export function Badge({ name, issuer, date, icon, color, skills, link }) {
  return (
    <motion.div
      className="rounded-xl overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700 h-full"
      whileHover={{
        y: -5,
        boxShadow:
          '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
      }}
    >
      <div className={`p-1 bg-gradient-to-r ${color}`}>
        <div className="bg-slate-800 px-4 py-2 rounded-t-lg flex items-center justify-between">
          <span className="text-sm font-medium">{date}</span>
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
            }}
            className="flex items-center gap-1"
          >
            <CheckCircleIcon className="w-4 h-4 text-green-400" />
            <span className="text-xs text-green-400">Verified</span>
          </motion.div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <motion.div
            whileHover={{
              rotate: 10,
            }}
            className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-white p-1"
          >
            <img
              src={icon}
              alt={`${name} badge`}
              className="w-full h-full object-contain"
            />
          </motion.div>

          <div>
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="font-bold text-lg mb-1 leading-tight hover:underline text-white"
  >
    {name}
  </a>
  <p className="text-slate-300 text-sm">{issuer}</p>
</div>

        </div>

        <div>
          <h4 className="text-xs uppercase tracking-wider text-slate-400 mb-2">
            Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {skills &&
              skills.map((skill, index) => (
                <span
                  key={index}
                  className={`inline-block px-2 py-1 text-xs rounded-md bg-gradient-to-r ${color} bg-opacity-20 text-white`}
                >
                  {skill}
                </span>
              ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
