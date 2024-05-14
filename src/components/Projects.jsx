

import React, { useEffect, useRef } from 'react';
import tributeImage from '../assets/tribute-website.png';
import groceryImage from '../assets/grocery-app.png';
import expenseImage from '../assets/expense-tracker.png';

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const handleAnimation = () => {
      const projects = projectsRef.current;
      if (projects) {
        const projectElements = projects.children;
        Array.from(projectElements).forEach((project, index) => {
          setTimeout(() => {
            project.style.opacity = 1;
            project.style.transform = 'translateX(0) translateY(0)';
          }, 200 * (index + 1));
        });
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          handleAnimation();
          observer.unobserve(entry.target);
        }
      });
    });

    const observerRefValue = projectsRef.current;
    observer.observe(observerRefValue);

    // Clean up the observer on component unmount
    return () => {
      if (observerRefValue) {
        observer.unobserve(observerRefValue);
      }
    };
  }, []);

  const projects = [
    {
      title: 'Tribute website',
      url: 'https://tribute-site-qs3m.vercel.app/',
      github: 'https://github.com/mounikapriyaguddanti/Tribute_Site',
      description:
        'Discover the legacy of APJ Abdul Kalam through our React-based tribute website. Dive into his remarkable journey from a scientist to the President of India. Explore his achievements, inspirational quotes, and lasting impact on education and innovation.',
      image: tributeImage,
    },
    {
      title: 'Grocery App',
      url: 'https://grocery-app-phi-eight.vercel.app/',
      github: 'https://github.com/mounikapriyaguddanti/Grocery_app',
      description:
        'React-based ecommerce site for groceries offers a seamless shopping experience. With a user-friendly interface, customers can easily browse, search, and purchase a wide range of grocery items.',
      image: groceryImage,
    },
    {
      title: 'Expense tracker',
      url: 'https://expense-tracker-via1.vercel.app/',
      github: 'https://github.com/mounikapriyaguddanti/expense-tracker',
      description:
        'React-based expense tracker simplifies financial management. With intuitive interfaces, users can effortlessly track expenses, categorize transactions, and analyze spending patterns. Through responsive design and seamless integration, it offers a convenient solution for individuals to monitor their finances effectively.',
      image: expenseImage,
    },
    // ... other projects
  ];
  
  return (
    <div className="bg-lavender-900 text-black py-20">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={projectsRef}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden opacity-0 transform translate-x-full translate-y-full"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <div className="flex justify-between">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-300"
                    
                  >
                    Visit Website
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors duration-300"
                  >
                    View GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
/* 



import React from 'react';
import tributeImage from '../assets/tribute-website.png';
import groceryImage from '../assets/grocery-app.png';
import expenseImage from '../assets/expense-tracker.png';

const Projects = () => {
 

 

  const projects = [
    {
      title: 'Tribute website',
      url: 'https://tribute-site-qs3m.vercel.app/',
      github: 'https://github.com/mounikapriyaguddanti/Tribute_Site',
      description:
        'Discover the legacy of APJ Abdul Kalam through our React-based tribute website. Dive into his remarkable journey from a scientist to the President of India. Explore his achievements, inspirational quotes, and lasting impact on education and innovation.',
      image: tributeImage,
    },
    {
      title: 'Grocery App',
      url: 'https://grocery-app-phi-eight.vercel.app/',
      github: 'https://github.com/mounikapriyaguddanti/Grocery_app',
      description:
        'React-based ecommerce site for groceries offers a seamless shopping experience. With a user-friendly interface, customers can easily browse, search, and purchase a wide range of grocery items.',
      image: groceryImage,
    },
    {
      title: 'Expense tracker',
      url: 'https://expense-tracker-via1.vercel.app/',
      github: 'https://github.com/mounikapriyaguddanti/expense-tracker',
      description:
        'React-based expense tracker simplifies financial management. With intuitive interfaces, users can effortlessly track expenses, categorize transactions, and analyze spending patterns. Through responsive design and seamless integration, it offers a convenient solution for individuals to monitor their finances effectively.',
      image: expenseImage,
    },
    // ... other projects
  ];

  return (
    <div className="bg-lavender-900 text-black py-20">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold mb-8">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <div className="flex justify-between">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-300"
                  >
                    Visit Website
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors duration-300"
                  >
                    View GitHub
                  </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default Projects; */