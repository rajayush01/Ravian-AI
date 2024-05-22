import React from "react";
import HeroContent from "@/components/HeroContent"
import Header from "./Header";

const Hero = () => {
  return (
    
    <div className="relative flex flex-col h-screen w-full" id="about-me">
      <Header/>
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 h-full w-full z-[1] object-cover"
      >
        <source src="/bg1.webm" type="video/webm" />
      </video>
      <div className="relative z-[2] flex flex-col h-full w-full items-center justify-center bg-opacity-20 bg-black text-white">
        <HeroContent/>
      </div>
    </div>
  );
};

export default Hero;
