import React from "react";
import {PROJECTS} from '../constants';
import projpic from "../assets/about.jpg";

const Projects = () => {
  return (
    <div className="border-b border-neutral-800 px-8 pb-24">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div className="flex flex-row flex-wrap justify-center">
        {PROJECTS.map((projects, index) => (
          <div key={index} className="flex flex-col sm:mr-0 md:mr-6 lg:mr-6 mb-6 max-w-sm h-fit backdrop-blur-sm bg-white/5 border-gray-200 rounded-lg shadow backdrop-blur-sm dark:border-gray-700">
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
              <span key={index} className='rounded text-sm bg-indigo-700 mr-2 mb-2 py-1 px-2'>{tech}</span>
            ))}
              
            </div>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
        ))}
        

        
      </div>
    </div>
  );
};

export default Projects;
