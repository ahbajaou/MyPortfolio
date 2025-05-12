import React, { useState } from 'react';
import { useTheme } from '../context/isDarkMood';
import toast, { Toaster } from 'react-hot-toast';
import { usePopup } from '../context/popupContext';


const owner = 'ahmedbajaou@gmail.com';
export const Form = () => {
  const { isDarkMode } = useTheme();
  const { closePopup } = usePopup();
  const [formData, setFormData] = useState({
    to: owner,
    subject: '',
    text: ''
  });

  const SendEmail = async (event) => {
    event.preventDefault();

    toast.success('Email Sent Successfully!', {
      style: {
        background: isDarkMode ? '#ffff' : '#121212',
        color: isDarkMode ? '#000' : '#fff',
        border: `2px solid ${isDarkMode ? '#000' : '#000'}`,
        boxShadow: `6px 6px 0px ${isDarkMode ? '#000' : '#000'}`,
        padding: '16px',
      },
    });

    try {
      const response = await fetch(process.env.REACT_APP_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setFormData({
        to: '',
        subject: '',
        text: ''
      });
      closePopup(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      to: owner,
      subject: name === 'subject' ? value : formData.subject,
      text: name === 'text' ? value : formData.text,
    })
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center p-4 
        ${!isDarkMode ? 'bg-black bg-opacity-75' : 'bg-gray-100 bg-opacity-75'
        }`}
    >
      <div
        className={`w-full max-w-md p-6 rounded-lg border-4 border-black 
        shadow-[6px_4px_0px_black] ${!isDarkMode ? 'bg-[#121212] text-white' : 'bg-white text-gray-800'
          }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Get in Touch</h2>
          <button
            className="text-gray-500 hover:text-gray-700 w-6 h-6 border-2 border-black  flex items-center justify-center shadow-[6px_4px_0px_black] hover:translate-y-1 transition-all"
            onClick={() => closePopup(false)}
          >
            ✕
          </button>
        </div>
        <p className="mb-4 text-sm">
          Please fill out the form below to get in touch with me.
        </p>
        <form onSubmit={SendEmail} className="flex flex-col gap-4">
          <input
            value={formData.subject}
            onChange={handleChange}
            type="text"
            placeholder="Subject"
            name="subject"
            className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 ${!isDarkMode
                ? 'bg-[#121212] border-black text-white focus:ring-black'
                : 'bg-gray-100 border-black text-black focus:ring-black'
              }`}
            required
          />
          <textarea
            value={formData.text}
            onChange={handleChange}
            placeholder="Message"
            name="text"
            rows="5"
            className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 ${!isDarkMode
                ? 'bg-[#121212] border-black text-white focus:ring-black'
                : 'bg-gray-100 border-black text-black focus:ring-black'
              }`}
            required
          ></textarea>
          <button
            type="submit"
            className={`w-full py-2 px-4  font-bold border-4 border-black shadow-[6px_4px_0px_black] ${!isDarkMode
                ? 'bg-[#024970] text-white hover:translate-y-1 transition-all:'
                : 'bg-[#024970] text-white hover:translate-y-1 transition-all'
              }`}
          >
            Send Message
          </button>
        </form>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Form;
