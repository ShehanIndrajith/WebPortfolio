import React from 'react'
import { motion } from 'framer-motion'
import { CalendarIcon, MapPinIcon } from 'lucide-react'

export function ExperienceCard({ experience, isEven }) {
  const {
    company,
    position,
    logo,
    type,
    description,
    startDate,
    endDate,
    color,
  } = experience

  const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case 'remote':
        return 'bg-blue-500 text-blue-50'
      case 'hybrid':
        return 'bg-purple-500 text-purple-50'
      case 'on site':
        return 'bg-amber-500 text-amber-50'
      default:
        return 'bg-slate-500 text-slate-50'
    }
  }

  const typeColor = getTypeColor(type)

  return (
    <motion.div
      className="rounded-xl overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700"
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
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-medium text-slate-300">
              {startDate} — {endDate}
            </span>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`px-2 py-1 rounded-full text-xs font-medium ${typeColor}`}
          >
            <div className="flex items-center gap-1">
              <MapPinIcon className="w-3 h-3" />
              {type}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <motion.div
            whileHover={{ rotate: 10 }}
            className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-white p-2 flex items-center justify-center"
          >
            <img
              src={logo}
              alt={`${company} logo`}
              className="w-full h-full object-contain"
            />
          </motion.div>

          <div>
            <h3 className="font-bold text-xl mb-1 text-white">{position}</h3>
            <p className="text-blue-400 font-medium">{company}</p>
          </div>
        </div>

        <p className="text-slate-300 text-sm">{description}</p>

      </div>
    </motion.div>
  )
}
