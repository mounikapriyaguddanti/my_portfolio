
import React, { useEffect, useRef } from 'react';
import certificate1 from '../assets/certificate1.jpg';
import certificate2 from '../assets/certificate2.jpg';
import certificate3 from '../assets/certificate3.jpg';
import certificate4 from '../assets/certificate4.jpg';

const Certifications = () => {
  const certificatesRef = useRef(null);

  useEffect(() => {
    const handleAnimation = () => {
      const certificates = certificatesRef.current;
      if (certificates) {
        const certificateElements = certificates.children;
        Array.from(certificateElements).forEach((certificate, index) => {
          setTimeout(() => {
            certificate.style.opacity = 1;
            certificate.style.transform = 'translateX(0) translateY(0)';
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

    const observerRefValue = certificatesRef.current;
    observer.observe(observerRefValue);

    // Clean up the observer on component unmount
    return () => {
      if (observerRefValue) {
        observer.unobserve(observerRefValue);
      }
    };
  }, []);

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Certifications</h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          ref={certificatesRef}
        >
          <div className="bg-white rounded-lg shadow-md overflow-hidden relative opacity-0 transform translate-x-full translate-y-full">
            <img
              src={certificate1}
              alt="Certificate 1"
              className="w-full transition-transform duration-300 hover:scale-110"
            />
            <div className="p-4 bg-gray-800 bg-opacity-75 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex items-center justify-center">
              <div>
                <h3 className="text-xl font-semibold mb-2">Cloud Computing, NPTEL</h3>
                <p>Issued by: Swayam (IIT Kharagpur)</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
            <img
              src={certificate2}
              alt="Certificate 2"
              className="w-full transition-transform duration-300 hover:scale-110"
            />
            <div className="p-4 bg-gray-800 bg-opacity-75 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex items-center justify-center">
              <div>
                <h3 className="text-xl font-semibold mb-2">Machine Learning with Python</h3>
                <p>Issued by:Spypro Security Solutions Pvt.Ltd</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
            <img
              src={certificate3}
              alt="Certificate 3"
              className="w-full transition-transform duration-300 hover:scale-110"
            />
            <div className="p-4 bg-gray-800 bg-opacity-75 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex items-center justify-center">
              <div>
                <h3 className="text-xl font-semibold mb-2">Artifical Intelligence</h3>
                <p>Issued by: BIST Technologies Pvt.Ltd</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
            <img
              src={certificate4}
              alt="Certificate 4"
              className="w-full transition-transform duration-300 hover:scale-110"
            />
            <div className="p-4 bg-gray-800 bg-opacity-75 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex items-center justify-center">
              <div>
                <h2 className="text-xl font-semibold mb-2">Ethical Hacking, NPTEL</h2>
                <p>Issued by: Swayam (IIT Kharagpur)</p>
              </div>
            </div>
          </div>
          {/* ... (remaining certificate cards) */}
        </div>
      </div>
    </div>
  );
};

export default Certifications;









/* 


import React, { useEffect, useRef } from 'react';
import certificate1 from '../assets/certificate1.jpg';
import certificate2 from '../assets/certificate2.jpg';
import certificate3 from '../assets/certificate3.jpg';
import certificate4 from '../assets/certificate4.jpg';

const Certifications = () => {
  const certificatesRef = useRef(null);

  useEffect(() => {
    const handleAnimation = () => {
      const certificates = certificatesRef.current;
      if (certificates) {
        const certificateElements = certificates.children;
        Array.from(certificateElements).forEach((certificate, index) => {
          setTimeout(() => {
            certificate.style.opacity = 1;
            certificate.style.transform = 'translateY(0)';
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

    const observerRefValue = certificatesRef.current;
    observer.observe(observerRefValue);

    // Clean up the observer on component unmount
    return () => {
      if (observerRefValue) {
        observer.unobserve(observerRefValue);
      }
    };
  }, []);

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Certifications</h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          ref={certificatesRef}
        >
          <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
            <img
              src={certificate1}
              alt="Certificate 1"
              className="w-full transition-transform duration-300 hover:scale-110"
            />
            <div className="p-4 bg-gray-800 bg-opacity-75 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex items-center justify-center">
              <div>
                <h3 className="text-xl font-semibold mb-2">Cloud Computing, NPTEL</h3>
                <p>Issued by: Swayam (IIT Kharagpur)</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
            <img
              src={certificate2}
              alt="Certificate 2"
              className="w-full transition-transform duration-300 hover:scale-110"
            />
            <div className="p-4 bg-gray-800 bg-opacity-75 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex items-center justify-center">
              <div>
                <h3 className="text-xl font-semibold mb-2">Machine Learning with Python</h3>
                <p>Issued by:Spypro Security Solutions Pvt.Ltd</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
            <img
              src={certificate3}
              alt="Certificate 3"
              className="w-full transition-transform duration-300 hover:scale-110"
            />
            <div className="p-4 bg-gray-800 bg-opacity-75 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex items-center justify-center">
              <div>
                <h3 className="text-xl font-semibold mb-2">Artifical Intelligence</h3>
                <p>Issued by: BIST Technologies Pvt.Ltd</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
            <img
              src={certificate4}
              alt="Certificate 4"
              className="w-full transition-transform duration-300 hover:scale-110"
            />
            <div className="p-4 bg-gray-800 bg-opacity-75 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex items-center justify-center">
              <div>
                <h2 className="text-xl font-semibold mb-2">Ethical Hacking, NPTEL</h2>
                <p>Issued by: Swayam (IIT Kharagpur)</p>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Certifications;
 */
/* import React, { useEffect, useRef } from 'react';
import certificate1 from '../assets/certificate1.jpg';
import certificate2 from '../assets/certificate2.jpg';
import certificate3 from '../assets/certificate3.jpg';
import certificate4 from '../assets/certificate4.jpg';

const Certifications = () => {
  const certificatesRef = useRef(null);

  useEffect(() => {
    const handleAnimation = () => {
      const certificates = certificatesRef.current;
      if (certificates) {
        const certificateElements = certificates.children;
        Array.from(certificateElements).forEach((certificate, index) => {
          setTimeout(() => {
            certificate.style.opacity = 1;
            certificate.style.transform = 'translateY(0)';
          }, 200 * (index + 1));
        });
      }
    };
    handleAnimation();
  }, []);

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" ref={certificatesRef}>
          <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
            <img src={certificate1} alt="Certificate 1" className="w-full transition-transform duration-300 hover:scale-110" />
            <div className="p-4 absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-semibold mb-2">Cloud Computing, NPTEL</h3>
              <p>Issued by: Swayam (IIT Kharagpur)</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
            <img src={certificate2} alt="Certificate 2" className="w-full transition-transform duration-300 hover:scale-110" />
            <div className="p-4 absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-semibold mb-2">Machine Learning with Python</h3>
              <p>Issued by:Spypro Security Solutions Pvt.Ltd</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
            <img src={certificate3} alt="Certificate 3" className="w-full transition-transform duration-300 hover:scale-110" />
            <div className="p-4 absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-semibold mb-2">Artifical Intelligence</h3>
              <p>Issued by: BIST Technologies Pvt.Ltd</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
            <img src={certificate4} alt="Certificate 4" className="w-full transition-transform duration-300 hover:scale-110" />
            <div className="p-4 absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-semibold mb-2">Ethical Hacking, NPTEL</h3>
              <p>Issued by:Swayam (IIT Kharagpur)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications; */