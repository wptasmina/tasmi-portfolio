import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import P2 from "../../assets/project2.png";

function Project2() {
  return (
    <div className="w-8/12 mx-auto py-6 md:py-12">
      <Link
        to="/"
        className="flex items-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-purple-700 to-[#341B66]  rounded-lg hover:bg-purple-800 transition duration-300"
      >
        <BsArrowLeft size={20} />
        <span>Back</span>
      </Link>
      <div className=" py-10">
        <h1 className="text-3xl font-bold text-center mb-4"></h1>
        <img src={P2} alt="" className="w-full mx-auto rounded-md mb-6" />
        <p className="text-lg mt-2">
          <strong>Description: 
          Galaxy Blogger is a modern, fully responsive blogging platform where users can explore, create, manage, and engage with blogs effortlessly. Designed for a seamless user experience, it features:

          ✅ Secure authentication (Email/Password & Google Login)

          ✅ Wishlist functionality for saving favorite blogs

          ✅ Advanced search & filtering for easy blog discovery

          ✅ User engagement through comments

          ✅ Smooth animations for a dynamic feel
          

            Built with React, Tailwind CSS, Firebase, MongoDB, and JWT, Galaxy Blogger ensures performance, security, and scalability for an engaging and feature-rich experience.
          </strong>
        </p>
        <p className="text-lg mt-2">
          <strong>🛠 Technology Stack: </strong>
          Galaxy Blogger leverages cutting-edge technologies to deliver a fast, secure, and scalable platform:

          Frontend: React.js, Tailwind CSS, React Helmet, Framer Motion
          Backend: Node.js, Express.js, MongoDB, Mongoose
          Authentication: Firebase, JSON Web Token (JWT)
          Data Management: TanStack Query for optimized API calls
          Hosting & Deployment: Vercel (Frontend), Render (Backend)

        </p>
       
        <p className="text-lg mt-2">
          <strong>✨ Key Features: </strong>
          ✅ Secure Login & Signup: Email/password-based authentication. JWT-based authentication ensures data security.
          ✅ Social Login: Google authentication integration.
          ✅ JWT Protection: Secure private routes with JSON Web Token (JWT).
          ✅ Dynamic Blog Management – Create, update, Comment, and manage blogs effortlessly.
          ✅ Wishlist Functionality – Save favorite blogs for later reading.
          ✅ Advanced Search & Filtering – Find blogs by title or category easily.
          ✅ Modern Tech Stack – Built with React, Tailwind CSS, Firebase, MongoDB, JWT, Tanstack Query, React Helmet. and Framer Motion for smooth animations.
        </p>
        <p className="text-lg mt-2">
          <strong>🔥 Challenges Faced: </strong>
          Building Galaxy Blogger came with several challenges, including:

          Securing Authentication – Implementing JWT-based private routes for better security
          Optimizing Performance – Efficient API fetching with TanStack Query
          User-Friendly UI – Ensuring a responsive and intuitive design across devices
          Real-Time Blog Updates – Managing CRUD operations while maintaining data consistency
          Each challenge was successfully tackled using best practices, resulting in a high-performance and scalable blogging platform.
        </p>
        <p className="text-lg mt-2">
          <strong>Future Plans: </strong>
          Galaxy Blogger is continuously evolving! Here's what’s next:
        ✨ Dark Mode – A user-friendly toggle for night-time reading
        ✨ AI-Powered Blog Suggestions – Personalized blog recommendations
        ✨ Markdown Support – Advanced text formatting for bloggers
        ✨ Real-Time Chat & Notifications – Instant updates and engagement
        ✨ Multi-Author Collaboration – Allow multiple users to contribute to a blog
        </p>
        <div className="flex space-x-4 mt-4">
          <a
            href="https://galaxy-blogger.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:underline"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/wptasmina"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:underline"
          >
            GitHub
          </a>
        </div>


      </div>
    </div>
  );
}

export default Project2;
