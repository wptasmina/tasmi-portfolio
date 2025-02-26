import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-black to-[#20123d] text-white to-75%  border-b-[1px] border-b-black">
      <div className="w-11/12 mx-auto flex md:flex-row flex-col justify-between py-6 gap-4">

        <div className="md:w-1/2">
          <p className="text-md text-left text-gray-400">
            &copy; {new Date().getFullYear()} Tasmina. All Rights Reserved.
          </p>
        </div>

        <div className="flex gap-4 list-none flex-end text-end text-gray-400">
          <h3>Follow Me: </h3>
          <li>
          <Link to="https://www.linkedin.com/in/wptasmina">
              <FaLinkedinIn className='text-xl' />
          </Link>
          </li>
          <li>
          <Link to="https://x.com/wptasmina">
            <FaXTwitter className='text-xl' />
          </Link>
          </li>
            <li>
            <Link to="https://www.facebook.com/wptasmina">
              <FaFacebook className='text-xl' />
          </Link>
            </li>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
