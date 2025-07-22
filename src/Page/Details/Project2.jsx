
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import P2 from "../../assets/project2.webp";

function Project2() {
  return (
    <div className="lg:w-8/12 w-11/12 mx-auto py-6 md:py-12">
     <Link to="/projects">
        <button className="flex items-center gap-2 px-4 py-2 cursor-pointer text-white bg-gradient-to-r from-purple-700 to-[#341B66] rounded-lg hover:bg-purple-800 transition duration-300">
        <BsArrowLeft size={20} />
        <span>Back</span>
        </button>
      </Link>

      <div className=" py-10">
        <img src={P2} alt="image" className="w-full sm:h-auto h-32 mx-auto rounded-md mb-6" />
        <h1 className="text-3xl font-bold mb-4">Galaxy Blogger</h1>
      <p className="text-lg mt-2">
  <strong>Description: </strong>  
  Galaxy Blogger is a modern, fully responsive blogging platform where users can explore, create, manage, and engage with blogs effortlessly. Designed for a seamless user experience, it features:
</p>
<ul className="ml-6">
  <li>✅ Secure authentication (Email/Password & Google Login)</li>
  <li>✅ Wishlist functionality for saving favorite blogs</li>
  <li>✅ Advanced search & filtering for easy blog discovery</li>
  <li>✅ User engagement through comments</li>
  <li>✅ Smooth animations for a dynamic feel</li>
</ul>
<p className="text-lg mt-2">
  Built with React, Tailwind CSS, Firebase, MongoDB, and JWT, Galaxy Blogger ensures performance, security, and scalability for an engaging and feature-rich experience.
</p>

<p className="text-lg mt-2">
  <strong>🛠 Technology Stack:</strong>  
  Galaxy Blogger leverages cutting-edge technologies to deliver a fast, secure, and scalable platform:
</p>
<ul className="ml-6">
  <li><strong>Frontend:</strong> React.js, Tailwind CSS, React Helmet, Framer Motion</li>
  <li><strong>Backend:</strong> Node.js, Express.js, MongoDB, Mongoose</li>
  <li><strong>Authentication:</strong> Firebase, JSON Web Token (JWT)</li>
  <li><strong>Data Management:</strong> TanStack Query for optimized API calls</li>
  <li><strong>Hosting & Deployment:</strong> Vercel (Frontend), Render (Backend)</li>
</ul>

<p className="text-lg mt-2">
  <strong>✨ Key Features:</strong>
</p>
<ul className="ml-6">
 <li>✅ Secure Login & Signup – Email/password-based authentication</li>
  <li>✅ Social Login – Google authentication integration</li>
  <li>✅ JWT Protection – Secure private routes with JSON Web Token (JWT)</li>
  <li>✅ Dynamic Blog Management – Create, update, comment, and manage blogs effortlessly</li>
  <li>✅ Wishlist Functionality – Save favorite blogs for later reading</li>
  <li>✅ Advanced Search & Filtering – Find blogs by title or category easily</li>
  <li>✅ Modern Tech Stack – Built with React, Tailwind CSS, Firebase, MongoDB, JWT, TanStack Query, React Helmet, and Framer Motion for smooth animations</li>
</ul>

<p className="text-lg mt-2">
  <strong>🔥 Challenges Faced:</strong>  
  Building Galaxy Blogger came with several challenges, including:
</p>
<ul className="ml-6">
  <li>🔹 Securing Authentication – Implementing JWT-based private routes for better security</li>
  <li>🔹 Optimizing Performance – Efficient API fetching with TanStack Query</li>
  <li>🔹 User-Friendly UI – Ensuring a responsive and intuitive design across devices</li>
  <li>🔹 Real-Time Blog Updates – Managing CRUD operations while maintaining data consistency</li>
</ul>
<p className="text-lg mt-2">
  Each challenge was successfully tackled using best practices, resulting in a high-performance and scalable blogging platform.
</p>

<p className="text-lg mt-2">
  <strong>🚀 Future Plans:</strong>  
  Galaxy Blogger is continuously evolving! Here&apos;s what&apos;s next:
</p>
<ul className="ml-6">
  <li>✨ Dark Mode – A user-friendly toggle for night-time reading</li>
  <li>✨ AI-Powered Blog Suggestions – Personalized blog recommendations</li>
  <li>✨ Markdown Support – Advanced text formatting for bloggers</li>
  <li>✨ Real-Time Chat & Notifications – Instant updates and engagement</li>
  <li>✨ Multi-Author Collaboration – Allow multiple users to contribute to a blog</li>
</ul>

        <div className="flex space-x-4 mt-4">
          <a
            href="https://galaxy-blogger.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:underline"
          >
            Live Demo
          </a>
          <Link to="https://github.com/wptasmina"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:underline"
          >
            GitHub
          </Link>
        </div>


      </div>
    </div>
  );
}

export default Project2;
