import React from 'react';
import styled from 'styled-components';
import { AiOutlineMail } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";


export const ContactSection = () => {
  return (
    <div className="md:w-[30%] sm:w-[90%] text-[#323232] p-10 flex flex-col gap-5 ">
      {/* Header */}
      <h2 style={{fontSize:'25px',fontWeight:'900',}}className=" mb-2">Contact Details</h2>
      <p className="text-sm mb-4">
        Software Developer skilled in React.js and Tailwind CSS. Improved load
        times by 50% and enhanced user engagement by 30%.
      </p>

      {/* Contact Info */}
      <div className="space-y-4 text-[#323232] flex flex-col gap-6">
        <Contact icon={<AiOutlineMail size={30} />} label="Email" value="ahmedbajaou@gmail.com"  />
        <Contact icon={<FiPhoneCall  size={30} />} label="Phone" value="+212642829531"  />
        <Contact icon={<FiMapPin  size={30} />} label="Address" value="Ben Guerir, Hay My Rachid" />

        {/* Social Media */}
        <div className="flex items-center space-x-4 mt-4 gap-5">
          <a href="https://linkedin.com/in/ahmedbajaou" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
          <FaLinkedin size={40} />
          </a>
          <a href="https://github.com/ahbajaou" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
            
            <FaSquareGithub enableBackground={'#323232'} size={40}/>

          </a>
        </div>
      </div>
    </div>
  );
};

 const Contact  = ({ icon, label, value, link }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="text-xl">{icon}</div>
      <div>
        <h4 className="font-semibold">{label}</h4>
        {link ? (
          <a href={link} className="text-gray-200 hover:underline">
            {value}
          </a>
        ) : (
          <p>{value}</p>
        )}
      </div>
    </div>
  );
};

// export default ContactSection;

// export default Button;