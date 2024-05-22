import React from "react";
import { RxDiscordLogo } from "react-icons/rx";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white border-t border-gray-400">
      <div className="w-full h-full bg-black text-gray-200 shadow-lg p-4 sm:p-[15px]">
        <div className="w-full flex flex-col items-center justify-center m-auto">
          <div className="w-full flex flex-col sm:flex-row items-center justify-around flex-wrap">
            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start mb-6 sm:mb-0">
              <a href="#">
                <div className="font-bold text-3xl sm:text-5xl">RAVIAN AI<span className="text-green-500">.</span></div>
              </a>
            </div>
            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start mb-6 sm:mb-0">
              <div className="font-bold text-base sm:text-[16px]">Community</div>
              <a href="#">
                <p className="flex flex-row items-center my-[10px] sm:my-[15px] cursor-pointer">
                  <RxDiscordLogo />
                  <span className="text-sm sm:text-[15px] ml-[6px]">Discord</span>
                </p>
              </a>
            </div>
            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start mb-6 sm:mb-0">
              <div className="font-bold text-base sm:text-[16px]">Social Media</div>
              <a href="#">
                <p className="flex flex-row items-center my-[10px] sm:my-[15px] cursor-pointer">
                  <FaFacebook />
                  <span className="text-sm sm:text-[15px] ml-[6px]">Facebook</span>
                </p>
              </a>
              <a href="#">
                <p className="flex flex-row items-center my-[10px] sm:my-[15px] cursor-pointer">
                  <FaTwitterSquare />
                  <span className="text-sm sm:text-[15px] ml-[6px]">Twitter</span>
                </p>
              </a>
              <a href="#">
                <p className="flex flex-row items-center my-[10px] sm:my-[15px] cursor-pointer">
                  <FaLinkedin />
                  <span className="text-sm sm:text-[15px] ml-[6px]">Linkedin</span>
                </p>
              </a>
              <a href="mailto:care@ravian.ai">
                <p className="flex flex-row items-center my-[10px] sm:my-[15px] cursor-pointer">
                  <MdOutlineMail />
                  <span className="text-sm sm:text-[15px] ml-[6px]">Email</span>
                </p>
              </a>
            </div>
          </div>
          <div className="mb-[80px] text-sm sm:text-[15px] text-center">
            &copy; Ravian AI 2024 Inc. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;