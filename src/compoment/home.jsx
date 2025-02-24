
// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-8 flex justify-between items-center z-50">
//       <h1 className="text-xl font-bold">My Portfolio</h1>
//       <ul className="flex gap-6">
//         {["Home", "Skills", "Projects", "Contact"].map((item) => (
//           <li key={item}>
//             <a href={`#${item.toLowerCase()}`} className="hover:text-blue-600 font-medium">
//               {item}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

const Home = () => {
  return (
    <section id="home" className="h-screen w-full flex flex-col justify-center items-center">
      {/* <div className='absolute top-5 left-0 z-[3000]'>
       <BezierAnimation/>
      </div> */}
        <nav className=" z-[1000] fixed top-0 left-50 h-[70px] w-[90%] md:w-[25%] md:gap-10 gap-5  m-5  flex justify-center items-center bg-[#E1DACE] border-4 border-[#323232] shadow-[6px_6px_0px_#323232] ">
          <ul className=" flex md:gap-8 gap-4 font-semibold text-[#323232]">
            <li onClick={ScrollTopage(1)} className="hover:bg-[#FFC567] text-center text-[16px] hover:w-[70px] hover:border-2 hover:border-black hover:shadow-[4px_4px_0px_black]  ">Home</li>
            <li onClick={ScrollTopage(2)} className="hover:bg-[#FFC567] text-center text-[16px] hover:w-[70px] hover:border-2 hover:border-black hover:shadow-[4px_4px_0px_black] ">Skils</li>
            <li onClick={ScrollTopage(3)} className="hover:bg-[#FFC567] text-center text-[16px] hover:w-[70px] hover:border-2 hover:border-black hover:shadow-[4px_4px_0px_black] ">Project</li>
            <li onClick={ScrollTopage(3)} className="hover:bg-[#FFC567] text-center text-[16px] hover:w-[70px] hover:border-2 hover:border-black hover:shadow-[4px_4px_0px_black] ">Contact</li>
          </ul>
          <Switch/>
        </nav>
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
            <button className=" md:w-[30%] mt-6 bg-[#024970] px-5 sm:px-6 py-3 font-bold text-[#E1DACE] border-4 border-[#323232] shadow-[6px_6px_0px_#323232] transition-all duration-300 hover:translate-x-1 hover:translate-y-1">
              My Resume
            </button>
          </div>
          <div className=' w-full sm:w-1/2 md:flex md:flex-col md:gap-20'>
            <div className="relative mt-5 md:mt-0 ">
              <div className={` rounded-lg p-6  relative flex flex-col items-center transition-all duration-300 hover:translate-x-1 hover:translate-y-1`}>
                <img
                  src={img} // Replace with actual image
                  alt="Ahmed Bajaou"
                  className=" w-[80%] h-[80%] object-cover " />
                <div className="absolute -bottom-6 bg-[#E1DACE] px-4 py-2 border-4 border-[#323232] shadow-[6px_6px_0px_#323232] text-center  
                    sm:w-[30%] sm:h-[10%] top-[70%] left-[0] 
                    w-[39%] h-[14%] md:top-[76%] md:left-[0] ">
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

// const Skills = () => {
//   return (
//     <section id="skills" className="h-screen w-full flex flex-col justify-center items-center bg-gray-100">
//       <h2 className="text-4xl font-bold">My Skills</h2>
//       <div className="flex gap-4 mt-6">
//         {["JavaScript", "React.js", "Tailwind CSS", "Django"].map((skill) => (
//           <span key={skill} className="px-4 py-2 bg-blue-500 text-white rounded-lg">{skill}</span>
//         ))}
//       </div>
//     </section>
//   );
// };

// const Projects = () => {
//   return (
//     <section id="projects" className="h-screen w-full flex flex-col justify-center items-center bg-green-100">
//       <h2 className="text-4xl font-bold">My Projects</h2>
//       <p className="mt-4">Showcasing my best work!</p>
//     </section>
//   );
// };

// const Contact = () => {
//   return (
//     <section id="contact" className="h-screen w-full flex flex-col justify-center items-center bg-yellow-100">
//       <h2 className="text-4xl font-bold">Get in Touch</h2>
//       <p className="mt-4">Email: example@email.com</p>
//     </section>
//   );
// };

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Home />
      {/* <Skills />
      <Projects />
      <Contact /> */}
    </div>
  );
};

export default App;
