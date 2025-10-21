import React, {useEffect, useState} from "react";
import aboutImg from "../assets/Shehan Indrajith Image.png";
import whatsapp from "../assets/whatsapplogo.png";
import gmail from "../assets/gmail.png";
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {motion} from 'framer-motion';
import '../index.css';


const About = () => {

  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the component is visible
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

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
    const emailAddress = "shehanindrajith06@gmail.com";
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
    <div className="border-neutral-900 px-4 sm:px-6 lg:px-20 py-16 mb-12 lg:mb-30">
  <motion.h2 className="mb-8 text-center text-white text-3xl sm:text-4xl">
    About <span className="text-neutral-500">Me</span>
  </motion.h2>
  <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 , delay:0.5}} transition={{ duration: 0.5, ease: "easeInOut" }} viewport={{ once: true }} className="flex flex-col lg:flex-row rounded-lg backdrop-blur-sm bg-white/5 mx-2 sm:mx-6 lg:mx-36 p-6 sm:p-8 lg:p-16">
    {/* Image Section */}
    <div className="basis-full lg:basis-1/3 mb-6 lg:mb-0">
      <div className="w-full h-64 sm:h-80">
        <img className="rounded-lg object-cover w-full h-full" src={aboutImg} alt="About Me" />
      </div>
    </div>
    {/* Text Section */}
    <div className="basis-full lg:basis-2/3 lg:pl-16">
      <div className="mt-4 sm:mt-6 lg:mt-0">
        <h1 className="font-serif text-center lg:text-left text-2xl sm:text-3xl lg:text-4xl">
          Hello! I'm Shehan Indrajith 👋
        </h1>
      </div>
      <div className="mt-6">
        <p className="font-serif text-justify text-sm sm:text-base">
  I am a <mark>23-year-old Software Engineering student</mark> who has <mark>completed my second year</mark> and gained <mark>6 months of industry experience</mark> in <mark>C#, ASP.NET, Entity Framework (EF), and LINQ</mark>. 
  Passionate about both <mark>front-end and back-end development</mark>, 
  I also explore <mark>cloud engineering</mark> and <mark>Machine Learning</mark>. With hands-on experience in <mark>web development</mark>, <mark>IoT systems</mark>, and <mark>automation</mark>, 
  I focus on building <mark>scalable solutions</mark> and leveraging <mark>AI-driven innovations</mark> such as neural networks and predictive analytics. 
  Beyond technology, I channel creativity through <mark>music</mark> and <mark>sports</mark>, excelling in guitar, singing, high jump, karate, and badminton. 
  A lifelong learner, I continuously explore <mark>Finance</mark>, <mark>Economics</mark>, 
  and <mark>Politics</mark> to broaden my perspective. My goal is to merge <mark>technical expertise</mark> with <mark>creativity</mark>, <mark>solve real-world challenges</mark>, and <mark>shape impactful solutions</mark> for the future of technology.
</p>

      </div>
      {/* Contact Information */}
      <div className="flex flex-col sm:flex-row mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
        {/* WhatsApp */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.99 }}
          transition={{ type: "spring", stiffness: 300, damping: 17 }}
          onClick={numbercopyToClipboard}
          className="flex flex-row rounded-lg border border-gray-700 backdrop-contrast-50 bg-black/80 p-4 justify-start items-center hover:cursor-pointer"
        >
          <div className="w-8 h-8">
            <img src={whatsapp} alt="WhatsApp" />
          </div>
          <div className="flex flex-col ml-4">
            <h1 className="font-semibold text-sm sm:text-base">WhatsApp :</h1>
            <h1 className="text-sm sm:text-base">+94 70 194 2929</h1>
          </div>
        </motion.div>
        {/* Email */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.99 }}
          transition={{ type: "spring", stiffness: 300, damping: 17 }}
          onClick={emailcopytoClipboard}
          className="flex flex-row rounded-lg border border-gray-700 backdrop-contrast-50 bg-black/80 p-4 justify-start items-center hover:cursor-pointer"
        >
          <div className="w-8 h-8">
            <img src={gmail} alt="Gmail" />
          </div>
          <div className="flex flex-col ml-4">
            <h1 className="font-semibold text-sm sm:text-base">Email :</h1>
            <h1 className="text-sm sm:text-base">shehanindrajith06@gmail.com</h1>
          </div>
        </motion.div>
      </div>
    </div>
  </motion.div>
  <ToastContainer />
</div>

  );
};

export default About;
