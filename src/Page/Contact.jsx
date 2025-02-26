
// import messageLottieData from '../assets/message.json' 
// import Lottie from 'lottie-react'
import { Helmet } from 'react-helmet'

// export default function Contact() {
//   return (
//     <>
//     <Helmet>
//         <title>Tasmina || Contact </title>
//     </Helmet>

//     <div className='w-full min-h-screen bg-gradient-to-tr from-black to-[#20123d] to-75%'>
//       <div className=' w-10/11 mx-auto pt-16 pb-10'>
//         <h2 data-aos="fade-up"
//      data-aos-duration="3000" className='bg-gradient-to-br from-purple-600 to-[#6642ad] bg-clip-text text-transparent font-bold text-center sm:text-6xl text-2xl'>Contact With Me</h2>

//         <p className='text-gray-100 text-center font-medium md:text-xl text-md mt-2'>
//           I'd love hear from your! If yor have any questions, commenta, or feedBack, Please use the form below.
//         </p>

//   <div className='grid md:grid-cols-2 grid-cols-1 gap-10 justify-center items-center'>
//     {/* lottie  */}
//   <div className='mt-4 w-2/3 bg-transparent'> 
//      <Lottie animationData={messageLottieData} ></Lottie>
//   </div>

//   {/* Form  */}
//   <div>
//   <form className='w-full mt-4 py-10'>

// <div className='flex gap-6 w-full '>
//   <input type="text" placeholder='Enter your name' className='w-full px-4 py-4 rounded-md outline-0 border border-white text-white' />
  
//   <input type="email" placeholder='Enter your email' className='w-full px-4 py-4 rounded-md outline-0 border border-white text-white' />
//  </div>

//     <textarea name="text" id="" rows="10" placeholder='Message' className='w-full my-6 text-white outline-0 border px-4 py-4 rounded-md border-white'>
//     </textarea>
//   <input type="submit" value="Submit" className='h-14 bg-linear-to-bl from-[#20123d] to-purple-600 text-white text-lg w-full py-4 rounded-xl' />

//   </form>
//   </div>


//   </div>

//       </div>
//     </div>
    
//     </>
//   )
// }

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending your message.");
    }
  };

  return (
    <>
    <Helmet>
      <title>Tasmina || Contact </title>
    </Helmet>

    <section id="contact" className="py-16 bg-gradient-to-tr from-black to-[#20123d] to-75%">
      <h1 className="bg-gradient-to-r from-purple-400 to-[#341B66] bg-clip-text text-transparent font-bold duration-300 transition-all text-center sm:text-6xl text-2xl mb-10">
      Contact Me
      </h1>

      <div className="flex flex-wrap justify-center items-start gap-10 max-w-7xl mx-auto">
        {/* Contact Info */}
        <div className="flex-1 bg-[#2c2c2cc0] shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-200 mb-6 uppercase">
            Contact Info
          </h3>
          <div className="space-y-4">
            <h3 className="flex items-center text-lg text-gray-400">
              {/* <i className="fas fa-envelope text-green-500 mr-4"></i> */}
              wptasmina@gmail.com
            </h3>
            <h3 className="flex items-center text-lg text-gray-400">
              {/* <i className="fas fa-phone text-green-500 mr-4"></i> */}
              +880-123456788
            </h3>
            <h3 className="flex items-center text-lg text-gray-400">
              {/* <i className="fas fa-phone text-green-500 mr-4"></i> */}
              +880-124597575
            </h3>
            <h3 className="flex items-center text-lg text-gray-400">
              {/* <i className="fas fa-map-marker-alt text-green-500 mr-4"></i> */}
              California, USA - 606543
            </h3>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="flex-1 bg-[#2c2c2cc0] shadow-lg rounded-lg p-6 max-w-xl"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 mb-4 bg-transparent text-gray-400 border rounded-lg shadow-sm focus:outline-none focus:ring-2  focus:ring-blue-950"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 mb-4 bg-transparent text-gray-400 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-950"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full p-3 mb-4 bg-transparent text-gray-400 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-950"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-3 mb-4 bg-transparent text-gray-400 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-950"
            rows="6"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 bg-linear-to-bl from-[#20123d] to-purple-600 text-white text-lg font-bold rounded-lg shadow-md cursor-pointer "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
    </>
  );
};

export default Contact;

