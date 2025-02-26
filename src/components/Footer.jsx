import SocileIcon from "./SocileIcon";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-black to-[#20123d] text-white to-75% pt-10 pb-10 border-b-[1px] border-b-black">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center">

           {/* About Section */}
           <div>
            <h2 className="text-xl font-semibold">About Me</h2>
            <p className="text-gray-400 text-sm mt-2">
              Passionate developer creating innovative web solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition">Projects</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4 md:mt-0 ">
            <SocileIcon />
          </div>
        </div>
      </div>
      <div>
        {/* Copyright */}
        <p className="text-sm mt-4 text-center border-t border-gray-400 pt-6">
          &copy; {new Date().getFullYear()} Tasmina. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
