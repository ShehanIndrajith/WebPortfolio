import React from "react";
import Bgsvg from "../assets/mountains.png";
import "../index.css";
import { motion } from "framer-motion";
//style={{ backgroundImage: `url(${Bgsvg})` }}

function Contactme() {
  return (
    <div className="bgimage">
      <div className="bgplanet">
      <div className="flex flex-col justify-center mx-6 md:mx-16 lg:mx-44 px-4 md:px-16 lg:px-72">
  <form className="flex flex-col rounded-lg bg-black/5 backdrop-blur-sm px-6 md:px-10 lg:px-16 pb-10 mb-6">
    <h2 className="mt-12 mb-10 text-center text-2xl md:text-3xl lg:text-4xl">
      Contact Me
    </h2>
    <div className="mb-4">
      <label className="block mb-2 font-serif text-sm md:text-base">Your Name</label>
      <input
        type="text"
        className="border border-slate-400 w-full h-8 px-2 text-sm md:text-md font-serif rounded-lg bg-white/5 backdrop-blur-sm"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 font-serif text-sm md:text-base">Your Email</label>
      <input
        type="text"
        className="border border-slate-400 w-full h-8 px-2 text-sm md:text-md font-serif rounded-lg bg-white/5 backdrop-blur-sm"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 font-serif text-sm md:text-base">Your Message</label>
      <textarea
        className="border border-slate-400 w-full h-24 md:h-32 px-2 text-sm md:text-md font-serif rounded-lg bg-white/5 backdrop-blur-sm"
      />
    </div>
    <div className="flex flex-row w-full justify-center">
      <motion.button
        className="sendbtn rounded-lg py-2 px-6 md:px-8 lg:px-10"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        Send
      </motion.button>
    </div>
  </form>
</div>

      </div>
    </div>
  );
}

export default Contactme;
