import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/123.jpg";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './App.css';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Software Engineer Student', 'Machine Learning Engineer', '.NET Developer', 'Musician'],
    loop: true, // Loop indefinitely
    typeSpeed: 70, // Typing speed in ms
    deleteSpeed: 50, // Deleting speed in ms
    delaySpeed: 1000, // Delay before typing the next word
  });

  return (
    <div className='border-b border-neutral-900 mx-12 pb-4 lg:mb-35'>
      <div className='ml-10 flex flex-wrap justify-center lg:justify-start'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <h1 className='pb-10 text-5xl font-thin tracking-tight lg:mt-8 lg:text-6xl'>Shehan Indrajith</h1>
            <div>
              <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
                <label className='text-white text-3xl'>I am a</label> {text}
              </span>
              <Cursor />
            </div>
            <p className='my-2 max-w-xl py-10 font-light tracking-tighter text-justify'>{HERO_CONTENT}</p>
          </div>
        </div>
        <div className='w-full lg:w-1/3 lg:p-3 lg:ml-[2cm]'>
          <div className='flex justify-center lg:justify-end'>
            <img className='mb-20 rounded-lg lg:ml-[10cm]' src={profilePic} alt="Shehan Indrajith"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
