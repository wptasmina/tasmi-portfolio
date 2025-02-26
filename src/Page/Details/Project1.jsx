import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import P1 from "../../assets/project1.png";

function Project1() {
  return (
    <div className="w-8/12 mx-auto py-6 md:py-12">
      <Link
        to="/"
        className="flex items-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-purple-700 to-[#341B66] rounded-lg hover:bg-purple-800 transition duration-300"
      >
        <BsArrowLeft size={20} />
        <span>Back</span>
      </Link>
      <div className="mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-4"></h1>
        <img src={P1} alt="" className="w-full mx-auto rounded-md mb-6" />
        <p className="text-lg mt-2">
          <strong>Description:
          TrakSmart is a cutting-edge web application designed to streamline the tracking, allocation, and management of company assets. It empowers HR Managers with full control over company assets while allowing employees to seamlessly request, return, and monitor their assigned assets.

          With secure authentication, real-time tracking, role-based access control, and insightful data visualization, TrakSmart ensures efficient decision-making and reduces manual tracking efforts.
          </strong>
        </p>
        <p className="text-lg">
          <strong>🛠 Technology Stack: </strong>
          TrakSmart is built using a modern and scalable tech stack to ensure high performance, security, and a seamless user experience:

          Frontend: React.js, Tailwind CSS, React Helmet
          Backend: Node.js, Express.js, MongoDB, Mongoose
          Authentication: Firebase, JSON Web Token (JWT)
          State Management & Data Fetching: TanStack Query
          Visualization: Chart.js for data insights & analytics
          Hosting & Deployment: Vercel (Frontend), Render (Backend)
          Payment Integration: Stripe (For HR managers to purchase packages)
        </p>
        <p className="text-lg mt-2">
          <strong>✨ Key Features:  </strong>
                  ✅ Real-Time Asset Tracking – Monitor asset usage, assignments, and returns effortlessly
        ✅ Streamlined Request Management – Employees can request, return, and cancel assets via an intuitive dashboard
        ✅ Role-Based Access Control – HR Managers manage assets & employee records, while employees oversee their assigned assets
        ✅ Secure Authentication – JWT-based authentication ensures data privacy & security
        ✅ Smart Search & Filtering – Quickly locate assets by name, type, or status
        ✅ Data Insights & Visualization – Pie charts & analytics for informed decision-making
        ✅ Scalable & Modern Tech Stack – Built with React, Tailwind CSS, Firebase, MongoDB, JWT, and TanStack Query
        ✅ Fully Responsive – Optimized for mobile, tablet, and desktop users
        ✅ Seamless Payment Integration – HR Managers can purchase packages to expand employee limits
        </p>
        <p className="text-lg mt-2">
          <strong>🔥 Challenges Faced: </strong>
          Building TrakSmart came with several technical challenges, which were successfully tackled:
          🔹 Ensuring Secure Access – Implementing JWT-based authentication for role-based security
          🔹 Efficient Data Fetching – Optimizing API calls using TanStack Query
          🔹 Dynamic Asset Tracking – Managing real-time updates for asset allocation & requests
          🔹 User-Friendly Design – Ensuring an intuitive and responsive UI across devices
          🔹 Scalability – Structuring the database to handle large volumes of asset data
        </p>
        <p className="text-lg mt-2">
          <strong>🚀 Future Plans: </strong>
          TrakSmart is continuously evolving with exciting upcoming features:
        ✨ AI-Powered Asset Predictions – Intelligent tracking to predict asset usage trends
        ✨ Multi-Company Support – Manage assets across multiple organizations
        ✨ QR Code Scanning – Quickly scan & update asset records
        ✨ Automated Notifications – Alerts for pending asset returns & approvals
        ✨ Offline Mode – Access limited functionalities without an internet connection
        ✨ Advanced Reports & Export – Generate detailed reports for asset audits
        </p>


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
  );
}

export default Project1;
