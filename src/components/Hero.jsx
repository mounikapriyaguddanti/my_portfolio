/* import React from 'react';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-500 py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-5xl font-bold mb-4 text-white">Hi, It's Me</h1>
            <h2 className="text-4xl font-semibold mb-4 text-white">Mounika Priya Guddanti</h2>
            <p className="text-lg mb-8 text-white">
              Looking for a challenging role in a organization to use my technical, and management skills to grow the organization and learn about new trends.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/mounika-priya-g-7a230728b" className="text-blue-600 hover:text-red-600" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin fa-3x"></i>
              </a>
              <a href="https://www.instagram.com/mounika___28?igshid=MWY1NGVnMm16MnBzbQ==" className="text-pink-600 hover:text-red-600" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram fa-3x"></i>
              </a>
              <a href="https://github.com/mounikapriyaguddanti" className="text-black-600 hover:text-red-600" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github fa-3x"></i>
              </a>
              <a href="https://www.facebook.com/mounikapriya.guddanti?mibextid=ZbWKwL" className="text-blue-600 hover:text-red-600" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook fa-3x"></i>
              </a>
            </div>
          </div>
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl"></div>
              <div className="relative">
                <img src={profileImage} alt="Profile" className="w-full max-w-sm rounded-full border-4 border-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; */

/* 
import React from 'react';
import profileImage from '../assets/profile.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-500 py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            className="lg:w-1/2 mb-8 lg:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-5xl font-bold mb-4 text-white">Hi, It's Me</h1>
            <h2 className="text-4xl font-semibold mb-4 text-white">Mounika Priya Guddanti</h2>
            <p className="text-lg mb-8 text-white">
              Looking for a challenging role in a organization to use my technical, and management skills to grow the organization and learn about new trends.
            </p>
            <div className="flex space-x-4">
          
            </div>
          </motion.div>
          <motion.div
            className="lg:w-1/3 mt-8 lg:mt-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl"></div>
              <div className="relative">
                <img src={profileImage} alt="Profile" className="w-full max-w-sm rounded-full border-4 border-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; */
import React from 'react';
import profileImage from '../assets/profile.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-500 py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            className="lg:w-1/2 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-5xl font-bold mb-4 text-white">Hi, It's Me</h1>
            <h2 className="text-4xl font-semibold mb-4 text-white">Mounika Priya Guddanti</h2>
            <p className="text-lg mb-8 text-white">
              Looking for a challenging role in a organization to use my technical, and management skills to grow the organization and learn about new trends.
            </p>
            <div className="flex space-x-4">
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/mounika-priya-g-7a230728b" className="text-blue-600 hover:text-red-600" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin fa-3x"></i>
              </a>
              <a href="https://www.instagram.com/mounika___28?igshid=MWY1NGVnMm16MnBzbQ==" className="text-pink-600 hover:text-red-600" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram fa-3x"></i>
              </a>
              <a href="https://github.com/mounikapriyaguddanti" className="text-black-600 hover:text-red-600" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github fa-3x"></i>
              </a>
              <a href="https://www.facebook.com/mounikapriya.guddanti?mibextid=ZbWKwL" className="text-blue-600 hover:text-red-600" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook fa-3x"></i>
              </a>
            </div>
              {/* Social links */}
            </div>
          </motion.div>
          <motion.div
            className="lg:w-1/3 mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl"></div>
              <div className="relative">
                <img src={profileImage} alt="Profile" className="w-full max-w-sm rounded-full border-4 border-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;