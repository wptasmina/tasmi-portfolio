import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import P1 from "../../assets/project1.webp";

function Project1() {
  return (
    <>
    <div className="lg:w-8/12 w-11/12 mx-auto py-6 md:py-12">
    <Link to="/projects">
        <button className="flex items-center gap-2 px-4 py-2 cursor-pointer text-white bg-gradient-to-r from-purple-700 to-[#341B66] rounded-lg hover:bg-purple-800 transition duration-300">
        <BsArrowLeft size={20} />
        <span>Back</span>
        </button>
      </Link>
      <div className="mx-auto py-10">
        <img src={P1} alt="image" className="w-full sm:h-auto h-32 mx-auto rounded-md mb-6" />
        <h1 className="text-3xl font-bold mb-4">TrakSmart</h1>
        <p className="text-lg mt-2">
          <strong>Description: 
          TrakSmart is a cutting-edge web application designed to streamline the tracking, allocation, and management of company assets. It empowers HR Managers with full control over company assets while allowing employees to seamlessly request, return, and monitor their assigned assets.

          With secure authentication, real-time tracking, role-based access control, and insightful data visualization, TrakSmart ensures efficient decision-making and reduces manual tracking efforts.
          </strong>
        </p>
        <p className="text-lg">
  <strong>🛠 Technology Stack: </strong>
  TrakSmart is built using a modern and scalable tech stack to ensure high performance, security, and a seamless user experience:
</p>
<ul className="ml-6">
  <li><strong>Frontend:</strong> React.js, Tailwind CSS, React Helmet</li>
  <li><strong>Backend:</strong> Node.js, Express.js, MongoDB, Mongoose</li>
  <li><strong>Authentication:</strong> Firebase, JSON Web Token (JWT)</li>
  <li><strong>State Management & Data Fetching:</strong> TanStack Query</li>
  <li><strong>Visualization:</strong> Chart.js for data insights & analytics</li>
  <li><strong>Hosting & Deployment:</strong> Vercel (Frontend), Render (Backend)</li>
  <li><strong>Payment Integration:</strong> Stripe (For HR managers to purchase packages)</li>
</ul>

<p className="text-lg mt-2">
  <strong>✨ Key Features: </strong>
</p>
<ul className="ml-6">
  <li>✅ Real-Time Asset Tracking – Monitor asset usage, assignments, and returns effortlessly</li>
  <li>✅ Streamlined Request Management – Employees can request, return, and cancel assets via an intuitive dashboard</li>
  <li>✅ Role-Based Access Control – HR Managers manage assets & employee records, while employees oversee their assigned assets</li>
  <li>✅ Secure Authentication – JWT-based authentication ensures data privacy & security</li>
  <li>✅ Smart Search & Filtering – Quickly locate assets by name, type, or status</li>
  <li>✅ Data Insights & Visualization – Pie charts & analytics for informed decision-making</li>
  <li>✅ Scalable & Modern Tech Stack – Built with React, Tailwind CSS, Firebase, MongoDB, JWT, and TanStack Query</li>
  <li>✅ Fully Responsive – Optimized for mobile, tablet, and desktop users</li>
  <li>✅ Seamless Payment Integration – HR Managers can purchase packages to expand employee limits</li>
</ul>

<p className="text-lg mt-2">
  <strong>🔥 Challenges Faced: </strong>
  Building TrakSmart came with several technical challenges, which were successfully tackled:
</p>
<ul className="ml-6">
  <li>🔹 Ensuring Secure Access – Implementing JWT-based authentication for role-based security</li>
  <li>🔹 Efficient Data Fetching – Optimizing API calls using TanStack Query</li>
  <li>🔹 Dynamic Asset Tracking – Managing real-time updates for asset allocation & requests</li>
  <li>🔹 User-Friendly Design – Ensuring an intuitive and responsive UI across devices</li>
  <li>🔹 Scalability – Structuring the database to handle large volumes of asset data</li>
</ul>

<p className="text-lg mt-2">
  <strong>🚀 Future Plans: </strong>
  TrakSmart is continuously evolving with exciting upcoming features:
</p>
<ul className="ml-6 list-none">
  <li>✨ AI-Powered Asset Predictions – Intelligent tracking to predict asset usage trends</li>
  <li>✨ Multi-Company Support – Manage assets across multiple organizations</li>
  <li>✨ QR Code Scanning – Quickly scan & update asset records</li>
  <li>✨ Automated Notifications – Alerts for pending asset returns & approvals</li>
  <li>✨ Offline Mode – Access limited functionalities without an internet connection</li>
  <li>✨ Advanced Reports & Export – Generate detailed reports for asset audits</li>
</ul>

        <div className="flex space-x-4 mt-4">
          <a
            href="https://xyzcompany-9211e.web.app"
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

    </>
  );
}

export default Project1;
