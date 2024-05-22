"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AboutUs = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="py-12 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isMounted && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              className="text-6xl sm:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-900 font-bold tracking-wide uppercase mt-20 shadow-lg"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              About Us
            </motion.h2>
            <motion.p
              className="mt-7 text-5xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl xl:text-7xl shadow-lg"
              style={{ textShadow: "2px 2px 5px rgba(255, 255, 255, 0.5)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Our Mission
            </motion.p>
            <motion.p
              className="mt-10 max-w-4xl text-lg text-gray-400 mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              At RAVIAN, we are dedicated to transforming the landscape of data
              analytics through innovation and cutting-edge technology
              <br />
              <br />
              As pioneers in the field, we have developed the world's leading
              AI data scientist—an intelligent platform that leads the way in
              crafting machine learning and deep learning models, conducting
              comprehensive data analysis, and delivering actionable insights
              through intuitive visualizations.
              <br />
              <br />
              Our journey began with a vision to empower businesses with the
              tools they need to harness the power of their data and make
              informed decisions that drive success. With a team of passionate
              experts and a commitment to excellence, we have turned that vision
              into reality.
              <br />
              <br />
              Today, RAVIAN stands at the forefront of AI-driven analytics,
              helping businesses of all sizes unlock the full potential of
              their data assets. Whether you're uncovering hidden patterns,
              predicting future trends, or optimizing operations, RAVIAN AI is
              your trusted partner in navigating the complexities of
              data-driven decision-making. Join us on this journey as we
              continue to push the boundaries of what's possible in the realm
              of data analytics. Welcome to RAVIAN AI—where innovation meets
              intelligence.
            </motion.p>
          </motion.div>
        )}
        {isMounted && (
          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="pt-6"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="flow-root rounded-lg px-6 pb-8 shadow-md bg-gradient-to-r from-gray-700 to-gray-900">
                    <div className="-mt-6">
                      <motion.div
                        className="flex justify-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          className="h-24 w-24 rounded-full"
                          src={member.photo}
                          alt={member.name}
                        />
                      </motion.div>
                      <h3 className="mt-8 text-lg font-medium text-white tracking-tight text-center">
                        {member.name}
                      </h3>
                      <p className="mt-5 text-base text-gray-300 text-center">
                        {member.role}
                      </p>
                      <p className="mt-2 text-base text-gray-400 text-center">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AboutUs;

const teamMembers = [
  {
    name: "Dheeraj Gupta",
    role: "Founder",
    description: "Leading the vision and strategy of RAVIAN AI.",
    photo: "/dummy.webp",
  },
  {
    name: "XYZ",
    role: "CTO",
    description: "Overseeing the technological advancements and innovation.",
    photo: "/dummy.webp",
  },
  {
    name: "ABC",
    role: "Lead Data Scientist",
    description: "Driving data science projects and ensuring data integrity.",
    photo: "/dummy.webp",
  },
];

