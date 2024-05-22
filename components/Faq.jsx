"use client"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    {
      question: 'What services does Ravian AI offer?',
      answer: 'Ravian AI offers advanced AI data analysis services, including data processing, modeling, and visualization.',
    },
    {
      question: 'How can I get started with Ravian AI?',
      answer: 'To get started with Ravian AI, simply contact us through our website or email to discuss your data analysis needs.',
    },
    {
      question: 'What industries does Ravian AI work with?',
      answer: 'Ravian AI works with a variety of industries, including healthcare, finance, and technology, to provide tailored data analysis solutions.',
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent text-center bg-clip-text bg-gradient-to-r from-white to-cyan-900 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#080C23] p-6 rounded-lg shadow-md"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-white">
                  {faq.question}
                </h3>
                <FontAwesomeIcon
                  icon={activeIndex === index ? faChevronUp : faChevronDown}
                  className="text-white"
                />
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;