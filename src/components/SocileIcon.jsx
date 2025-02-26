
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FaSquareXTwitter, FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function SocileIcon() {
    // const bannerIcon = " w-16 h-16 bg-black text-gray-400 text-xl inline-flex items-center justify-center rounded-md shadow-2xl transition-all hover:text-red-500 cursor-pointer"
  return (
    <>
    <div className='mt-10 flex gap-4' >
        <span className='md:w-12 md:h-12 w-10 h-10 bg-linear-100 from-[#141414] to-[#4c2d8a] text-gray-200 inline-flex items-center justify-center rounded-md shadow-2xl transition-all duration-300 hover:text-[#7F4BE9] cursor-pointer'>
            <Link to="https://github.com/wptasmina">
                <FaGithub className='text-3xl' />
            </Link>
        </span>

        <span className='md:w-12 md:h-12 w-10 h-10 bg-linear-100 from-[#141414] to-[#4c2d8a] text-gray-200 inline-flex items-center justify-center rounded-md shadow-2xl transition-all hover:text-[#7F4BE9] duration-300 cursor-pointer'>
        <Link to="https://www.facebook.com/wptasmina">
            <FaFacebook className='text-3xl' />
        </Link>
        </span>

        <span className='md:w-12 md:h-12 w-10 h-10 bg-linear-100 from-[#141414] to-[#4c2d8a] text-gray-200 inline-flex items-center justify-center rounded-md shadow-2xl transition-all duration-300 hover:text-[#7F4BE9] cursor-pointer'>
        <Link to="https://x.com/wptasmina">
          <FaXTwitter className='text-3xl' />
        </Link>
        </span>

        <span className='md:w-12 md:h-12 w-10 h-10 bg-linear-100 from-[#141414] to-[#4c2d8a] text-gray-200 inline-flex items-center justify-center rounded-md shadow-2xl transition-all duration-300 hover:text-[#7F4BE9] cursor-pointer'>
        <Link to="https://www.linkedin.com/in/wptasmina">
            <FaLinkedinIn className='text-3xl' />
        </Link>
        </span>
      </div>
    </>
  )
}
