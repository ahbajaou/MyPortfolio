import React from 'react';
import { IoLogoCss3 } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { LuFigma } from "react-icons/lu";
import { SiCplusplus } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { useTheme } from "../context/isDarkMood";


const Scroll = () => {
  const { isDarkMode } = useTheme();
  
  const techStack = [
    { name: "HTML", icon: <FaHtml5 size={40} />, color: `${isDarkMode ? "#121212" : "white"}` },
    { name: "CSS", icon: <IoLogoCss3 size={40} />, color: `${isDarkMode ? "#121212" : "white"}` },
    { name: "JavaScript", icon: <IoLogoJavascript size={40} />, color: `${isDarkMode ? "#121212" : "white"}` },
    { name: "React", icon: <FaReact size={40} />, color: `${isDarkMode ? "#121212" : "white"}` },
    { name: "Tailwind", icon: <SiTailwindcss size={40} />, color: `${isDarkMode ? "#121212" : "white"}` },
    { name: "TypeScript", icon: <SiTypescript size={40} />, color: `${isDarkMode ? "#121212" : "white"}` },
    { name: "Figma", icon: <LuFigma size={40} />, color: `${isDarkMode ? "#121212" : "white"}` },
    { name: "C++", icon: <SiCplusplus size={40} />, color: `${isDarkMode ? "#121212" : "white"}` },
    { name: "Docker", icon: <FaDocker size={40} />, color: `${isDarkMode ? "#121212" : "white"}` },
    { name: "Git", icon: <FaGitSquare size={40} />, color: `${isDarkMode ? "#121212" : "white"}` },
    { name: "Node.js", icon: <FaNodeJs size={40} />, color: `${isDarkMode ? "#121212" : "white"}` },
    
  ];

  return (
    <div className={`w-full  overflow-hidden ${isDarkMode ? 'bg-white' : 'bg-[#121212]'} border-t-4 border-b-4 ${isDarkMode ? 'border-black' : 'border-white'} shadow-[6px_4px_0px_black]`}>
      <div className="relative flex items-center whitespace-nowrap  animate-scroll">
        {/* First set of icons */}
        {techStack.map((tech, index) => (
          <div 
            key={`tech-1-${index}`} 
            className={`flex flex-row gap-5 items-center justify-center mx-12 ${isDarkMode ? 'text-black' : 'text-white'}`}
          >
            <div className="icon-container">
              <span style={{ color: tech.color }}>{tech.icon}</span>
            </div>
            <span className="mt-2 font-bold text-3xl">{tech.name}</span>
          </div>
        ))}
        
        {/* Duplicate for seamless scrolling */}
        {techStack.map((tech, index) => (
          <div 
            key={`tech-2-${index}`} 
            className={`flex flex-col items-center justify-center mx-12 ${isDarkMode ? 'text-black' : 'text-white'}`}
          >
            <div className="icon-container">
              <span style={{ color: tech.color }}>{tech.icon}</span>
            </div>
            <span className="mt-2 font-medium text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scroll;