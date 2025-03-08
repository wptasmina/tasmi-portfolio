import { RiDownload2Line } from 'react-icons/ri';
import { MdOutlineArrowOutward } from 'react-icons/md';
import aboutImg from '../assets/about.jpg';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import Skills from '../components/Skills';

export default function About() {
  const [skills, setSkills] = useState([])

  useEffect(()=>{
    fetch('skill.json')
    .then(res=>res.json())
    .then(data=> setSkills(data))
    
    // setSkills(data)
  },[])

  return (
    <>
      <Helmet>
        <title>Tasmina || About</title>
      </Helmet>

      <div className="w-full min-h-screen bg-gradient-to-br from-black via-[#1a0e30] to-[#120b24] flex flex-col items-center md:pb-10">

        {/* Heading Section */}
        <div className="w-11/12 text-center py-10">
          <p className="text-gray-300 font-medium text-lg mb-2 uppercase tracking-widest" data-aos="fade-up" data-aos-duration="2000">
            Introduction
          </p>
          <h2 className="text-transparent bg-gradient-to-r from-purple-400 to-[#5c0d94] bg-clip-text text-5xl font-bold" data-aos="fade-up" data-aos-duration="2000">
            About Me
          </h2>
        </div>

        {/* Content Section */}
        <div className="w-11/12 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 pb-10">

          {/* Image Section */}
          <div data-aos="fade-right" data-aos-duration="2000" className="relative md:w-1/3 sm:w-96">
            <div className="absolute top-4 left-4 w-full h-full bg-purple-800 rounded-2xl transform rotate-3"></div>
            <img src={aboutImg} alt="avatar" className="relative w-full rounded-2xl object-cover shadow-lg" />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-gray-300 md:p-6 p-2" data-aos="fade-left" data-aos-duration="2000">
            <h4 className="text-lg font-bold mb-4">Hi, I’m Tasmina!</h4>
            <p className="text-gray-400 text-md leading-relaxed">
              "I completed my Bachelor of Social Science (BSS) from MC College in 2022.
              My passion for technology and curiosity about computer science principles led
              me to pursue web development as a career."
              I’m a passionate Front-end Developer focused on crafting intuitive, user-friendly web experiences.
              My journey into tech began in 2019, and since then, I’ve honed my skills in modern web development.
              I specialize in HTML, CSS, Bootstrap, Tailwind, JavaScript, React, Node.js, MongoDB, and Next.js.
            </p>

            {/* Skills */}
            <div className="mt-6 grid md:grid-cols-3 grid-cols-2 gap-3">
            {
              skills.map(skill => 
                <Skills key={skill.id} skill={skill}></Skills>
            )
            }
            </div>

            {/* Buttons */}
            <div className="mt-10 flex gap-4">
              <a href="/resume.pdf" className="flex items-center gap-2 md:px-4 px-3 py-2 bg-gradient-to-r from-purple-600 to-[#6A0DAD] text-white rounded-lg text-sm font-medium transition duration-300 hover:scale-105 shadow-md">
                <RiDownload2Line className="text-lg" />
                Download CV
              </a>
              <a href="https://web.whatsapp.com/send?phone=+8801581543966" className="flex items-center gap-2 md:px-4 px-3 py-2 bg-transparent border border-purple-600 text-purple-400 rounded-lg text-sm font-medium transition duration-300 hover:bg-purple-600 hover:text-white hover:scale-105 shadow-md">
                Contact
                <MdOutlineArrowOutward className="text-lg" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}
