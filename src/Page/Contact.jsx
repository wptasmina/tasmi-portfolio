
import { Helmet } from 'react-helmet'

import React, { useState } from "react";
import { FaLocationDot, FaPhoneVolume } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';
import Title from '../Layout/Title';

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

      <section className="relative py-10 bg-cover bg-center min-h-screen"
        style={{ backgroundImage: "url('/contact.jpg')" }}
      >
        {/* Overlay for dark shadow effect */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content with higher z-index */}
        <div className="relative pb-6 z-10">
          <h1 className="text-4xl font-bold text-center text-purple-700">
            Contact Us
          </h1>
        </div>
        
        {/* Contact Info and Contact from */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 grid-cols-1 md:gap-10 relative z-10">
          {/* Contact Info */}
          <div className="flex flex-col justify-center items-center bg-transparent shadow-lg rounded-lg py-16 lg:px-10 px-4">
            <h3 className="text-2xl font-semibold text-gray-300 mb-6 uppercase">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <p className="flex justify-center items-center text-lg bg-gray-100 w-10 h-10 rounded-full">
                  <FaLocationDot className='text-purple-800' />
                </p>
                <div>
                  <p className="flex items-center text-lg text-purple-800">Address</p>
                  <p className="flex items-center text-lg text-gray-400">Sylhet, Bangladesh - 3100</p>
                </div>
              </div>
              {/* Phone  */}
              <div className="flex gap-4">
                <p className="flex justify-center items-center text-lg bg-gray-100 w-10 h-10 rounded-full">
                <FaPhoneVolume className='text-purple-800' />
                </p>
                <div>
                  <p className="flex items-center text-lg text-purple-800">Phone</p>
                  <p className="flex items-center text-lg text-gray-400">+880-1581543966</p>
                </div>
              </div>
              {/* Email  */}
              <div className="flex gap-4">
                <p className="flex justify-center items-center text-lg bg-gray-100 w-10 h-10 rounded-full">
                <MdOutlineMail className='text-purple-800' />
                </p>
                <div>
                  <p className="flex items-center text-lg text-purple-800">Email</p>
                  <p className="flex items-center text-lg text-gray-400">tasmina163@gmail.com</p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
         <div className='flex flex-col justify-center items-center'>
         <form
            className="bg-gray-950 shadow-lg rounded-lg p-6 max-w-xl z-10 relative"
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
        </div>
      </section>
    </>
  );
};

export default Contact;

