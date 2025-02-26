import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import P3 from "../../assets/project3.png";

function Project3() {
  return (
    <div className="w-8/12 mx-auto py-6 md:py-12">
      <Link
        to="/"
        className="flex items-center gap-2 text-white bg-gradient-to-r from-purple-700 to-[#341B66] px-3 py-2 rounded-lg hover:bg-purple-800 transition duration-300"
      >
        <BsArrowLeft size={20} />
        <span>Back</span>
      </Link>
      <div className="py-10">
        <h1 className="text-3xl font-bold text-center mb-4"></h1>
        <img src={P3} alt="" className="w-full mx-auto rounded-md mb-6" />
        <p className="text-lg mt-2">
          <strong>Description:  
          BPL Cricket Team is an interactive web platform showcasing the unique identity, strategies, and player compositions of the Bangladesh Premier League (BPL) teams. Designed for cricket enthusiasts, this project highlights team dynamics, aggressive gameplay strategies, youth talent development, and passionate fan engagement.
          </strong>
        </p>
        <p className="text-lg">
          <strong>🛠 Technology Stack: </strong>
          Built using modern web technologies to ensure performance, responsiveness, and seamless interactivity:

          Frontend: React.js, Tailwind CSS, Daisy UI
          Styling & UI Components: CSS3, Daisy UI (for sleek, pre-styled UI components)
          State Management & Interactivity: JavaScript
          Development Tools: Vite.js (for fast build and development)
          Hosting & Deployment: Netlify

        </p>
        <p className="text-lg mt-2">
          <strong>🏏 Key Features: </strong>
          ✅ Diverse Team Composition – Showcases a balanced mix of domestic and international players
          ✅ Aggressive Batting Strategy – Highlights how teams adopt high-scoring, attacking gameplay
          ✅ Robust Bowling Lineup – Displays team bowling strengths, featuring spinners and fast bowlers
          ✅ Youth Talent Development – Emphasizes opportunities for young, local cricketers to gain exposure
          ✅ Passionate Fanbase – Captures the energy and enthusiasm of BPL’s dedicated supporters
          ✅ Responsive & Interactive Design – Optimized for mobile, tablet, and desktop users
          ✅ Smooth Navigation & User Experience – Built with React and Tailwind CSS for seamless interactions
        </p>
        <p className="text-lg mt-2">
          <strong>🔥 Challenges Faced: </strong>
          Building the BPL Cricket Team platform came with a few challenges:

        🔹 Dynamic Data Representation – Ensuring smooth rendering of team data and player details
        🔹 Optimizing Performance – Using Vite.js for faster builds and efficient component updates
        🔹 Designing an Engaging UI – Leveraging Tailwind CSS & Daisy UI for a modern, visually appealing design
        🔹 Ensuring Responsive Layout – Creating a consistent experience across different devices
        🔹 Improving Navigation & User Experience – Implementing a user-friendly, easy-to-navigate interface
        </p>
        <p className="text-lg mt-2">
          <strong>🚀 Future Plans: </strong>
          We are continuously working on enhancing the platform with exciting new features:

        ✨ Live Match Updates – Displaying real-time scores and player stats
        ✨ Interactive Player Profiles – In-depth stats, history, and performance analysis
        ✨ Fan Engagement Features – Polls, quizzes, and discussion forums for BPL enthusiasts
        ✨ Dark Mode Toggle – Enhancing user experience with a theme switcher
        ✨ API Integration – Connecting to live sports APIs for real-time team updates
        ✨ Social Media Sharing – Allowing users to share team insights & match highlights

        With these upcoming updates, BPL Cricket Team aims to be the ultimate digital hub for BPL fans worldwide! 🌏🏏


        </p>
        <div className="flex space-x-4 mt-4">
          <a
            href="https://cricket-team-2024.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:underline"
          >
            Live Demo
          </a>
          <a
            href=""
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

export default Project3;
