"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { CiLocationArrow1 } from 'react-icons/ci';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export const Pricing = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Change to false to trigger animation on entering and leaving
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-black py-20">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-900 font-bold tracking-wide uppercase mt-20 text-center shadow-lg"
        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        Select Your Ideal Plan
      </motion.h2>
      <div ref={ref} className="flex flex-col sm:flex-row sm:space-x-4 justify-center text-center mb-20">
        {['Basic Plan', 'Standard Plan', 'Premium Plan'].map((plan, index) => {
          const prices = ['$600', '$900', '$1800'];
          const features = [
            ['First feature', 'Second feature'],
            ['First Feature', 'Second Feature', 'Third Feature'],
            ['First Feature', 'Second Feature', 'Third Feature', 'Fourth Feature', 'Fifth Feature'],
          ];
          const colors = ['#4E67E5', '#9967FF', '#F7E16F'];
          const bgColors = ['#080C23', '#120d1d', '#19170d'];
          const hoverBgColors = ['#0A1233', '#1A112B', '#221D0E'];

          return (
            <motion.div
              key={plan}
              className={`text-xl mt-14 rounded-xl border border-[${colors[index]}]/25 bg-[${bgColors[index]}] p-6 sm:p-10 w-full sm:w-80 transform transition duration-500 hover:scale-105 hover:bg-[${hoverBgColors[index]}]`}
              initial="hidden"
              animate={controls}
              variants={variants}
              transition={{ duration: 0.6, delay: 0.2 * (index + 1), ease: "easeOut" }}
            >
              <div className={`text-[${colors[index]}]`}>{plan}</div>
              <div className="text-2xl sm:text-4xl my-5 font-light text-white">{prices[index]}</div>
              <div className="text-white text-xl sm:text-2xl mt-10 font-bold">Features</div>
              <ul className="text-white mt-4 text-base sm:text-[18px]">
                {features[index].map((feature, i) => (
                  <li key={i}>
                    <FontAwesomeIcon icon={faCheck} className="mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#" target='blank' className="mt-8">
                <button className="flex flex-row animate-border text-center justify-center items-center mx-auto mt-8 sm:mt-[160px] px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold text-white bg-black border-2 rounded-2xl animate-border focus:outline-none hover:scale-95 active:scale-90 transition-transform duration-200">
                  Purchase
                  <CiLocationArrow1 className='mx-1' />
                </button>
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
