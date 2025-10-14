import React from "react";
import {PROJECTS} from '../constants';
import projpic from "../assets/about.jpg";
import { motion } from "framer-motion";
import { CodeIcon } from 'lucide-react'
import { GithubIcon } from 'lucide-react'


const Projects = () => {
  return (
    <div className="border-b border-neutral-800 px-8 pb-24">
      <div className="my-16">
      <div className="py-2 flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-2 sm:space-y-0 text-center">
  <CodeIcon className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-400" />
  
  <h2 className="text-2xl sm:text-4xl text-white relative inline-block">
    My Projects
    <motion.span
      className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500"
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{ delay: 0.3, duration: 0.5 }}
    ></motion.span>
  </h2>
</div>


<h4 className="mt-2 text-center text-base sm:text-lg text-gray-400 px-4 sm:px-6 leading-relaxed">
  Showcasing my latest work and development projects
</h4>
</div>
      <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }} viewport={{ once: true }} className="flex flex-row flex-wrap justify-center">
        {PROJECTS.map((projects, index) => (
          <motion.div whileHover={{y: -8}} key={index} className="flex flex-col sm:mr-0 md:mr-6 lg:mr-6 mb-6 max-w-sm h-fit backdrop-blur-sm bg-white/5 border-gray-200 rounded-lg shadow backdrop-blur-sm dark:border-gray-700">
          <div className="flex h-56">
            <img className="object-cover rounded-t-lg" src={projects.image} alt="" />
          </div>
          <div className="p-5">
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {projects.title}
              </h5>
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {projects.description}
            </p>
            
            <div className='flex flex-wrap mb-2'>
            {projects.technologies.map((tech , index) => (
              <span key={index} className={`rounded text-sm bg-gradient-to-r ${projects.color} mr-2 mb-2 py-1 px-2`}>{tech}</span>
            ))}
              
            </div>
            <motion.a
            href={projects.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${projects.color} text-white text-sm font-medium transition-transform`}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <GithubIcon className="w-4 h-4" />
            View on GitHub
          </motion.a>
            {/* <GithubIcon className="w-4 h-4" />
            <a
              href={projects.github}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View on Github
              
            </a> */}
          </div>
        </motion.div>
        ))}
        

        
      </motion.div>
    </div>
  );
};

export default Projects;
