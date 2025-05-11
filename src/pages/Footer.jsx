import React from 'react'
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import { useTheme } from "../context/isDarkMood";

const Footer = () => {
  const { isDarkMode } = useTheme();
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${isDarkMode ? 'bg-white text-black' : 'bg-[#121212] text-white'} pt-10 pb-4`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">QUICK LINKS</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="inline-flex items-center hover:translate-x-1 transition-transform">
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="inline-flex items-center hover:translate-x-1 transition-transform">
                  <span>Projects</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/ahbajaou" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:translate-x-1 transition-transform"
                >
                  <span>Blog</span>
                  <FaArrowRight className="ml-1 text-xs" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Get In Touch Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">GET IN TOUCH!</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/ahbajaou" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${isDarkMode ? 'hover:text-gray-700' : 'hover:text-gray-300'} transition-colors`}
              >
                <FaGithub size={32} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ahmed-bajaou/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${isDarkMode ? 'hover:text-gray-700' : 'hover:text-gray-300'} transition-colors`}
              >
                <FaLinkedin size={32} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className={`w-full h-[5px] ${isDarkMode ? 'bg-[#121212]' : 'bg-white'} my-6`}></div>
        
        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xl text-bold">
          <p>© {currentYear} Ahmed Bajaou | Built with ❤️</p>
          <div className={`mt-4 md:mt-0 px-4 py-2 text-bold ${isDarkMode ? 'bg-[#121212] text-white' : 'bg-white text-black'}`}>
            &lt;/&gt; with React.js + Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;