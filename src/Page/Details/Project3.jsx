import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import P3 from "../../assets/project3.png";

function Project3() {
  return (
    <div className="lg:w-8/12 w-11/12 mx-auto py-6 md:py-12">
          <Link to="/projects">
             <button className="flex items-center gap-2 px-4 py-2 cursor-pointer text-white bg-gradient-to-r from-purple-700 to-[#341B66] rounded-lg hover:bg-purple-800 transition duration-300">
             <BsArrowLeft size={20} />
             <span>Back</span>
             </button>
           </Link>
      <div className="py-10">
        <img src={P3} alt="image" className="w-full sm:h-auto h-32 mx-auto rounded-md mb-6" />
        <h1 className="text-3xl font-bold mb-4">BPL Cricket Team</h1>
        <p className="text-lg mt-2">
  <strong>Description:</strong>  
  BPL Cricket Team is an interactive web platform showcasing the unique identity, strategies, and player compositions of the Bangladesh Premier League (BPL) teams. Designed for cricket enthusiasts, this project highlights:
</p>
<ul className="ml-6">
  <li>🏏 Team dynamics and gameplay strategies</li>
  <li>🏏 Youth talent development</li>
  <li>🏏 Passionate fan engagement</li>
</ul>

<p className="text-lg">
  <strong>🛠 Technology Stack:</strong>  
  Built using modern web technologies to ensure performance, responsiveness, and seamless interactivity:
</p>
<ul className="ml-6">
  <li><strong>Frontend:</strong> React.js, Tailwind CSS, Daisy UI</li>
  <li><strong>Styling & UI Components:</strong> CSS3, Daisy UI (for sleek, pre-styled UI components)</li>
  <li><strong>State Management & Interactivity:</strong> JavaScript</li>
  <li><strong>Development Tools:</strong> Vite.js (for fast build and development)</li>
  <li><strong>Hosting & Deployment:</strong> Netlify</li>
</ul>

<p className="text-lg mt-2">
  <strong>🏏 Key Features:</strong>
</p>
<ul className="ml-6">
  <li>✅ Diverse Team Composition – Showcases a balanced mix of domestic and international players</li>
  <li>✅ Aggressive Batting Strategy – Highlights how teams adopt high-scoring, attacking gameplay</li>
  <li>✅ Robust Bowling Lineup – Displays team bowling strengths, featuring spinners and fast bowlers</li>
  <li>✅ Youth Talent Development – Emphasizes opportunities for young, local cricketers to gain exposure</li>
  <li>✅ Passionate Fanbase – Captures the energy and enthusiasm of BPL’s dedicated supporters</li>
  <li>✅ Responsive & Interactive Design – Optimized for mobile, tablet, and desktop users</li>
  <li>✅ Smooth Navigation & User Experience – Built with React and Tailwind CSS for seamless interactions</li>
</ul>

<p className="text-lg mt-2">
  <strong>🔥 Challenges Faced:</strong>  
  Building the BPL Cricket Team platform came with a few challenges:
</p>
<ul className="ml-6">
  <li>🔹 Dynamic Data Representation – Ensuring smooth rendering of team data and player details</li>
  <li>🔹 Optimizing Performance – Using Vite.js for faster builds and efficient component updates</li>
  <li>🔹 Designing an Engaging UI – Leveraging Tailwind CSS & Daisy UI for a modern, visually appealing design</li>
  <li>🔹 Ensuring Responsive Layout – Creating a consistent experience across different devices</li>
  <li>🔹 Improving Navigation & User Experience – Implementing a user-friendly, easy-to-navigate interface</li>
</ul>

<p className="text-lg mt-2">
  <strong>🚀 Future Plans:</strong>  
  We are continuously working on enhancing the platform with exciting new features:
</p>
<ul className="ml-6">
  <li>✨ Live Match Updates – Displaying real-time scores and player stats</li>
  <li>✨ Interactive Player Profiles – In-depth stats, history, and performance analysis</li>
  <li>✨ Fan Engagement Features – Polls, quizzes, and discussion forums for BPL enthusiasts</li>
  <li>✨ Dark Mode Toggle – Enhancing user experience with a theme switcher</li>
  <li>✨ API Integration – Connecting to live sports APIs for real-time team updates</li>
  <li>✨ Social Media Sharing – Allowing users to share team insights & match highlights</li>
</ul>

<p className="text-lg mt-2">
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

export default Project3;
