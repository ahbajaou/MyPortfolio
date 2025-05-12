import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useTheme } from "../context/isDarkMood";
import { usePopup } from "../context/popupContext";
import Form from "./form";

const Navbar = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const { isOpen, openPopup, closePopup } = usePopup();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // const [isForm, setIsForm] = useState(false);

    const scrollToPage = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setMobileMenuOpen(false);
    };



    const WaveText = ({ text, onClick }) => {
        return (
            <div onClick={onClick} className="wave-animation relative">
                {text.split('').map((letter, index) => (
                    <span
                        key={index}
                        className="inline-block transition-all duration-150"
                        style={{ animationDelay: `${index * 0.05}s` }}
                    >
                        {letter}
                    </span>
                ))}
            </div>
        );
    };

    return (
        <>
            <div className="flex justify-center relative">
                {/* Top Navbar */}
                <nav className={`w-[85%] fixed top-0 z-[1000] ${isDarkMode ? 'bg-[#FFE863]' : 'bg-[#121212]'} border-4 mt-3 shadow-[6px_4px_0px_black] border-black`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <div className="h-14 w-14 bg-[#024970] rounded-lg border-4 border-black shadow-[4px_4px_0px_black] flex items-center justify-center relative overflow-hidden">
                                <span className="font-bold text-2xl text-white relative z-10">AB</span>
                                <div className="absolute top-0 left-0 w-4 h-4 bg-[#024970] rounded-full border-2 border-black -translate-x-1/4 -translate-y-1/4"></div>
                            </div>
                        </div>

                        {/* Desktop Navigation - Hidden on Mobile */}
                        <div className="hidden md:flex items-center space-x-6">
                            <button
                                onClick={() => scrollToPage("home")}
                                className={`font-bold ${isDarkMode ? 'text-black' : 'text-white'} hover:opacity-80 transition-opacity`}
                            >
                                <WaveText text="Home" />
                            </button>

                            <button
                                onClick={() => scrollToPage("projects")}
                                className={`font-bold ${isDarkMode ? 'text-black' : 'text-white'} hover:opacity-80 transition-opacity`}
                            >
                                <WaveText text="Projects" />
                            </button>

                            <a
                                href="https://github.com/ahbajaou"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`font-bold ${isDarkMode ? 'text-black' : 'text-white'} hover:opacity-80 transition-opacity flex items-center`}
                            >
                                <WaveText text="Blogs" /> <FaArrowRight className="ml-1" size={12} />
                            </a>

                            <button
                                onClick={() => openPopup(true)}
                                className="py-2 px-4 text-center font-bold bg-[#024970] text-white  border-2 border-black shadow-[4px_4px_0px_black] hover:translate-y-1 hover:shadow-[2px_2px_0px_black] transition-all"
                            >
                                Get in Touch!
                            </button>
                        </div>

                        {/* Right Side Controls */}
                        <div className="flex items-center space-x-4">
                            {/* Theme Toggle Button */}
                            <button
                                onClick={toggleTheme}
                                className="h-10 w-10 bg-white rounded-md border-2 border-black shadow-[4px_4px_0px_black] flex items-center justify-center hover:translate-y-1 hover:shadow-[2px_2px_0px_#323232] transition-all"
                            >
                                {
                                    isDarkMode ? (
                                        <span className="text-xl">
                                            <MdOutlineDarkMode />
                                        </span>
                                    ) : (
                                        <span className="text-xl">
                                            <MdOutlineLightMode />
                                        </span>
                                    )
                                }
                            </button>

                            {/* Mobile Menu Toggle Button - Only visible on mobile */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="md:hidden h-10 w-10 bg-[#00E5FF] rounded-md border-2 border-black shadow-[4px_4px_0px_black] flex items-center justify-center hover:translate-y-1 hover:shadow-[2px_2px_0px_black] transition-all"
                            >
                                {mobileMenuOpen ? (
                                    <FaTimes size={20} className="text-black" />
                                ) : (
                                    <FaBars size={20} className="text-black" />
                                )}
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Mobile Menu Panel - Shown when menu is open */}
                {mobileMenuOpen && (
                    <div className={`fixed w-[85%] z-[999] top-[80px] ${isDarkMode ? 'bg-white' : 'bg-[#121212]'} border-4 border-black shadow-[6px_4px_0px_black] md:hidden`}>
                        <div className="flex flex-col p-4 gap-4">
                            <button
                                onClick={() => scrollToPage("home")}
                                className={`py-3 px-4 text-center font-bold border-2 border-black shadow-[4px_4px_0px_black] ${isDarkMode ? 'bg-[#FFE863] text-black' : 'bg-[#121212] text-white'} hover:translate-y-1 hover:shadow-[2px_2px_0px_black] transition-all`}
                            >
                                Home
                            </button>

                            {/* <button
                                onClick={() => scrollToPage("journey")}
                                className={`py-3 px-4 text-center font-bold border-2 border-black shadow-[4px_4px_0px_black] ${isDarkMode ? 'bg-[#FFE863] text-black' : 'bg-[#121212] text-white'} hover:translate-y-1 hover:shadow-[2px_2px_0px_black] transition-all`}
                            >
                                Journey
                            </button> */}

                            <button
                                onClick={() => scrollToPage("projects")}
                                className={`py-3 px-4 text-center font-bold border-2 border-black shadow-[4px_4px_0px_black] ${isDarkMode ? 'bg-[#FFE863] text-black' : 'bg-[#121212] text-white'} hover:translate-y-1 hover:shadow-[2px_2px_0px_black] transition-all`}
                            >
                                Projects
                            </button>

                            <a
                                href="https://github.com/ahbajaou"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`py-3 px-4 text-center font-bold border-2 border-black shadow-[4px_4px_0px_black] ${isDarkMode ? 'bg-[#FFE863] text-black' : 'bg-[#121212] text-white'} hover:translate-y-1 hover:shadow-[2px_2px_0px_black] transition-all flex items-center justify-center`}
                            >
                                Blogs <FaArrowRight className="ml-2" />
                            </a>

                            <button
                                onClick={() => openPopup(true)}
                                className="py-3 px-4 text-center font-bold bg-[#00E5FF] text-black border-2 border-black shadow-[4px_4px_0px_black] hover:translate-y-1 hover:shadow-[2px_2px_0px_black] transition-all"
                            >
                                Get in Touch!
                            </button>
                        </div>
                    </div>
                )}
            </div>
            {/* Form Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-[1100] flex items-center justify-center bg-black bg-opacity-50">
                    <div className=" p-6 rounded-lg shadow-lg relative w-[90%] max-w-md">
                        <Form />
                    </div>
                </div>
            )}

            {/* Add extra space to prevent content from being hidden under fixed navbar */}
            <div className="h-24"></div>
        </>
    );
};

export default Navbar;