import React from "react";
import aboutImg from "../assets/123.jpg";
import { ABOUT_TEXT } from "../constants";
import { SlArrowRight } from "react-icons/sl";

const About = () => {
  return (
    <div className="border-b border-neutral-900 px-20 pb-4 mb-30 lg:mb-30">
      <h2 className="my-12 text-center text-4xl">
        About
        <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-col lg:flex-row rounded-lg p-8 py-6 sm:py-6 md:py-6 lg:py-16 backdrop-blur-sm bg-white/5">
        <div className="flex flex-col items-center lg:flex-col sm:w-full lg:w-96">
          {/* Image Section */}
          <div className="size-80 mb-6">
            <img className="rounded-lg w-full" src={aboutImg} alt="About" />
          </div>

          {/* Info Section */}
          <div className="flex flex-col sm:items-center lg:items-start">
            <label className="font-serif w-full text-2xl sm:text-3xl md:text-4xl lg:text-3xl text-center lg:text-left">
              Hey! I am Shehan Indrajith
            </label>
            <div className="px-4 mt-4 space-y-4">
              <div className="flex flex-row">
                <SlArrowRight className="fill-indigo-500 mr-4 mt-1" />
                <label className="font-bold">Birthday: </label>
                <span className='ml-4'> 28th October 2002</span>
              </div>
              <div className="flex flex-row">
                <SlArrowRight className="fill-indigo-500 mr-4 mt-1" />
                <label className="font-bold">Email: </label>
                <span className='ml-4'> sbsindrajith2002@gmail.com</span>
              </div>
              <div className="flex flex-row">
                <SlArrowRight className="fill-indigo-500 mr-4 mt-1" />
                <label className="font-bold">Phone No: </label>
                <span className='ml-4'> +94 76 185 5356</span>
              </div>
              <div className="flex flex-row">
                <SlArrowRight className="fill-indigo-500 mr-4 mt-1" />
                <label className="font-bold">City: </label>
                <span className='ml-4'> Ambalangoda</span>
              </div>
            </div>
            <div className="px-6 mt-6">
              <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm">
                Connect
              </button>
            </div>
          </div>
        </div>


      <div className='sm:px-0 md:px-0 lg:px-6'>
        {/* Bio Section */}
        <div className="mt-6 flex flex-col items-center lg:items-center">
          <h2 className="border-y-2 border-indigo-600 w-full text-2xl mb-4 text-center lg:text-center">Biography</h2>
          <p className="text-justify mb-6 font-serif lg:text-justify">
            I am a highly motivated and creative second-year Software
            Engineering student with a strong passion for technology and
            innovation. My journey in tech focuses on back-end development,
            cloud engineering, and exploring the limitless potential of Machine
            Learning and Data Science.
            <br />
            I thrive on solving complex problems, building scalable
            applications, and continuously learning about cutting-edge
            technologies. Beyond academics, my diverse background in music and
            sports has instilled in me creativity, discipline, and a
            collaborative mindset—qualities that I bring to every project.
            <br />
            With hands-on experience in web development, IoT systems, and
            automated solutions, I’m eager to take on challenges that contribute
            to impactful, real-world solutions while advancing my skills in the
            dynamic tech field.
          </p>
        </div>

        {/* Areas of Interest Section */}
        <div className="mt-6 flex flex-col items-center lg:items-center">
          <h2 className="border-y-2 border-indigo-600 w-full text-2xl mb-4 text-center lg:text-center">
            Areas of Interest
          </h2>
          <p className="text-justify font-serif lg:text-justify">
            I am deeply passionate about the world of technology, particularly
            Deep Learning, Data Science, and Machine Learning. The ability of
            neural networks to mimic human intelligence fascinates me, and I’m
            eager to explore their applications in computer vision, natural
            language processing, and beyond. My interest in Data Science lies in
            uncovering meaningful insights from complex datasets and applying
            predictive analytics to solve real-world problems. Additionally, I
            am captivated by the theoretical aspects of Machine Learning,
            delving into the mathematical foundations and algorithms that power
            these advancements. With an emerging interest in Robotics, I am
            enthusiastic about understanding automation and building systems
            that integrate seamlessly into our daily lives.
            <br />
            Beyond my technical pursuits, I am also a lifelong learner, with a
            curiosity that extends to Finance, Economics, and Politics. These
            fields inspire me to think critically about the interconnected
            systems shaping our world and their potential for innovation through
            technology. Combining my technical knowledge and broader interests,
            I aim to create solutions that have a meaningful impact on society.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
