
import heroImg from '../assets/model.png'
import { TypeAnimation } from 'react-type-animation';
import SocileIcon from './SocileIcon';

export default function BannerText() {
  return (
    <>
    <div className='w-11/12 mx-auto pt-15 grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-8'>
      
      <div className='bg-black py-10 md:text-4xl w-full text-md font-extrabold bg-gradient-to-r from-purple-400 via-[#8047f3] to-[#311960] bg-clip-text text-transparent '>
        <div className='mb-2'>
            <p className='text-gray-100 font-medium sm:text-md text-sm mb-1'>Hi, I'm Tasmina</p>
            <h2 className='font-medium  text-md text-gray-300'>WELCOME TO MY WEBSITE</h2>
        </div>

      <TypeAnimation
      sequence={[

        "I Am a Parofasonal Programmer",
        1000, 
        "I Am a Parofasonal Front-End developer",
        1000,
        "I Am a Parofasonal Web Designer",
        1000,
        "I Am a Parofasonal MERN-Stack Developer",
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />

      <SocileIcon />
      
    </div>

      <div className='block items-center mx-auto'>
        <img src={heroImg} className='w-full items-end ring-0' alt="avata" />
      </div>

    </div>
    </>
  )
}
