"use client"

import { HiHome, HiUser, HiViewColumns, HiRectangleGroup, HiChatBubbleBottomCenterText, HiEnvelope } from 'react-icons/hi2';
import { useState } from 'react';
import { FaQuestionCircle } from "react-icons/fa";


const links = [
    {
        name: 'home',
        path: '#about-me',
        icon: <HiHome />,
    },
    {
        name: 'offerings',
        path: '#offering',
        icon: <HiRectangleGroup />,
    },
    {
        name: 'about',
        path: '#about',
        icon: <HiUser />,
    },
    {
        name: 'testimonials',
        path: '#testimonial',
        icon: <HiChatBubbleBottomCenterText />,
    },
    {
        name: 'pricing',
        path: '#pricing',
        icon: <HiViewColumns />,
    },
    {
        name: 'FAQ',
        path: '#faq',
        icon: <FaQuestionCircle />,
    },
];

const LinkName = ({ name, isHovered }) => (
    <div
        className={`absolute capitalize top-1/3 right-full -translate-x-1/2 bg-black text-white px-2 py-1 rounded-md transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} sm:block hidden`}
    >
        {name}
    </div>
);

const Nav = () => {
    const [hoveredLink, setHoveredLink] = useState(null);

    return (
        <nav className='flex flex-col items-center justify-center gap-y-4 fixed h-max bottom-0 mt-auto lg:right-[2%] z-50 top-0 w-full lg:w-16 lg:max-w-md lg:h-screen'>
            <div className='flex w-full lg:flex-col items-center justify-between lg:justify-center gap-y-10 px-4 md:px-40 lg:px-0 h-[80px] bg-white/10 lg:h-max py-8 backdrop-blur-sm text-3xl lg:text-xl lg:rounded-full'>
                {links.map((link, index) => (
                    <div
                        key={index}
                        className='relative'
                        onMouseEnter={() => setHoveredLink(link.name)}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        <a href={link.path}>
                            <div
                                className={`transition-colors duration-300 ${hoveredLink === link.name ? 'text-red-500' : 'text-white'}`}
                            >
                                {link.icon}
                            </div>
                        </a>
                        <LinkName name={link.name} isHovered={hoveredLink === link.name} />
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default Nav;
