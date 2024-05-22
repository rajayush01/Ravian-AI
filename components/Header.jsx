"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { CiLocationArrow1 } from "react-icons/ci";

const Header = () => {
    return (
        <header className="relative py-8 xl:py-5 bg-transparent text-white hidden sm:flex bg-opacity-20 bg-black">
            <div className="container mx-auto flex justify-between items-center font-primary">

                


                
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-end w-full z-20"
                >
                    <a href="http://20.106.224.149:8501/" target='_blank'>
                        <button className="flex flex-row items-center animate-border px-6 py-3 text-lg font-semibold text-white bg-black border-2 rounded-2xl focus:outline-none hover:scale-95 active:scale-90 transition-transform duration-200">
                            Try RAVIAN
                            <CiLocationArrow1 className='mt-1 mx-1' />
                        </button>
                    </a>
                </motion.div>
            </div>
        </header>
    );
};

export default Header;
