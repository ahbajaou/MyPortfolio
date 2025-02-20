import './App.css';

import React from 'react';
import { useEffect, useRef, useState } from "react";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { BezierAnimation } from './compoment/animation.jsx'

import img from './assets/a.png'
import img1 from './assets/coding.png'

const YELLOW_COLOR = "#E1DACE";
const RED_COLOR = "#E1DACE";
const BLUE_COLOR = "#003366";
const BG_COLOR = "bg-[#E1DACE]";

const projects = [
  {
    id: 1,
    title: "Project Name",
    description:
      "Software Developer | Frontend Developer | React.js, Tailwind CSS | Delivered responsive projects with 50% faster load times and improved user engagement by 30%.",
    image: img1,
  },
  {
    id: 2,
    title: "Project Name",
    description:
      "Software Developer | Frontend Developer | React.js, Tailwind CSS | Delivered responsive projects with 50% faster load times and improved user engagement by 30%.",
    image: img1,
  },
  {
    id: 3,
    title: "Project Name",
    description:
      "Software Developer | Frontend Developer | React.js, Tailwind CSS | Delivered responsive projects with 50% faster load times and improved user engagement by 30%.",
    image: img1,
  },
];
const skills = [
  { id: 1, category: "Programming", skills: ["JavaScript", "React.js", "Django", "Three.js"] },
  { id: 2, category: "Soft Skills", skills: ["Teamwork", "Communication", "Problem-Solving"] },
];
const ProjectCard = ({ project }) => {
  return (
      <div className="bg-yellow-300 border-4 border-black shadow-[4px_4px_0px_black]  w-full sm:w-1/2 md:w-[20%] p-4 transition-all duration-300 hover:translate-x-1 hover:translate-y-1">
        <div className="bg-yellow-500 p-3 rounded-t-lg flex items-center border-b-4 border-black">
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-black rounded-full"></span>
            <span className="w-3 h-3 bg-black rounded-full"></span>
            <span className="w-3 h-3 bg-black rounded-full"></span>
          </div>
          <h3 className="text-center flex-1 font-bold">{project.title}</h3>
        </div>
        <img src={project.image} alt="Project" className="w-full rounded-md mt-2 border-4 border-black shadow-[4px_4px_0px_black]" />
        <p className="text-black font-bold mt-3">{project.description}</p>
        <button className="bg-[#024970] text-white px-4 py-2 rounded-md mt-3 shadow-[4px_4px_0px_black] border-4 border-black transition-all duration-300 hover:translate-x-1 hover:translate-y-1">
          View Project
        </button>
      </div>
  );
};

const LatestProjects = () => {
  return (
    <div className="py-10 px-4 md:px-20 md:h-screen ">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Projects</h2>
      <div className="flex flex-wrap md:flex-row justify-center  gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(skills[0]);

  return (
    <div className=" py-10 px-4 md:px-20 w-full md:h-[40rem]
     
    ">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="flex flex-col md:flex-row justify-center gap-10 md:h-[20rem]">
        <div className="flex flex-col gap-4">
          {skills.map((skill) => (
            <button
              key={skill.id}
              className={`bg-[#E1DACE] px-6 py-3 border-4 border-black shadow-[4px_4px_0px_black] font-bold text-lg
                       transition-all duration-300 hover:translate-x-1 hover:translate-y-1

                ${selectedCategory.id === skill.id ? 'bg-yellow-300' : ''}`}
              onClick={() => setSelectedCategory(skill)}
            >
              {skill.category}
            </button>
          ))}
        </div>
        <div className="bg-yellow-300 border-4 border-black shadow-[4px_4px_0px_black]  w-full md:w-2/3 p-6
                transition-all duration-300 hover:translate-x-1 hover:translate-y-1

        ">
          <div className="bg-yellow-500 p-3 rounded-t-lg flex items-center border-b-4 border-black">
            <div className="flex space-x-2">
              <span className="w-3 h-3 bg-black rounded-full"></span>
              <span className="w-3 h-3 bg-black rounded-full"></span>
              <span className="w-3 h-3 bg-black rounded-full"></span>
            </div>
            <h3 className="text-center flex-1 font-bold">{selectedCategory.category} Skills</h3>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            {selectedCategory.skills.map((skill, index) => (
              <span
                key={index}
                className=" bg-[#E1DACE] px-6 py-3 border-2 border-black  rounded-[24px] font-bold"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <><div className="w-full min-h-screen flex items-center justify-center flex-col">
      {/* <div className='absolute top-5 left-0 z-[3000]'>
       <BezierAnimation/>
      </div> */}
        <nav className="z-[2000] w-full sm:w-[90%] md:w-[80%] mx-auto my-5 flex justify-between items-center bg-[#E1DACE] px-6 py-3 rounded-lg border-4 border-black shadow-[6px_6px_0px_black] transition-all duration-300 hover:translate-x-1 hover:translate-y-1">
          <h1 className="font-bold text-3xl sm:text-4xl tracking-wide">AB.</h1>
          <ul className="hidden sm:flex space-x-4 md:space-x-8 font-semibold text-lg sm:text-xl">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Project</li>
          </ul>
        </nav>
        <div className=" z-[4000] w-full md:min-h-screen md:w-[80%] px-4 sm:px-10 flex flex-col sm:flex-row gap-10 sm:gap-20 items-center">
          <div className="text-center sm:text-left w-full sm:w-1/2">
            <h1 className="text-7xl md:text-9xl font-extrabold uppercase leading-[1.1]">
              WHO
              <span className="inline-flex items-center justify-center w-[80px] h-[80px] sm:w-[80px] sm:h-[80px] md:w-[150px] md:h-[150px] bg-[#024970] rounded-full text-black text-6xl sm:text-7xl md:text-9xl">
              IS</span> 
               AHMED
            </h1>
            <p className="mt-4 text-lg font-semibold">
              Aspiring Web Developer | React.js, TypeScript, Tailwind CSS | Seeking Internship to Contribute to Innovative Web Projects.
            </p>
            <button className="mt-6 bg-[#024970] px-5 sm:px-6 py-3 font-bold rounded-lg border-4 border-black shadow-[6px_6px_0px_black] transition-all duration-300 hover:translate-x-1 hover:translate-y-1">
              My Resume
            </button>
          </div>
        </div>
        <LatestProjects />
        <SkillsSection/>
      </div>
      <div className='min-h-64 w-full bg-[#024970] flex items-center justify-center'>
        <div className='text-[#E1DACE] text-center'>
          <h1 className='text-xl font-bold'>GET IN TOUCH</h1>
          <p>Connect with me on LinkedIn or email me at ahmedbajaou@gmail.com</p>
          <div className='flex justify-center mt-3 gap-3'>
            <TiSocialLinkedinCircular size={40} />
            <FaGithub size={40} />
          </div>
        </div>
      </div></>
  );
};

export default Portfolio;
