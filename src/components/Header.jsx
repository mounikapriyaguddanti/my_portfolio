import React, { useEffect, useRef, useState } from 'react';

const Header = () => {
  const headerNameRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleTypeWriter = () => {
      const headerName = headerNameRef.current;
      const textArray = headerName.textContent.split('');
      let index = 0;
      const typeWriter = () => {
        if (index < textArray.length) {
          headerName.textContent = textArray.slice(0, index + 1).join('');
          index++;
          setTimeout(typeWriter, 200);
        } else {
          index = 0;
          headerName.textContent = '';
          setTimeout(typeWriter, 1000);
        }
      };
      typeWriter();
    };
    handleTypeWriter();
  }, []);

  const handleNavClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-purple-800 text-white">
      <nav className="container mx-auto flex items-center justify-between py-6">
        <div className="text-4xl font-bold">
          <span className="typewriter-effect" ref={headerNameRef}>
            MOUNIKA PRIYA GUDDANTI
          </span>
        </div>
        <div className="hidden md:flex space-x-10 text-xl">
          <a
            href="#"
            onClick={(e) => handleNavClick(e, 'hero')}
            className="hover:text-red-400 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#"
            onClick={(e) => handleNavClick(e, 'about')}
            className="hover:text-red-400 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#"
            onClick={(e) => handleNavClick(e, 'skills')}
            className="hover:text-red-400 transition-colors duration-300"
          >
            Skills
          </a>
          <a
            href="#"
            onClick={(e) => handleNavClick(e, 'Projects')}
            className="hover:text-red-400 transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#"
            onClick={(e) => handleNavClick(e, 'Contact')}
            className="hover:text-gray-400 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              onClick={(e) => handleNavClick(e, 'hero')}
              className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              onClick={(e) => handleNavClick(e, 'about')}
              className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#"
              onClick={(e) => handleNavClick(e, 'skills')}
              className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Skills
            </a>
            <a
              href="#"
              onClick={(e) => handleNavClick(e, 'Projects')}
              className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>
            <a
              href="#"
              onClick={(e) => handleNavClick(e, 'Contact')}
              className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;