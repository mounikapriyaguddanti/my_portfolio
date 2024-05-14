
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const skillsVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
        staggerChildren: 0.2,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-20">
      <div className="container mx-auto">
      <h2 className="text-center text-4xl font-bold mb-8">Skills</h2>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="text-center text-4xl font-bold mb-8"
        >
          Skills
        </motion.h2>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={skillsVariants}
          className="grid grid-cols-2 md:grid-cols-5 gap-8"
        >
         
          <motion.div variants={skillVariants} className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-blue-600 flex items-center justify-center">
                <i className="fab fa-python fa-3x"></i>
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-white border-dashed animate-spin"></div>
            </div>
            <h3 className="text-xl font-semibold">Python</h3>
          </motion.div>
          <motion.div variants={skillVariants} className="text-center">
        
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="absolute inset-0 rounded-full bg-cyan-600 flex items-center justify-center">
                <i className="fab fa-html5 fa-3x"></i>
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-white border-dashed animate-spin"></div>
            </div>
            <h3 className="text-xl font-semibold">HTML</h3>
 
          </motion.div>
          <motion.div variants={skillVariants} className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="absolute inset-0 rounded-full bg-blue-600 flex items-center justify-center">
                <i className="fab fa-css3-alt fa-3x"></i>
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-white border-dashed animate-spin"></div>
            </div>
            <h3 className="text-xl font-semibold">CSS</h3>
          </motion.div>
          <motion.div variants={skillVariants} className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="absolute inset-0 rounded-full bg-cyan-600 flex items-center justify-center">
                <i className="fab fa-js fa-3x"></i>
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-white border-dashed animate-spin"></div>
            </div>
            <h3 className="text-xl font-semibold">JavaScript</h3>
          </motion.div>
          <motion.div variants={skillVariants} className="text-center">
    
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="absolute inset-0 rounded-full bg-blue-600 flex items-center justify-center">
                <i className="fab fa-react fa-3x"></i>
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-white border-dashed animate-spin"></div>
            </div>
            <h3 className="text-xl font-semibold">React</h3>
          </motion.div>
          
          {/* ... repeat for other skills */}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;







/* import React from 'react';

const Skills = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="absolute inset-0 rounded-full bg-red-600 flex items-center justify-center">
                <i className="fab fa-python fa-3x"></i>
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-white border-dashed animate-spin"></div>
            </div>
            <h3 className="text-xl font-semibold">Python</h3>
          </div>
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="absolute inset-0 rounded-full bg-red-600 flex items-center justify-center">
                <i className="fab fa-html5 fa-3x"></i>
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-white border-dashed animate-spin"></div>
            </div>
            <h3 className="text-xl font-semibold">HTML</h3>
          </div>
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="absolute inset-0 rounded-full bg-red-600 flex items-center justify-center">
                <i className="fab fa-css3-alt fa-3x"></i>
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-white border-dashed animate-spin"></div>
            </div>
            <h3 className="text-xl font-semibold">CSS</h3>
          </div>
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="absolute inset-0 rounded-full bg-red-600 flex items-center justify-center">
                <i className="fab fa-js fa-3x"></i>
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-white border-dashed animate-spin"></div>
            </div>
            <h3 className="text-xl font-semibold">JavaScript</h3>
          </div>
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="absolute inset-0 rounded-full bg-red-600 flex items-center justify-center">
                <i className="fab fa-react fa-3x"></i>
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-white border-dashed animate-spin"></div>
            </div>
            <h3 className="text-xl font-semibold">React</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills; */