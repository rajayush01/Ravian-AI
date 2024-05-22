"use client";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    name: 'Random1',
    text: 'The insights provided were groundbreaking and transformed our approach to AI research.',
    image: '/dummy.webp', // Replace with the path to the image
  },
  {
    name: 'Random2',
    text: 'Innovative solutions and exceptional understanding of complex data sets. Highly recommended!',
    image: '/dummy.webp', // Replace with the path to the image
  },
  {
    name: 'Random3',
    text: 'An unparalleled expertise in data analysis and machine learning that truly stands out.',
    image: '/dummy.webp', // Replace with the path to the image
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

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

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          className="text-5xl font-bold text-center mb-5"
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Customer <span className='text-blue-300'>Testimonials</span>
        </motion.h2>
        <motion.p
          className='justify-center text-xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-900'
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          What our valued customers say
        </motion.p>
        <div ref={ref} className="relative h-96 overflow-hidden rounded-2xl">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                current === index ? 'opacity-100' : 'opacity-0'
              }`}
              initial="hidden"
              animate={controls}
              variants={variants}
              transition={{ duration: 0.6, delay: 0.2 * (index + 1), ease: "easeOut" }}
            >
              <blockquote className="p-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 rounded-lg shadow-lg h-full flex flex-col justify-center items-center text-center">
                <img
                  className="w-24 h-24 rounded-full mb-4"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <p className="text-lg font-medium">{testimonial.text}</p>
                <footer className="mt-4">
                  <div className="text-base font-semibold">{testimonial.name}</div>
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <button
            className="px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 focus:outline-none focus:ring"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <FontAwesomeIcon icon={faArrowLeft} size="lg" />
          </button>
          <button
            className="px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 focus:outline-none focus:ring"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <FontAwesomeIcon icon={faArrowRight} size="lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
