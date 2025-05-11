import img1 from '../assets/iedole.png'
import img2 from '../assets/movie4you.png'
import img3 from '../assets/rooftoop.png'
import { FaGithub, FaRocket } from "react-icons/fa";
import { useTheme } from "../context/isDarkMood";

const projects = [
    {
        id: 1,
        title: "e-idole",
        description: "E-Idole is an all-in-one platform built to manage and support influencers in their growth journey. Using JavaScript, React.js, and Tailwind CSS, the platform offers tools for training, progress tracking, and interactive learning through quizzes and AI-powered chat. It provides a structured environment for influencer education, combining performance, usability, and modern design to create a seamless learning experience.",
        image: img1,
        githublink: 'https://github.com/ahbajaou/e-idole',
        demolink: 'https://e-idole.vercel.app/',
        technologies: ['JavaScript', 'React.js', 'Figma', 'Tailwind CSS']
    },
    {
        id: 2,
        title: "Movies4You",
        description:
            "Movies4You is a web platform designed for streaming and exploring movies. It integrates with an API server to fetch movie data, providing a seamless and interactive user experience. Built with React.js , the platform prioritizes performance and user-friendly design.",
        image: img2,
        githublink: 'https://github.com/ahbajaou/Movies4You',
        demolink: 'https://movies4-you-shabi.vercel.app/',
        technologies: ['React.js', 'Tailwind CSS', 'Figma','API Integration']
    },
    {
        id: 3,
        title: "RooftopMaroc",
        description: "RooftopMaroc is a platform designed to showcase the best rooftops across Morocco. Built using React.js, Tailwind CSS, JavaScript, HTML, and CSS, it focuses on delivering a responsive and visually engaging user experience. The goal of this project is to highlight unique rooftop locations with elegant design and smooth performance, helping users explore stunning spaces without offering direct booking services.",
        image: img3,
        githublink: 'https://github.com/ahbajaou/RooftopMaroc',
        demolink: 'https://rooftop-maroc.vercel.app/',
        technologies: ['JavaScript', 'React.js', 'Figma', 'Tailwind CSS']
    },

];

const ProjectCard = ({ project }) => {
    const { isDarkMode } = useTheme();

    const redirectToGitHub = () => {
        window.open(project.githublink, "_blank");
    }
    const redirectToDemo = () => {
        window.open(project.demolink,"_blank");
    }

    return (
        <div className={`rounded-lg overflow-hidden ${isDarkMode ? 'bg-white' : 'bg-[#121212]'} border-4 ${isDarkMode ? 'border-black' : 'border-black'} shadow-[6px_4px_0px_black] w-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
            <div className="relative">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover object-top"
                />
                <div className={`absolute inset-0 ${isDarkMode ? 'bg-black' : 'bg-gray-900'} opacity-30`}></div>
                <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold drop-shadow-lg">
                    {project.title}
                </h3>
            </div>

            <div className="p-5">
                <p className={`text-sm mb-4 ${isDarkMode ? 'text-black' : 'text-white'}`}>
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-3 mb-5">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className={`px-3 py-1 text-xs font-medium border-2 border-black ${isDarkMode
                                    ? 'bg-[#FFE863] text-black'
                                    : 'bg-[#FFE863] text-black'
                                }`}
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-3 mt-2">
                    <button
                        onClick={redirectToGitHub}
                        className={`flex items-center gap-2 px-4 py-2 border-2 border-black shadow-[6px_4px_0px_black] font-medium text-sm ${isDarkMode
                                ? 'bg-[#FF5252] text-black'
                                : 'bg-[#FF5252] text-black'
                            } transition-colors`}
                    >
                        <FaGithub /> Code
                    </button>

                    <button
                        onClick={redirectToDemo}
                        className={`flex items-center gap-2 px-4 py-2 border-2 border-black shadow-[6px_4px_0px_black] font-medium text-sm ${isDarkMode
                                ? 'bg-[#00E5FF] text-black'
                                : 'bg-[#00E5FF] text-black'
                            } transition-colors`}
                    >
                        <FaRocket /> Live Demo
                    </button>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const { isDarkMode } = useTheme();

    return (
        <section id="projects" className={`mt-8 mb-5 ${isDarkMode ? 'bg-white' : 'bg-[#121212]'}`}>
            <div className="max-w-6xl mx-auto ">
                <div className="text-center mb-16 border-4 border-black shadow-[6px_4px_0px_black] p-5 w-[100%]">
                    <h2 className={`inline-block text-xl md:text-4xl font-bold  ${isDarkMode ? 'text-black' : 'text-white'}`}>
                        <span className="relative">
                            Projects I've Worked On
                            <span className="inline-block animate-bounce ml-2">🚀</span>
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="h-full flex">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;