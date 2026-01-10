import Heading from '../../components/Heading';
import ProjectCard from '../../components/ProjectCard';
import { projectsData } from '../(constants)/projectsData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Portfolio of Projects",
  description: "A Portfolio of Projects",
};

function Projects() {
  return (
    <section className=" text-white py-8 md:py-16 relative " id='projects'>

      <div className="container mx-auto w-[90%] md:w-8/12">

        <Heading name={'PROJECTS'} heading_desc={'A Portfolio of Projects'} />

        <div className="flex flex-col gap-4 w-full">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;