"use client";
import { motion } from "framer-motion";

const offerings = [
  {
    title: "AI Data Analyst",
    description:
      "Meet your AI Data Analyst! Unlock the full potential of your data with RAVIAN AI's Data-Analyst - an intelligent platform designed to transform raw data into actionable insights. Our AI Data Analyst is equipped with the latest machine learning algorithms and cutting-edge technologies to analyze, interpret, and visualize data with precision and speed.",
    icon: "🔥",
    color: "bg-gradient-to-r from-red-600 to-red-800",
  },
  {
    title: "Gen AI Vision Analyst",
    description:
      "Introducing the Gen AI Vision Analyst: Redefining Visual Intelligence At RAVIAN AI, we're excited to introduce our revolutionary Gen AI Vision Analyst - a next-generation solution that sets a new standard for visual intelligence and data analysis.",
    icon: "⚡",
    color: "bg-gradient-to-r from-yellow-500 to-amber-600",
  },
  {
    title: "Customizable Solution",
    description:
      "Customized solutions and integrations designed to address the unique needs of users, seamlessly integrating with existing data sources and deploying bespoke ML models.",
    icon: "🌟",
    color: "bg-gradient-to-r from-purple-600 to-indigo-800",
  },
];

const maxDescriptionLength = 150;

const OurOffering = () => {
  return (
    <div className="py-12 bg-black relative" id="offering">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-900 font-bold tracking-wide uppercase mt-20 shadow-lg"
            style={{ textShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Why Choose RAVIAN?
          </motion.h2>

          <motion.p
            className="mt-7 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-extrabold tracking-tight text-gray-900 shadow-3xl"
            style={{ textShadow: '2px 2px 5px rgba(255, 255, 255, 0.5)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            What We Provide
          </motion.p>

          <motion.p
            className="mt-4 max-w-2xl text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            We turn complex data into actionable insights.
          </motion.p>
        </motion.div>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((offering, index) => (
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
                <div
                  className={`flow-root rounded-lg px-4 sm:px-6 pb-8 shadow-md ${offering.color}`}
                  style={{ height: '350px' }}
                >
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-black rounded-md shadow-lg">
                        <span className="text-white text-3xl">
                          {offering.icon}
                        </span>
                      </span>
                    </div>
                    <h3 className="mt-8 text-3xl sm:text-3xl md:text-3xl font-medium text-white tracking-tight">
                      {offering.title}
                    </h3>
                    <p className="mt-5 text-md sm:text-md md:text-lg  text-gray-300 line-clamp-6">
                      {offering.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurOffering;