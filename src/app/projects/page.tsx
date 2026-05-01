import Heading from '../../components/Heading';
import ProjectCard from '../../components/ProjectCard';
import { projectsData } from '../(constants)/projectsData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Portfolio of Projects",
  description: "A Portfolio of Projects",
};

function Projects() {
  const techProjects = projectsData.filter((project) => project.category === "tech");
  const businessProjects = projectsData.filter(
    (project) => project.category === "business"
  );

  return (
    <section className="text-primary py-8 md:py-16 relative" id='projects'>

      <div className="container mx-auto w-[90%] md:w-8/12">

        <Heading name={'PROJECTS'} heading_desc={'A Portfolio of Projects'} />

        <div className="flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-4 w-full">
            <h2 className="text-2xl md:text-3xl font-semibold">Tech Projects</h2>
            {techProjects.map((project, index) => (
              <ProjectCard key={`tech-${index}`} project={project} />
            ))}
          </div>

          <div className="flex flex-col gap-4 w-full">
            <h2 className="text-2xl md:text-3xl font-semibold">Business / Management Projects</h2>
            {businessProjects.map((project, index) => (
              <ProjectCard key={`business-${index}`} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;