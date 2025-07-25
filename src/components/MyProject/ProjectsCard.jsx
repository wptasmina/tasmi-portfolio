import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { TbListDetails } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



const ProjectsCard = ({ title, des, src, link, view }) => {
  return (
    <div className="w-full p-4 xl:px-8 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#262a2e] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover object-top group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="project"
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-white/70 uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
              
              <a href={view} target="_blank" rel="noopener noreferrer">
                <TbListDetails />
              </a>

              </span>
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <Link to="https://github.com/wptasmina">
                  <BsGithub />
                </Link>
              </span>
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                
              <a href={link} target="_blank" rel="noopener noreferrer">
                <FaGlobe />
              </a>
              </span>
            </div>
          </div>
          <p className="text-sm tracking-wide lg:text-gray-600 text-gray-500 mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>

        </div>
      </div>
    </div>
  );
}

// ✅ Assign propTypes after declaration
ProjectsCard.propTypes = {
  title: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
};

export default ProjectsCard