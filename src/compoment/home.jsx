import Myresume from '../assets/ahmed_bajaou.pdf';
import img from '../assets/cheb.png';
import { FaCloudUploadAlt } from "react-icons/fa";
import { useTheme } from '../context/isDarkMood.jsx';
import { useState, useEffect } from 'react';
import Scroll from './scroll.jsx';

const Home = () => {
  const { isDarkMode } = useTheme();
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const greetings = [
    "Salam!",
    "مرحبا!",
    "Hello!",
    "Bonjour!",
    "¡Hola!",
    "你好!",
    "Azul!"
  ];

  // Typing animation effect
  useEffect(() => {
    const greeting = greetings[currentGreeting];
    
    if (isTyping) {
      if (displayText.length < greeting.length) {
        const timer = setTimeout(() => {
          setDisplayText(greeting.slice(0, displayText.length + 1));
        }, 150);
        return () => clearTimeout(timer);
      } else {
        // Wait a bit when typing is complete before starting to delete
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 1000);
        return () => clearTimeout(timer);
      }
    } else {
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, displayText.length - 1));
        }, 80);
        return () => clearTimeout(timer);
      } else {
        // When deletion is complete, move to next greeting
        setCurrentGreeting((prev) => (prev + 1) % greetings.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentGreeting, greetings]);

  return (
    <section id="home" className="min-h-screen w-full flex flex-col justify-center items-center">
      <div className={` ${isDarkMode ? 'text-black' : 'text-white'} w-full md:min-h-screen md:w-[90%] px-4 md:mt-0  sm:px-10 flex lg:flex-row 
            flex-col  md:flex-row items-center`}>
          <div className="text-center sm:text-left w-full sm:w-1/2 md:flex md:flex-col ">
            {/* Typing Animation Greeting Section */}
            <div className="mb-6 flex flex-col">
              <div className="h-16 flex items-center">
                <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-[#024970]' : 'text-[#FFE863]'}`}>
                  {displayText}
                  <span className="inline-block w-0.5 h-8 bg-current animate-pulse ml-1"></span>
                </h2>
              </div>
            </div>
            
            {/* "Who is Ahmed" heading */}
            <h1 className="text-5xl md:text-6xl font-extrabold uppercase leading-[1.1]">
              WHO
              <span className={` ${isDarkMode ? 'text-black' : 'text-white'} inline-flex items-center justify-center w-[60px] h-[60px] sm:w-[60px] sm:h-[60px] md:w-[90px] md:h-[90px] bg-[#024970] rounded-full text-4xl sm:text-5xl md:text-6xl`}>
              IS</span> 
               AHMED
            </h1>
            
            <p className={`mt-4 text-left text-lg font-semibold ${isDarkMode ? 'text-black' : 'text-white'} `}>  
            Ahmed Bajaou – Software Engineer, I have two years of experience developing innovative software solutions. 
            I am passionate about leveraging technology to solve real-world challenges.            </p>
            
            <a 
            href={Myresume}
            download="Ahmed_Bajaou_Resume.pdf"            
            style={{width:'fit-content',height:'fit-content'}} className=" flex items-center justify-center gap-5  mt-6 bg-[#024970] px-5 sm:px-6 py-3 font-bold text-[#E1DACE] border-4 border-[black] shadow-[6px_6px_0px_black] transition-all duration-300 hover:translate-x-1 hover:translate-y-1">
            <FaCloudUploadAlt size={20}/>
            My Resume
            </a>
          </div>
          
          {/* Right side with image */}
          
          <div className=' w-full sm:w-1/2 md:flex md:flex-col md:gap-20'>
            <div className="relative mt-5 md:mt-0 ">
              <div className={` rounded-lg p-6  relative flex flex-col items-center transition-all duration-300 hover:translate-x-1 hover:translate-y-1`}>
                <img
                  src={img}
                  alt="Ahmed Bajaou"
                  className=" w-[100%] h-[100%] object-cover md:mt-0 mt-[0%] " />
                <div style={{width:'fit-content',height:'fit-content'}} 
                className={`absolute -bottom-6 ${isDarkMode ? 'bg-[#FFE863] text-black' : 'bg-[#121212] text-white'}  px-4 py-2 border-4 border-[black] shadow-[6px_6px_0px_black] text-center  
                     top-[70%] left-[0] 
                    md:top-[76%] md:left-[0] `}>
                  <p className="font-bold text-[60%] md:text-[100%]">Ahmed Bajaou</p>
                  <p className="text-[60%] font-bold md:text-[100%]">Software Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Scroll /> */}
    </section>
  );
};

export default Home;