import React from 'react'
import { useTheme } from '../context/isDarkMood.jsx';
import Navbar from '../compoment/Navbar.jsx';
import Home from '../compoment/home.jsx';
import Scroll from '../compoment/scroll.jsx';
import Projects from './project.jsx';
import Footer from './Footer.jsx';

const Hero = () => {
    const { isDarkMode } = useTheme();
  return (
      <div className='flex flex-col justify-center items-center'>
        <div className={`${isDarkMode ? 'grid-pattern-light' : 'grid-pattern-dark'} `}>
        <Navbar />
          <Home />
          <Scroll/>
        </div>
        <div className={`w-full ${isDarkMode ? 'bg-white' : 'bg-[#121212]'}`}>
            <Projects />
        </div>
        <div className={`w-full  ${isDarkMode ? 'bg-white' : 'bg-[#121212]'} border-t-8 border-b-4 ${isDarkMode ? 'border-black' : 'border-white'} shadow-[6px_4px_0px_black]`}>
            <Footer />
        </div>
      </div>
  )
}

export default Hero;
