//import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/myphotos/heropic1.jpg";
import { useTypewriter } from "react-simple-typewriter";
import "./App.css";
import { motion } from "framer-motion";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from 'react-scroll';

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
    <div className="border-b border-neutral-900 mx-8 lg:mx-8 pb-4 lg:mb-35">
      <div  className="lg:ml-10 flex flex-wrap justify-center lg:justify-center">
        <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }} viewport={{ once: true }} className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-4 orbitron-Herotxt font-thin tracking-tight text-5xl sm:text-5xl md:text-6xl lg:mt-8 text-white lg:text-8xl text-center lg:text-left">
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
              
            </div>
            <div className="flex flex-row w-full mt-8 lg:mt-12 space-x-6 justify-center lg:justify-start mb-4">
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-indigo-600 rounded-lg px-3 text-sm py-1 lg:py-3 lg:px-5 hover:cursor-pointer flex flex-row items-center"
              >
                <Link to="contactMeSection"
        smooth={true}
        duration={500} className="font-semibold text-sm lg:text-md text-white text-center">Contact Me</Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="border border-violet font-semibold text-violet flex flex-row items-center rounded-lg px-3 py-1 lg:py-3 lg:px-5 bg-black/5 backdrop-blur-sm space-x-4 hover:cursor-pointer hover:bg-violet hover:text-white"
              >
                <button
                  onClick={() => {
                    window.location.href = "https://drive.google.com/uc?export=download&id=1heX4hT5C_Zho8cE6PbP0rQrv9QUFqIwN";
                  }}
                  alt="Shehan_Indrajith_Resume.pdf"
                  className="text-sm lg:text-md text-center size-full"
                >
                  Resume
                </button>
                <MdOutlineFileDownload className="text-lg size-6 " />
              </motion.div>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1}} transition={{ duration: 0.5, ease: "easeInOut" }} viewport={{ once: true }} className="w-full lg:w-1/3 lg:p-3 lg:ml-[2cm]">
          <div className="flex justify-center lg:justify-end">
            <img
              className="mb-20  rounded-lg lg:ml-[10cm]"
              src={profilePic}
              alt="Shehan Indrajith"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
