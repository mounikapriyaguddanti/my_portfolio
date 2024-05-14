import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const About = () => {
  const controls = useAnimation();

  useEffect(() => {
    const animateCards = async () => {
      await controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeInOut', staggerChildren: 0.3 },
      });
    };

    animateCards();
  }, [controls]);

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 py-20">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="text-center text-4xl font-bold mb-8 text-white"
        >
          About Me
        </motion.h2>
        <motion.div
          initial="initial"
          animate={controls}
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1 },
          }}
          transition={{ duration: 0.8, ease: 'easeInOut', staggerChildren: 0.3 }}
          className="flex flex-col md:flex-row justify-center items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="md:w-1/2 p-8 bg-white rounded-lg shadow-lg mb-8 md:mb-0 md:mr-8"
          >
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Who I Am</h3>
            <p className="text-lg mb-4 text-gray-700">
              I'm Mounika Priya Guddanti, a passionate B.Tech student in Electronics and Communication
              Engineering, driven by a thirst for knowledge and a desire to excel.
            </p>
            <p className="text-lg mb-4 text-gray-700">
              With a strong academic foundation and a remarkable CGPA of 9.35, I constantly strive for
              excellence, both in my studies and extracurricular endeavors.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="md:w-1/2 p-8 bg-white rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-pink-700">My Journey</h3>
            <p className="text-lg mb-4 text-gray-700">
              My journey began with a foundation in Mathematics, Physics, and Chemistry, where I
              achieved outstanding academic result of 9.9 CGPA,and in my schooling also with an CGPA of 9.8.
            </p>
            <p className="text-lg mb-4 text-gray-700">
              Alongside my studies, I actively engage in extracurricular activities, honing my
              leadership, teamwork, and problem-solving skills, while also receiving recognition for
              my academic achievements.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-lg text-white">
            Driven by a passion for learning and growth, I'm excited to embark on new challenges and
            opportunities that come my way.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;