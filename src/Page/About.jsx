import { RiDownload2Line } from 'react-icons/ri'
import aboutImg  from '../assets/about.jpg'
import { Helmet } from 'react-helmet'
import { MdOutlineArrowOutward } from 'react-icons/md'
import Contact from './Contact';

export default function About() {
  return (
   <>
    <Helmet>
        <title>Tasmina || About</title>
    </Helmet>

    <div className='w-full min-h-screen bg-gradient-to-tr from-black to-[#20123d] to-75% pb-10'>

    <div className='w-10/12 mx-6 flex flex-col justify-center items-center py-16'>
     <p  data-aos="fade-up"
     data-aos-duration="3000" className='text-gray-200 font-medium duration-300 transition-all text-center sm:text-xl text-md mb-1 '>
        Introduction
      </p>
      <h2 data-aos="fade-up"
     data-aos-duration="3000" className=' bg-gradient-to-r from-purple-400 to-[#341B66] bg-clip-text text-transparent font-bold duration-300 transition-all text-center sm:text-6xl text-2xl'>
       About Me
      </h2>

    </div>

    <div className='w-11/12 mx-auto flex flex-col md:flex-row justify-center items-center gap-16'>

      <div data-aos="fade-right"
    data-aos-duration="2000" className='w-70 sm:w-96 max-w-none rounded-2xl flex justify-center items-center'>
        <img src={ aboutImg} alt="avata" className='w-full overflow-hidden rounded-2xl object-cover' />
      </div>

      <div className='sm:p-4 p-2 flex-1'>
        <h4 data-aos="fade-left"
    data-aos-duration="2000" className='text-gray-200 text-lg font-bold pb-2 max-w-2xl'> Hi, I’m Tasmina!</h4>
        <p data-aos="fade-left"
    data-aos-duration="2000" className='text-gray-400 text-md font-medium sm:text-xl mb-1'>
              I’m a Front-end expertise passionate about crafting beautiful, responsive, and user-friendly web experiences. My journey into technology began in 2019 when I started learning basic computer skills. After completing my Higher Secondary Education, I completed my Bachelor of Arts (BA) from Murari Chand College (MC College), Sylhet, in 2022.

              That same year, I embarked on my journey into programming, quickly developing a strong expertise in web development and problem-solving. Today, I'm a Full-Stack Developer proficient in HTML, CSS, Bootstrap, Tailwind, JavaScript, React, Node.js, MongoDB, and Next.js.
        </p>

        {/* button  */}
        <div className='bg-transparent flex gap-4'>
           <button className="cursor-pointer mt-10 bg-gradient-to-r from-purple-700 to-[#341B66] px-4 py-2 rounded-lg hover:bg-purple-800 transition duration-300">
            <a href="/resume.pdf" className='flex gap-2 cursor-pointer lg:text-lg text-sm  text-white '>
                <RiDownload2Line className="lg:text-2xl text-lg " />
                Download CV
            </a>
          </button>
           <button className="cursor-pointer mt-10 lg:text-lg text-sm  text-white bg-gradient-to-r from-purple-700 to-[#341B66] px-4 py-2 rounded-lg hover:bg-purple-800 transition duration-300">
            <a href="https://web.whatsapp.com/+8801581543966" className='flex gap-2 cursor-pointer '>
                Contact
                <MdOutlineArrowOutward className="lg:text-2xl text-lg " />
            </a>
          </button>
        </div>
      </div>
    </div>

    </div>
   
   </>
  )
}
