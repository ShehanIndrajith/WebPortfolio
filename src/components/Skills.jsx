import React from 'react'
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import { DiRedis } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';

const Skills = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className="my-20 text-center text-4xl">Skills</h2>

        <div className='flex flex-wrap items-center justify-center gap-4'>
          <div className='rounded-2xl border-4 border-neutral-800 p-2'>
            <RiReactjsLine className='text-5xl text-cyan-400'/>
          </div>
          <div className='rounded-2xl border-4 border-neutral-800 p-2'>
            <TbBrandNextjs className='text-5xl'/>
          </div>
          <div className='rounded-2xl border-4 border-neutral-800 p-2'>
            <SiMongodb className='text-5xl text-green-500'/>
          </div>
          <div className='rounded-2xl border-4 border-neutral-800 p-2'>
            <DiRedis className='text-5xl text-red-700'/>
          </div>
          <div className='rounded-2xl border-4 border-neutral-800 p-2'>
            <FaNodeJs className='text-5xl text-green-500'/>
          </div>
          <div className='rounded-2xl border-4 border-neutral-800 p-2'>
            <BiLogoPostgresql className='text-5xl text-sky-700'/>
          </div>
        </div>

    </div>
  )
}

export default Skills