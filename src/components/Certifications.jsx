import React from "react";
import {CERTIFICATES} from "../constants"
import { motion } from "framer-motion";

function Certifications() {
  return (
    <div className=" border-neutral-800 pb-8">
      <h2 className="my-20 text-center text-4xl text-white">Certifications</h2>
      <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }} viewport={{ once: true }} className="flex flex-row flex-wrap justify-center px-6">
        {CERTIFICATES.map((certificates, index) => (
          <motion.div whileHover={{y: -8}} key={index} className="flex flex-col rounded-lg sm:max-w-full md:max-w-full lg:max-w-xl sm:mr-auto md:mr-auto lg:mr-6 mb-4 backdrop-blur-sm bg-white/5 hover:bg-glassindigo/20">
          <div>
            <img className="rounded-lg" src={certificates.image} />
          </div>
          <div className='px-4 my-4 space-y-2'>
            <div>
              <h5 className="text-2xl">{certificates.title}</h5> 
            </div>
            <div>
              <h5 className="text-xl">{certificates.institute}</h5>
            </div>
            <div>
              <p className="text-sm">{certificates.date}</p>
            </div>
            
          </div>
        </motion.div>

        ))}
        
      </motion.div>
    </div>
  );
}

export default Certifications;
