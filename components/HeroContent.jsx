"use client"
import React from 'react';
import { CiLocationArrow1 } from "react-icons/ci";
import { motion } from 'framer-motion';

const HeroContent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full mt-[10px]">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#5c5f72] mt-[-100px]"
      >
        <motion.p
          className="text-[55px] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[80px] text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-900 font-bold tracking-wide uppercase shadow-lg"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          RAVIAN AI.
        </motion.p>
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#5c5f72] mt-[30px]"
      >
        Turn Data into Decisions.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-xl sm:text-2xl md:text-3xl mt-3 text-center"
      >
        Unlock Insights, Drive Impact with AI Data Science
      </motion.p>
      <a href="http://20.106.224.149:8501/" target="blank" className="mt-8">
        <button className="flex flex-row animate-border mt-6 px-4 sm:px-6 py-2 sm:py-3 text-lg sm:text-lg font-semibold text-white bg-black border-2 rounded-2xl animate-border focus:outline-none hover:scale-95 active:scale-90 transition-transform duration-200">
          Try RAVIAN <CiLocationArrow1 className="mt-1 mx-1" />
        </button>
      </a>
    </div>
  );
}

export default HeroContent;