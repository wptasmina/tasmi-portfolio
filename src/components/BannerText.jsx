import { Typewriter } from 'react-simple-typewriter';
import SocileIcon from './SocileIcon';
import ParticlesBg from './Particles/ParticlesBg';
import Lottie from 'lottie-react';
import codingAnimation from '../assets/lottie/lottie.json'; // 🟡 Your Lottie file

export default function BannerText() {
  return (
    <div className="relative w-full overflow-hidden">

      {/* 🔵 Background Particles */}
      <div className="absolute inset-0 -z-10">
        <ParticlesBg />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* 🔴 Foreground content */}
      <div className="w-11/12 mx-auto pt-16 grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-8">

        {/* 📝 Text Section */}
        <div className="py-10 w-full">
          <h2 className="text-md font-medium text-shadow-md bg-gradient-to-r from-purple-400 to-[#2e1463] bg-clip-text text-transparent mb-2">
            WELCOME TO MY WEBSITE
          </h2>

          <h1 className="py-4 text-2xl md:text-4xl font-semibold text-shadow-md bg-gradient-to-r from-purple-400 to-[#2e1463] bg-clip-text text-transparent">
            I Am a Professional
            <span className="ml-2 block md:inline md:text-3xl text-2xl bg-gradient-to-r from-purple-500 to-[#2e1463] bg-clip-text text-transparent font-bold">
              <Typewriter
                words={['_','Programmer', 'Front-End Developer', 'MERN Stack Developer', 'Web Designer!']}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>

          {/* 🌐 Social Icons */}
          <SocileIcon />
        </div>

        {/* ✅ Lottie Animation instead of image */}
        <div className="md:flex justify-center items-center hidden">
          <Lottie
            animationData={codingAnimation}
            loop={true}
            className="w-72 md:w-96"
          />
        </div>

      </div>
    </div>
  );
}
