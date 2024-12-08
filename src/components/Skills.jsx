import React from 'react'
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import { DiRedis } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import logo from "../assets/shehanlogo.png";
import { motion } from "framer-motion";
import csharp from '../assets/c-sharp.png';
import python from '../assets/python.png';
import docker from '../assets/docker.png';
import mysql from '../assets/mysql.png';

const Skills = () => {
  return (
    <div className='pt-8 pb-28'>
        <h2 className="mb-20 text-white text-center text-4xl">Skills</h2>

        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1,  delay:0.5 }} transition={{ duration: 0.5, ease: "easeInOut" }} viewport={{ once: true }} className='flex flex-wrap items-center justify-center gap-4'>
          <motion.div
          whileHover={{y: -8}} transition={{ type: "spring" }} className='rounded-2xl border-4 border-neutral-800 p-2'>
            <RiReactjsLine className='text-5xl text-cyan-400'/>
          </motion.div>
          <motion.div whileHover={{y: -8}} transition={{ type: "spring" }} className='rounded-2xl border-4 border-neutral-800 p-2'>
            <FaNodeJs className='text-5xl text-green-500'/>
          </motion.div>
          <motion.div whileHover={{y: -8}} transition={{ type: "spring" }} className='rounded-2xl border-4 border-neutral-800 p-2'>
            <img className='size-12' src={csharp}/>
          </motion.div>
          <motion.div whileHover={{y: -8}} transition={{ type: "spring" }} className='rounded-2xl border-4 border-neutral-800 p-2'>
            <img className='size-12' src={python}/>
          </motion.div>
          <motion.div whileHover={{y: -8}} transition={{ type: "spring" }} className='rounded-2xl border-4 border-neutral-800 p-2'>
            <img className='size-12' src={docker}/>
          </motion.div>
          <motion.div whileHover={{y: -8}} transition={{ type: "spring" }} className='rounded-2xl border-4 border-neutral-800 p-2'>
            <img className='size-12' src={mysql}/>
          </motion.div>
          <motion.div whileHover={{y: -8}} transition={{ type: "spring" }} className='rounded-2xl border-4 border-neutral-800 p-2'>
            <SiMongodb className='text-5xl text-green-500'/>
          </motion.div>
          <motion.div whileHover={{y: -8}} transition={{ type: "spring" }} className='rounded-2xl border-4 border-neutral-800 p-2'>
            <BiLogoPostgresql className='text-5xl text-sky-700'/>
          </motion.div>
        </motion.div>

    </div>
  )
}

export default Skills