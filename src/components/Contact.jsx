import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 py-20">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold text-white mb-8">Contact me!</h2>
        <h1 className="text-center text-lg text-black-400 mb-8">
          For inquiries, please email me at{' '}
          <a href="mailto:mounikapriyaguddanti@gmail.com" className="text-white hover:text-gray-600">
            mounikapriyaguddanti@gmail.com
          </a>
          . I'll get back to you as soon as possible.
        </h1>
        <div className="flex justify-center space-x-4 mb-8">
        <a href="  https://www.linkedin.com/in/mounika-priya-g-7a230728b " className="text-blue-600 hover:text-red-600">
              <i className="fab fa-linkedin fa-3x"></i>
            </a>
            <a href="https://www.instagram.com/mounika___28?igsh=MWY1NGVnMm16MnBzbQ==" className="text-pink-600 hover:text-red-600">
              <i className="fab fa-instagram fa-3x"></i>
            </a>
            <a href="https://github.com/mounikapriyaguddanti" className="text-gray-600 hover:text-red-600">
              <i className="fab fa-github fa-3x"></i>
            </a>
            <a href="https://www.facebook.com/mounikapriya.guddanti?mibextid=ZbWKwL" className="text-blue-600 hover:text-red-600">
              <i className="fab fa-facebook fa-3x"></i>
            </a>
        </div>

  
      </div>
    </div>
  );
};

export default Contact;