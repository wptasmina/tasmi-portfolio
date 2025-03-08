
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import Title from "../../Layout/Title";
import ProjectsCard from "./ProjectsCard";



const Projects = () => {
  return (
    <section
      id="projects"
      className=" bg-gradient-to-tr from-black to-[#20123d] to-75% pt-4 pb-10 border-b-[1px] border-b-black"
    >
      <div className="w-11/12 mx-auto">
      <div className="flex justify-center items-center text-center">
        <Title des="My Projects" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 xl:gap-10">
        <ProjectsCard
          title="TrakSmart"
          des="The Asset Management System is a web application designed to streamline the tracking, allocation, and management of company assets."
          src={projectOne}
          link="https://xyzcompany-9211e.web.app"
          view="/trakSmart"
        />
        <ProjectsCard
          title="Galaxy Blogger"
          des="Galaxy Blogger is a modern, fully responsive blog platform where users can explore, create, manage, and interact with blogs. Featuring secure authentication"
          src={projectTwo}
          link="https://galaxy-blogger.netlify.app"
          view="/galaxy-blogger"
          
        />
        <ProjectsCard
          title="Chatting App"
          des="BPL Cricket Team is a dynamic React-based project showcasing the unique features of Bangladesh Premier League teams, including diverse player compositions, aggressive strategies, robust bowling, youth talent development, and passionate fan support."
          src={projectThree}
          link="https://cricket-team-2024.netlify.app"
          view="/cricket-team"
        />

      </div>
      </div>
    </section>
  );
}

export default Projects