import React from 'react'
import messageLottieData from '../assets/message.json' 
import Lottie from 'lottie-react'
import { Helmet } from 'react-helmet'

export default function Contact() {
  return (
    <>
    <Helmet>
        <title>Tasmina || Contact </title>
    </Helmet>

    <div className='w-full min-h-screen bg-gradient-to-tr from-black to-[#20123d] to-75%'>
      <div className=' w-10/11 mx-auto pt-16 pb-10'>
        <h2 data-aos="fade-up"
     data-aos-duration="3000" className='bg-gradient-to-br from-purple-600 to-[#6642ad] bg-clip-text text-transparent font-bold text-center sm:text-6xl text-2xl'>Contact With Me</h2>

        <p className='text-gray-100 text-center font-medium md:text-xl text-md mt-2'>
          I'd love hear from your! If yor have any questions, commenta, or feedBack, Please use the form below.
        </p>

  <div className='grid md:grid-cols-2 grid-cols-1 gap-10 justify-center items-center'>
    {/* lottie  */}
  <div className='mt-4 w-2/3 bg-transparent'> 
     <Lottie animationData={messageLottieData} ></Lottie>
  </div>

  {/* Form  */}
  <div>
  <form className='w-full mt-4 py-10'>

<div className='flex gap-6 w-full '>
  <input type="text" placeholder='Enter your name' className='w-full px-4 py-4 rounded-md outline-0 border border-white text-white' />
  
  <input type="email" placeholder='Enter your email' className='w-full px-4 py-4 rounded-md outline-0 border border-white text-white' />
 </div>

    <textarea name="text" id="" rows="10" placeholder='Message' className='w-full my-6 text-white outline-0 border px-4 py-4 rounded-md border-white'>
    </textarea>
  <input type="submit" value="Submit" className='h-14 bg-linear-to-bl from-[#20123d] to-purple-600 text-white text-lg w-full py-4 rounded-xl' />

  </form>
  </div>


  </div>







      </div>
    </div>
    </>
  )
}
