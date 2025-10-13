import React from 'react'
import { motion } from "framer-motion";

const Badges = () => {
  return (
    <div className='pt-8 pb-28'>
        <h2 className="mb-20 text-white text-center text-4xl">Badges</h2>

        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1,  delay:0.5 }} transition={{ duration: 0.5, ease: "easeInOut" }} viewport={{ once: true }} className='flex flex-wrap items-center justify-center gap-4'>
          
        </motion.div>
    </div>
  )
}

export default Badges