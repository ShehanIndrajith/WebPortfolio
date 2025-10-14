import React from "react";
import {CERTIFICATES} from "../constants"
import { Badge } from './Badge'
import { motion } from "framer-motion";
import { Award } from 'lucide-react';

function Certifications() {
  return (
    <div className=" border-neutral-800 pb-8">
      <div className="my-20 ">
       <div className="mb-4 flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-2 sm:space-y-0 text-center">
  <Award className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400" />
  
  <h2 className="text-2xl sm:text-4xl text-white relative inline-block">
    Certifications & Badges
    <motion.span
      className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-500"
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{ delay: 0.3, duration: 0.5 }}
    ></motion.span>
  </h2>
</div>

<h4 className="text-center text-base sm:text-lg text-gray-400 px-4 sm:px-6 leading-relaxed">
  Professional certifications and achievements that validate my expertise
</h4>

      </div>
      <motion.div
  initial={{ y: 30, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
  viewport={{ once: true }}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 justify-items-center"
>
  {CERTIFICATES.map((cert, index) => (
    <div
      key={index}
      className="w-full sm:w-80 md:w-96 flex justify-center"
    >
      <Badge
        name={cert.title}
        issuer={cert.institute}
        date={cert.date}
        icon={cert.image}
        color="from-purple-500 to-pink-500"
        skills={cert.skills}
        link={cert.link}
      />
    </div>
  ))}
</motion.div>


    </div>
  );
}

export default Certifications;
