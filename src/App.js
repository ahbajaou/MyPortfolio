
import './App.css';

import React from 'react';
import { useEffect, useRef, useState } from "react";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { BezierAnimation } from './compoment/animation.jsx'
import { Switch } from './compoment/switch.jsx'
import { Button } from './compoment/button.jsx'
import { Form } from './compoment/form.jsx'
import { ContactSection } from './compoment/contact.jsx';
import { FaCloudUploadAlt } from "react-icons/fa";


import Myresume  from './assets/ahmed_bajaou.pdf'
import img from './assets/a.png'
import img1 from './assets/trance.png'
import img2 from './assets/lingo.png'
import img3 from './assets/webserver.png'
import img4 from './assets/inception.png'

const YELLOW_COLOR = "#E1DACE";
const RED_COLOR = "#E1DACE";
const BLUE_COLOR = "#003366";
const BG_COLOR = "bg-[#E1DACE]";

const projects = [
  {
    id: 1,
    title: "ft_trancendence",
    description:
    "ft_transcendence – A single-page application (SPA) web game developed with Vanilla JavaScript, Bootstrap CSS, and Figma for UI/UX design, offering an interactive gaming experience.",
    image: img1,
    link : 'https://github.com/ahbajaou/chatbot',
  },
  {
    id: 2,
    title: "LingoPal",
    description:
    "LingoPal – A language-learning web app built with React.js Figma and Tailwind CSS, designed to help users learn English through interactive lessons and AI-powered guidance.   ",
    image: img2,
    link : 'https://github.com/ahbajaou/chatbot',
  },
  {
    id: 2,
    title: "Web Server",
    description:
    "Web Server (C++ & epoll) – A high-performance web server built using C++ and the epoll system call, designed to handle multiple client connections efficiently, similar to Nginx.",
    image: img3,
    link : 'https://github.com/ahbajaou/web-server',
  },
  {
    id: 3,
    title: "Inception",
    description:
    "Inception – A Dockerized environment that sets up WordPress, MariaDB, and Nginx in isolated containers, ensuring efficient deployment and management of web applications.",
    image: img4,
    link : 'https://github.com/ahbajaou/inception',
  },
];

const skills = [
  { id: 1, category: "Programming", skills: ["JavaScript", "React.js", "Typescript", "C/C++" , "Git" ,"Docker","Figma","Tailwind CSS","Bootstrap CSS" ] },
  { id: 2, category: "Soft Skills", skills: ["Teamwork & Collaboration", "Communication", "Problem-Solving" , "Adaptability" ," Time Management" , "Creativity & Innovation" , "Leadership & Initiative"] },
];

const ProjectCard = ({ project }) => {

  
    const redirectToGitHub = () => {
      window.location.href = project.link;
    }

  return (
      <div className="bg-[#E1DACE] border-4 p-5 border-[#323232] shadow-[4px_4px_0px_#323232]  w-[90%]  md:w-[20%]  transition-all duration-300 hover:translate-x-1 hover:translate-y-1">
        <div className="bg-[#E1DACE] p-3 w-full flex items-center border-b-4 border-[#323232]">
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-[#323232] rounded-full"></span>
            <span className="w-3 h-3 bg-[#323232] rounded-full"></span>
            <span className="w-3 h-3 bg-[#323232] rounded-full"></span>
          </div>
          <h3 className="text-center text-[#323232] flex-1 font-bold">{project.title}</h3>
        </div>
        <img src={project.image} alt="Project" className="w-full  mt-2 border-4 border-[#323232] shadow-[4px_4px_0px_#323232]" />
        <p className="text-black font-bold mt-3">{project.description}</p>
        <button onClick={redirectToGitHub}  className="bg-[#024970] text-white px-4 py-2  mt-3 border-[#323232] shadow-[6px_6px_0px_#323232]g border-4 transition-all duration-300 hover:translate-x-1 hover:translate-y-1">
          View Project
        </button>
      </div>
  );
};



const Navbar = () => {
  const scrollToPage = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="z-[1000] fixed top-0 left-50 h-[70px] w-[90%] md:w-[25%] md:gap-10 gap-5 m-5 flex justify-center items-center bg-[#E1DACE] border-4 border-[#323232] shadow-[6px_6px_0px_#323232]">
      <ul className="flex md:gap-8 gap-4 font-semibold text-[#323232]">
        <li onClick={() => scrollToPage("home")} className="hover:bg-[#FFC567] text-center text-[16px] hover:w-[70px] hover:border-2 hover:border-black hover:shadow-[4px_4px_0px_black]">Home</li>
        <li onClick={() => scrollToPage("projects")} className="hover:bg-[#FFC567] text-center text-[16px] hover:w-[70px] hover:border-2 hover:border-black hover:shadow-[4px_4px_0px_black]">Projects</li>
        <li onClick={() => scrollToPage("skills")} className="hover:bg-[#FFC567] text-center text-[16px] hover:w-[70px] hover:border-2 hover:border-black hover:shadow-[4px_4px_0px_black]">Skills</li>
        <li onClick={() => scrollToPage("contact")} className="hover:bg-[#FFC567] text-center text-[16px] hover:w-[70px] hover:border-2 hover:border-black hover:shadow-[4px_4px_0px_black]">Contact</li>
      </ul>
      {/* <Switch/> */}
    </nav>
  );
};


const Home = () => {
  return (
    <section id="home" className="min-h-screen w-full flex flex-col justify-center items-center p-3">
      {/* <div className='absolute top-5 left-0 z-[3000]'>
       <BezierAnimation/>
      </div> */}

        <div className=" text-[#323232] w-full md:min-h-screen md:w-[80%] px-4 md:mt-0 mt-20 sm:px-10 flex lg:flex-row ms:flex-col-reverse md:flex-col-reverse
            flex-col-reverse md:gap-[10%] sm:gap-20 items-center">
          <div className="text-center sm:text-left w-full sm:w-1/2 md:flex md:flex-col md:gap-20">
            <h1 className="text-7xl md:text-9xl font-extrabold uppercase leading-[1.1]">
              WHO
              <span className="inline-flex items-center justify-center w-[80px] h-[80px] sm:w-[80px] sm:h-[80px] md:w-[150px] md:h-[150px] bg-[#024970] rounded-full text-[#323232] text-6xl sm:text-7xl md:text-9xl">
              IS</span> 
               AHMED
            </h1>
            <p className="mt-4 text-lg font-semibold text-black">  
              Aspiring Web Developer | React.js, TypeScript, Tailwind CSS | Seeking Internship to Contribute to Innovative Web Projects.
            </p>
            <a 
            href={Myresume} // Path to your file
            download="Ahmed_Bajaou_Resume.pdf" // File name when downloaded            
            className=" flex items-center justify-center gap-5 md:w-[30%] mt-6 bg-[#024970] px-5 sm:px-6 py-3 font-bold text-[#E1DACE] border-4 border-[#323232] shadow-[6px_6px_0px_#323232] transition-all duration-300 hover:translate-x-1 hover:translate-y-1">
            <FaCloudUploadAlt size={20}/>
            My Resume
            </a>
          </div>
          <div className=' w-full sm:w-1/2 md:flex md:flex-col md:gap-20'>
            <div className="relative mt-5 md:mt-0 ">
              <div className={` rounded-lg p-6  relative flex flex-col items-center transition-all duration-300 hover:translate-x-1 hover:translate-y-1`}>
                <img
                  src={img} // Replace with actual image
                  alt="Ahmed Bajaou"
                  className=" w-[80%] h-[80%] object-cover md:mt-0 mt-[0%] " />
                <div className="absolute -bottom-6 bg-[#E1DACE] px-4 py-2 border-4 border-[#323232] shadow-[6px_6px_0px_#323232] text-center  
                    sm:w-[30%] sm:h-[10%] top-[70%] left-[0] 
                    w-[42%] h-[14%] md:top-[76%] md:left-[0] ">
                  <p className="font-bold text-[60%] md:text-[100%]">Ahmed Bajaou</p>
                  <p className="text-[60%] font-bold md:text-[100%]">Software Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

const Skills = () => {

  const [selectedCategory, setSelectedCategory] = useState(skills[0]);
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-orange-500",
  ];
  return (
    <section id="skills" className="min-h-screen w-full flex flex-col justify-center items-center">
      <div className='w-full  h-[15%]  text-center'>
        <Button name="Skills" />
      </div>
      <div className=" py-10 px-4 md:px-20 w-full 
     
     ">
       <div className='flex items-center justify-center mb-10' >
       </div>
       <div className="flex flex-col md:flex-row justify-center gap-10 md:h-[20rem]">
         <div className="flex flex-col gap-4">
           {skills.map((skill) => (
             <button
               key={skill.id}
               className={` px-6 py-3 border-4 border-[#323232] shadow-[4px_4px_0px_#323232] font-bold text-lg
                        transition-all duration-300 hover:translate-x-1 hover:translate-y-1 
 
                 ${selectedCategory.id === skill.id ? 'bg-primary' : ''} ${selectedCategory.id === skill.id ? 'text-white' : 'text-[#323232]'} ${selectedCategory.id === skill.id ? 'bg-[#024970]' : 'bg-[#E1DACE]'}`}
               onClick={() => setSelectedCategory(skill)}
             >
               {skill.category}
             </button>
           ))}
         </div>
         <div className="bg-[#E1DACE] border-4 border-[#323232] shadow-[6px_4px_0px_#323232]  w-full md:w-2/3 
                 transition-all duration-300 hover:translate-x-1 hover:translate-y-1
 
         ">
           <div className="bg-[#E1DACE] p-3 rounded-t-lg flex items-center border-b-4 border-[#323232]">
             <div className="flex space-x-2">
               <span className="w-3 h-3 bg-[#323232] rounded-full"></span>
               <span className="w-3 h-3 bg-[#323232] rounded-full"></span>
               <span className="w-3 h-3 bg-[#323232] rounded-full"></span>
             </div>
             <h3 className="text-center flex-1 font-bold">{selectedCategory.category} Skills</h3>
           </div>
           <div className="flex flex-wrap gap-4 mt-4 p-6">
              {selectedCategory.skills.map((skill, index) => (
                <span
                  key={index}
                  className={`${colors[index % colors.length]} text-white px-6 py-3 border-2 border-[#323232] shadow-[4px_4px_0px_#323232] rounded-[24px] font-bold`}
                >
                  {skill}
                </span>
              ))}
            </div>
         </div>
       </div>
     </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="project  min-h-screen w-full flex flex-col justify-center items-center gap-10">
      <div className='w-full min-h-[100%] text-center'>
        <Button name="Project" />
      </div>
      <div className="flex flex-wrap md:flex-row justify-center  gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

const ContactDetail = () => {
  return (
    <section id="contact" className=" contact w-full min-h-screen flex flex-row justify-center items-center gap-10">
      <div className="min-h-screen gap-20 flex md:flex-row justify-center items-center flex-col p-10 md:p-0">
          <Form/>
          <ContactSection />
          {/* <ContactSection /> */}
      </div>
      {/* <div className="w-1/2 min-h-screen flex flex-row justify-center items-center">
      </div> */}
    </section>
  );
};

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <ContactDetail />
    </div>
  );
};

export default App;
