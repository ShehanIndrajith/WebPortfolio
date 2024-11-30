import React from "react";
import aboutImg from "../assets/123.jpg";
import whatsapp from "../assets/whatsapplogo.png";
import gmail from "../assets/gmail.png";
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {motion} from 'framer-motion';


const About = () => {

  const numbercopyToClipboard = () => {
    const phoneNumber = "+94701942929"; // the phone number you want to copy
    navigator.clipboard.writeText(phoneNumber)
      .then(() => {
        toast.success('Phone number copied to clipboard!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: 'bg-green-800 bg-opacity-50 text-white text-sm',
        });
      })
      .catch((error) => {
        console.error('Failed to copy text: ', error);
      });
  };

  const emailcopytoClipboard = () => {
    const emailAddress = "sbsindrajith2002@gmail.com";
    navigator.clipboard.writeText(emailAddress)
    .then(() => {
      toast.success('Email Address copied to clipboard!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: 'bg-green-800 bg-opacity-50 text-white text-sm',
      });
    })
    .catch((error) => {
      console.error('Failed to copy text: ', error);
    });
  };

  return (
    <div className=" border-neutral-900 px-6 lg:px-20 py-16 mb-30 lg:mb-30">
      <h2 className="mb-12 text-center text-4xl">
        About
        <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-col lg:flex-row rounded-lg backdrop-blur-sm bg-white/5 mx-0 p-8 lg:mx-36 lg:p-16">
        <div className="basis-1/3">
          <div className="w-full h-80">
            <img className="rounded-lg" src={aboutImg} />
          </div>
        </div>
        <div className="basis-2/3 pl-0 lg:pl-16">
          <div className='mt-2 sm:mt-2 md:lg-4 lg:mt-0'>
            <h1 className="font-serif text-center lg:text-left text-2xl lg:text-4xl lg:mt-0">
              Hello! I'm Shehan Indrajith 👋
            </h1>
            {/* <img src={aboutImg}/> */}
          </div >
          <div className="mt-6">
            <p className="font-serif text-justify">
              I am a 22-year-old Software Engineering student passionate about
              <label className='font-semibold border-b-2 border-indigo-500'> front-end and back-end development, cloud engineering, and Machine Learning. </label>
              With hands-on experience in <label className='font-semibold border-b-2 border-indigo-500'> web development, IoT systems, and
              automation</label>, I specialize in creating scalable solutions and
              exploring AI-driven innovations like neural networks and
              predictive analytics. Beyond tech, I channel creativity through
              music and sports, excelling in guitar, singing, high jump, karate,
              and badminton. A lifelong learner, I also explore Finance,
              Economics, and Politics to broaden my perspective. I strive to
              merge technical expertise with <label className='font-semibold border-b-2 border-indigo-500'> creativity, solving real-world
              challenges and shaping impactful solutions </label>for the future of
              technology.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row mt-6 space-x-0 lg:space-x-4">
            <motion.div whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", stiffness: 300, damping: 17 }} onClick={numbercopyToClipboard} className="flex flex-row rounded-lg border border-gray-700 backdrop-contrast-50 bg-black/80 p-4 mb-4 lg:mb-0 justify-start items-center hover:cursor-pointer">
              <div className='size-12'>
                <img src={whatsapp}/>
              </div>
              <div className="flex flex-col ml-4">
                <h1 className="font-semibold">Whatsapp :</h1>
                <h1 className="">+94 70 194 2929</h1>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", stiffness: 300, damping: 17 }} onClick={emailcopytoClipboard} className="flex flex-row rounded-lg border border-gray-700 backdrop-contrast-50 bg-black/80 p-4 justify-start items-center hover:cursor-pointer">
              <div className='size-12'>
                <img src={gmail}/>
              </div>
              <div className="flex flex-col ml-4">
                <h1 className="font-semibold">Email :</h1>
                <h1 className="">sbsindrajith2002@gmail.com</h1>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default About;
