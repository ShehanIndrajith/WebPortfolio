import React from 'react'
import {EDUCATION} from '../constants';
import { motion } from "framer-motion";

const Education = () => {

    
  return (
    <div className='flex flex-col justify-center border-b bg-gradient-to-r from-indigo-600 to-violet border-neutral-800 pb-48'>
        <h2 className='my-20 text-center text-white text-4xl'>Education</h2>
        <div className='flex flex-col justify-center'>
            {EDUCATION.map((education, index) => (
                <div key={index} className='mb-6 flex flex-wrap lg:justify-center'>
                    <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }} viewport={{ once: true }} className='pl-16 lg:pl-28 w-full lg:w-1/4'>
                        <p className='mb-2 text-md text-neutral-300'>{education.year}</p>
                    </motion.div>
                    <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }} viewport={{ once: true }} className='pl-16 lg:pl-28 w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 text-lg font-semibold text-white'>
                            {education.Course}
                        </h6>
                        <span className='text-white text-md'>
                                {education.institute}
                            </span>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Education