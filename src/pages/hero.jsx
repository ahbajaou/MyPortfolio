import React from 'react'
import { useTheme } from '../context/isDarkMood.jsx';
import Navbar from '../compoment/Navbar.jsx';
import Home from '../compoment/home.jsx';
import Scroll from '../compoment/scroll.jsx';
import Projects from './project.jsx';
import Footer from './Footer.jsx';
import { PopupProvider } from '../context/popupContext.jsx';

const Hero = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className="flex flex-col w-full overflow-hidden">
            <div className={`full-section ${isDarkMode ? 'grid-pattern-light' : 'grid-pattern-dark'}`}>
                <div className="container mx-auto px-4">
                    <PopupProvider>
                        <Navbar />
                    </PopupProvider>
                    <Home />
                </div>
                    <Scroll />
            </div>
            
            <div className={`w-full ${isDarkMode ? 'bg-white' : 'bg-[#121212]'}`}>
                <div className="container mx-auto px-4">
                    <Projects />
                </div>
            </div>
            
            {/* Footer section */}
            <div className={`w-full ${isDarkMode ? 'bg-white' : 'bg-[#121212]'} border-t-8 border-b-4 ${isDarkMode ? 'border-black' : 'border-white'}`}>
                <div className="container mx-auto px-4">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Hero;