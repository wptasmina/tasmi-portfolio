import PropTypes from 'prop-types';

export default function SkillsAbout({ skill }) {
  const { img } = skill;

  return (
    <div className="card bg-base-100 card-sm shadow-sm">
      <div className="card-body flex justify-center items-center bg-[#0c0c0ca6] shadow-2xl">
        <img
          src={img}
          alt="logo"
          className="w-full md:h-20 h-16 object-cover p-2 object-center"
        />
      </div>
    </div>
  );
}

SkillsAbout.propTypes = {
  skill: PropTypes.shape({
    img: PropTypes.string.isRequired,
  }).isRequired,
};



// pages/Skills.jsx (or components/Skills.jsx)
// import { Helmet } from "react-helmet";
// import { AiOutlineJavaScript } from "react-icons/ai";
// import { IoLogoNodejs, IoLogoReact } from "react-icons/io5";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { SiMongodb } from "react-icons/si";
// import { TbBrandNextjs } from "react-icons/tb";
// import PropTypes from "prop-types";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// // ✅ SkillBox Component
// function SkillBox({ title, icon, color, description }) {
//   return (
//     <div
//       data-aos="fade-right"
//       data-aos-duration="2000"
//       className="border h-70 border-gray-200 p-6 rounded-lg"
//     >
//       <div
//         className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 mb-4"
//         style={{ color }}
//       >
//         {icon}
//       </div>
//       <h2 className="text-lg text-gray-400 font-medium title-font mb-2">
//         {title}
//       </h2>
//       <p className="leading-relaxed text-base">{description}</p>
//     </div>
//   );
// }

// SkillBox.propTypes = {
//   title: PropTypes.string.isRequired,
//   icon: PropTypes.element.isRequired,
//   color: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };

// // ✅ Skill Data
// const skills = [
//   {
//     title: "JavaScript",
//     icon: <AiOutlineJavaScript className="text-2xl" />,
//     color: "#EFD81D",
//     description: "JavaScript is a core language of the web, enabling dynamic content and interactivity.",
//   },
//   {
//     title: "React",
//     icon: <IoLogoReact className="text-2xl" />,
//     color: "#4ac6e2",
//     description: "React is a JavaScript library for building modern, dynamic UIs, especially SPAs.",
//   },
//   {
//     title: "Node.js",
//     icon: <IoLogoNodejs className="text-2xl" />,
//     color: "#4A9542",
//     description: "Node.js is a runtime that allows you to run JavaScript server-side and build fast APIs.",
//   },
//   {
//     title: "MongoDB",
//     icon: <SiMongodb className="text-2xl" />,
//     color: "#00B656",
//     description: "MongoDB is a flexible NoSQL database that stores data in JSON-like documents.",
//   },
//   {
//     title: "Next.js",
//     icon: <TbBrandNextjs className="text-2xl" />,
//     color: "black",
//     description: "Next.js is a React framework offering server-side rendering, static site generation, and more.",
//   },
//   {
//     title: "Tailwind CSS",
//     icon: <RiTailwindCssFill className="text-2xl" />,
//     color: "#29BAF8",
//     description: "Tailwind CSS is a utility-first CSS framework that allows rapid and custom UI building.",
//   },
// ];

// // ✅ Skills Component
// export default function Skills() {
//   useEffect(() => {
//     AOS.init({ once: true });
//   }, []);

//   return (
//     <>
//       <Helmet>
//         <title>Tasmina || Skills</title>
//       </Helmet>

//       <section className="w-full min-h-screen bg-gradient-to-tr from-black to-[#20123d] to-75% pb-12">
//         <div className="text-gray-600 w-11/12 mx-auto">
//           <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
//             <h1
//               data-aos="zoom-in"
//               className="sm:text-3xl text-2xl title-font mb-2 bg-gradient-to-r from-purple-400 to-[#341B66] bg-clip-text text-transparent font-bold pt-16"
//             >
//               Skills
//             </h1>
//           </div>

//           <div className="grid md:grid-cols-3 grid-cols-1 gap-4 w-full bg-[#0f172a]/90 rounded-2xl py-8 backdrop-blur-3xl">
//             {skills.map((skill, index) => (
//               <SkillBox
//                 key={index}
//                 title={skill.title}
//                 icon={skill.icon}
//                 color={skill.color}
//                 description={skill.description}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
