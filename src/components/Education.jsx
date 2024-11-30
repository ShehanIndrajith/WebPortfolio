import React from 'react'
import {EDUCATION} from '../constants';
//import { motion } from "framer-motion";

const Education = () => {

    
  return (
    <div className='flex flex-col justify-center border-b bg-gradient-to-r from-indigo-600 to-violet border-neutral-800 pb-48'>
        <h2 className='my-20 text-center text-4xl'>Education</h2>
        <div className='flex flex-col justify-center'>
            {EDUCATION.map((education, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className='pl-28 w-full lg:w-1/4'>
                        <p className='mb-2 text-sm text-neutral-400'>{education.year}</p>
                    </div>
                    <div className='pl-28 w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>
                            {education.Course}
                        </h6>
                        <span className='text-sm text-neutral-400'>
                                {education.institute}
                            </span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Education