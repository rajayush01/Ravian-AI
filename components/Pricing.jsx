"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { CiLocationArrow1 } from 'react-icons/ci';
import { motion } from 'framer-motion';

export const Pricing = () => {
  return (
    <div className="bg-black py-20">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-900 font-bold tracking-wide uppercase mt-20 text-center shadow-lg"
        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        Select Your Ideal Plan
      </motion.h2>
      <div className="flex flex-col sm:flex-row sm:space-x-4 justify-center text-center mb-20">
        <div className="text-xl mt-14 rounded-xl border border-[#4E67E5]/25 bg-[#080C23] p-6 sm:p-10 w-full sm:w-80 transform transition duration-500 hover:scale-105 hover:bg-[#0A1233]">
          <div className="text-[#4d66e5]">Basic Plan</div>
          <div className="text-2xl sm:text-4xl my-5 font-light text-white">$600</div>
          <div className="text-white text-xl sm:text-2xl mt-10 font-bold">Features</div>
          <ul className="text-white mt-4 text-base sm:text-[18px]">
            <li><FontAwesomeIcon icon={faCheck} className="mr-2" />First feature</li>
            <li><FontAwesomeIcon icon={faCheck} className="mr-2" />Second feature</li>
          </ul>
          <a href="#" target='blank' className="mt-8">
            <button className="flex flex-row animate-border text-center justify-center items-center mx-auto mt-8 sm:mt-[160px] px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold text-white bg-black border-2 rounded-2xl animate-border focus:outline-none hover:scale-95 active:scale-90 transition-transform duration-200">
              Purchase
              <CiLocationArrow1 className='mx-1' />
            </button>
          </a>
        </div>
        <div className="text-xl mt-14 rounded-xl border border-[#9966FF]/25 bg-[#120d1d] p-6 sm:p-10 w-full sm:w-80 transform transition duration-500 hover:scale-105 hover:bg-[#1A112B]">
          <div className="text-[#9967FF]">Standard Plan</div>
          <div className="text-2xl sm:text-4xl my-5 font-light text-white">$900</div>
          <div className="text-white text-xl sm:text-2xl mt-10 font-bold">Features</div>
          <ul className="text-white mt-4 text-base sm:text-[18px]">
            <li><FontAwesomeIcon icon={faCheck} className="mr-2" />First Feature</li>
            <li><FontAwesomeIcon icon={faCheck} className="mr-2" />Second Feature</li>
            <li><FontAwesomeIcon icon={faCheck} className="mr-2" />Third Feature</li>
          </ul>
          <a href="#" target='blank' className="mt-8">
            <button className="flex flex-row animate-border text-center justify-center items-center mx-auto mt-8 sm:mt-[130px] px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold text-white bg-black border-2 rounded-2xl animate-border focus:outline-none hover:scale-95 active:scale-90 transition-transform duration-200">
              Purchase
              <CiLocationArrow1 className='mx-1' />
            </button>
          </a>
        </div>
        <div className="text-xl mt-14 rounded-xl border border-[#F7E16F]/25 bg-[#19170d] p-6 sm:p-10 w-full sm:w-80 transform transition duration-500 hover:scale-105 hover:bg-[#221D0E]">
          <div className="text-[#F7E16F]">Premium Plan</div>
          <div className="text-2xl sm:text-4xl my-5 font-light text-white">$1800</div>
          <div className="text-white text-xl sm:text-2xl mt-10 font-bold">Features</div>
          <ul className="text-white mt-4 text-base sm:text-[18px]">
            <li><FontAwesomeIcon icon={faCheck} className="mr-2" />First Feature</li>
            <li><FontAwesomeIcon icon={faCheck} className="mr-2" />Second Feature</li>
            <li><FontAwesomeIcon icon={faCheck} className="mr-2" />Third Feature</li>
            <li><FontAwesomeIcon icon={faCheck} className="mr-2" />Fourth Feature</li>
            <li><FontAwesomeIcon icon={faCheck} className="mr-2" />Fifth Feature</li>
          </ul>
          <a href="#" className="mt-8">
            <button className="flex flex-row animate-border text-center justify-center items-center mx-auto mt-8 sm:mt-20 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold text-white bg-black border-2 rounded-2xl animate-border focus:outline-none hover:scale-95 active:scale-90 transition-transform duration-200">
              Purchase
              <CiLocationArrow1 className='mx-1' />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
