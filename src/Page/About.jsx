import { RiDownload2Line } from 'react-icons/ri'
import aboutImg  from '../assets/about.jpg'
import { Helmet } from 'react-helmet'

export default function About() {
  return (
   <>
    <Helmet>
        <title>Tasmina || About</title>
    </Helmet>

    <div className='w-full min-h-screen bg-gradient-to-tr  from-black to-[#20123d] to-75%'>

    <div className='w-10/12 mx-6 flex flex-col justify-center items-center py-10'>
     <p className='text-gray-200 font-medium text-center sm:text-xl text-md mb-1 '>
        Introduction
      </p>
      <h2 className=' bg-gradient-to-r from-purple-400 to-[#341B66] bg-clip-text text-transparent font-bold text-center sm:text-6xl text-2xl'>
       About Me
      </h2>

    </div>

    <div className='w-10/12 mx-auto flex flex-col md:flex-row justify-center items-center gap-20 md:mt-10'>

      <div className='w-70 sm:w-96 max-w-none rounded-2xl flex justify-center items-center'>
        <img src={ aboutImg} alt="avata" className='w-full overflow-hidden rounded-2xl object-cover' />
      </div>

      <div className='p-4 flex-1'>
        <h4 className='text-gray-200 text-lg font-bold pb-2 max-w-2xl'> Hi, I’m Tasmina!</h4>
        <p className='text-gray-400 text-md font-medium sm:text-xl mb-1'>
              I’m a Front-end expertise passionate about crafting beautiful, responsive, and user-friendly web experiences. My journey into technology began in 2019 when I started learning basic computer skills. After completing my Higher Secondary Education, I completed my Bachelor of Arts (BA) from Murari Chand College (MC College), Sylhet, in 2022.

              That same year, I embarked on my journey into programming, quickly developing a strong expertise in web development and problem-solving. Today, I'm a Full-Stack Developer proficient in HTML, CSS, Bootstrap, Tailwind, JavaScript, React, Node.js, MongoDB, and Next.js.
        </p>
        <div className=''>
           <button className="flex items-center justify-center cursor-pointer mt-8 lg:text-lg text-sm lg:gap-2 gap-1 text-white bg-gradient-to-r from-purple-700 to-[#341B66] px-3 py-2 rounded-lg hover:bg-purple-800 transition duration-300">
            <RiDownload2Line className="lg:text-2xl text-lg" />
              Download CV
            </button>
        </div>
      </div>
    </div>

    </div>
   
   </>
  )
}
