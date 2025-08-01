import { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_vbf7adi",
      "template_9p64etd",
      form.current,
      {
        publicKey: "oRXTPmkVJkmwyuwrT",
      }
    )
    .then(
      () => {
        console.log("SUCCESS!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        alert("Message sent successfully!");
        form.current.reset(); // ✅ Native reset
      },
      (error) => {
        console.log("FAILED...", error.text);
        alert("Something went wrong. Please try again.");
      }
    );
};

  return (
    <>
      <Helmet>
        <title>Tasmina || Contact</title>
      </Helmet>

      <section
        className="relative py-10 bg-cover bg-center min-h-screen"
        style={{ backgroundImage: "url('/contact.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative pb-6 z-10">
          <h1 className="sm:text-3xl text-2xl title-font mb-2 text-white text-shadow-lg font-bold text-center">
            Contact Us
          </h1>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 grid-cols-1 md:gap-10 relative z-10">
          {/* Contact Info */}
          <div className="flex flex-col justify-center items-center bg-transparent shadow-lg rounded-lg py-16 lg:px-10 px-4">
            <h3 className="text-2xl font-semibold text-gray-300 mb-6 uppercase">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <p className="flex justify-center items-center text-lg bg-gray-100 w-10 h-10 rounded-full">
                  <FaLocationDot className="text-purple-800" />
                </p>
                <div>
                  <p className="text-lg text-purple-800">Address</p>
                  <p className="text-lg text-gray-400">
                    Sylhet, Bangladesh - 3100
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <p className="flex justify-center items-center text-lg bg-gray-100 w-10 h-10 rounded-full">
                  <FaPhoneVolume className="text-purple-800" />
                </p>
                <div>
                  <p className="text-lg text-purple-800">Phone</p>
                  <p className="text-lg text-gray-400">+880-1581543966</p>
                </div>
              </div>
              <div className="flex gap-4">
                <p className="flex justify-center items-center text-lg bg-gray-100 w-10 h-10 rounded-full">
                  <MdOutlineMail className="text-purple-800" />
                </p>
                <div>
                  <p className="text-lg text-purple-800">Email</p>
                  <p className="text-lg text-gray-400">tasmina163@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col justify-center items-center min-h-screen px-4">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-xl p-6 max-w-xl w-full z-10"
            >
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full p-3 mb-4 bg-transparent text-gray-300 border border-gray-600 rounded-lg shadow-sm focus:outline-none "
                required
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full p-3 mb-4 bg-transparent text-gray-300 border border-gray-600 rounded-lg shadow-sm focus:outline-none"
                required
              />
              <input
                type="text"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                className="w-full p-3 mb-4 bg-transparent text-gray-300 border border-gray-600 rounded-lg shadow-sm focus:outline-none"
                required
              />
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                className="w-full p-3 mb-4 bg-transparent text-gray-300 border border-gray-600 rounded-lg shadow-sm focus:outline-none"
                rows="6"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full p-3 bg-gradient-to-bl from-[#4b3e6e] to-[#2b0e66] text-white text-lg font-bold rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
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
