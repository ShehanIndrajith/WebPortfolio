//import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/123.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./App.css";
import { motion } from "framer-motion";
import { MdOutlineFileDownload } from "react-icons/md";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Software Engineer Student",
      "Web Developer",
      "Machine Learning Engineer",
      ".NET Developer",
      "Musician",
    ],
    loop: true, // Loop indefinitely
    typeSpeed: 70, // Typing speed in ms
    deleteSpeed: 50, // Deleting speed in ms
    delaySpeed: 1000, // Delay before typing the next word
  });

  return (
    <div className="border-b border-neutral-900 mx-8 lg:mx-12 pb-4 lg:mb-35">
      <div className="lg:ml-10 flex flex-wrap justify-center lg:justify-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-4 orbitron-Herotxt font-thin tracking-tight text-4xl sm:text-4xl md:text-6xl lg:mt-8 lg:text-8xl text-center lg:text-left">
              SHEHAN INDRAJITH
            </h1>
            {/* <h1 className='pb-10 ibm-plex-mono-extralight tracking-tight lg:text-6xl'>Web Developer /</h1> */}
            <div>
              <span className="ibm-plex-mono-light bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-md lg:text-4xl tracking-tight text-transparent">
                <label className="ibm-plex-mono-light text-white text-md lg:text-4xl">
                  I am a
                </label>{" "}
                {text}
              </span>
              <Cursor />
            </div>
            <div className="flex flex-row w-full mt-8 lg:mt-12 space-x-6 justify-center lg:justify-start mb-4">
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-indigo-600 rounded-lg py-3 px-5 hover:cursor-pointer"
              >
                <a className="font-semibold">Contact Me</a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="border border-violet font-semibold text-violet flex flex-row items-center rounded-lg py-3 px-5 bg-black/5 backdrop-blur-sm space-x-4 hover:cursor-pointer hover:bg-violet hover:text-white"
              >
                <a
                  href="public\resume.pdf"
                  download="Shehan_Indrajith_Resume.pdf"
                  className=""
                >
                  Resume
                </a>
                <MdOutlineFileDownload className="text-lg size-6 " />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:p-3 lg:ml-[2cm]">
          <div className="flex justify-center lg:justify-end">
            <img
              className="mb-20  rounded-lg lg:ml-[10cm]"
              src={profilePic}
              alt="Shehan Indrajith"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
