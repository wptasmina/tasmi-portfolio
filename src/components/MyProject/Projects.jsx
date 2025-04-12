
import projectsData from "./projectsData";
import ProjectsCard from './ProjectsCard';
import Title from "../../Layout/Title";


const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-tr from-black to-[#20123d] to-75% pt-4 pb-10 border-b-[1px] border-b-black"
    >
      <div className="w-11/12 mx-auto">
        <div className="flex justify-center items-center text-center">
          <Title des="My Projects" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 xl:gap-10">
          {projectsData.map((project, index) => (
            <ProjectsCard
              key={index}
              title={project.title}
              des={project.des}
              src={project.src}
              link={project.link}
              view={project.view}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
