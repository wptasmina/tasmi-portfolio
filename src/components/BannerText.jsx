import heroImg from '../assets/model.png';
import { Typewriter } from 'react-simple-typewriter';
import SocileIcon from './SocileIcon';
import ParticlesBg from './Particles/ParticlesBg';

export default function BannerText() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">

      {/* 🔵 Background Particles */}
      <div className="absolute inset-0 -z-10">
        <ParticlesBg />
        {/* Optional dark overlay to increase contrast */}
        {/* <div className="absolute inset-0 bg-black/30"></div> */}
      </div>

      {/* 🔴 Foreground content */}
      <div className="w-11/12 mx-auto pt-16 grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-8">

        {/* Text Section */}
        <div className="py-10 w-full">
          <h2 className="text-md font-medium bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-2">
            WELCOME TO MY WEBSITE
          </h2>

          <h1 className="py-4 text-2xl md:text-4xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
            I Am a Professional{' '}
            <span className="block md:inline md:text-3xl text-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent font-bold">
              <Typewriter
                words={['Programmer', 'Front-End Developer', 'MERN Stack Developer', 'Web Designer!']}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>

          {/* Social Icons */}
          <SocileIcon />
        </div>

        {/* Hero Image */}
        <div className="flex justify-center items-center">
          <img
            data-aos="fade-up"
            data-aos-duration="2000"
            src={heroImg}
            alt="avatar"
            className="w-full max-w-sm md:max-w-md"
          />
        </div>

      </div>
    </div>
  );
}
