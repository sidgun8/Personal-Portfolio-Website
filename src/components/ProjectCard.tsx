import Link from "next/link";
import { ProjectType } from "../app/(constants)/projectsData";
import { ArrowUpRight, Github, Smartphone } from "lucide-react";

function ProjectCard({ project }: { project: ProjectType }) {
    return (
        <div className="border rounded-xl shadow-md px-4 md:px-6 text-primary">
            <div className='w-full flex flex-col gap-3 border-b py-4'>
                <h3 className="text-3xl font-semibold">{project.title}</h3>

                <div className="flex flex-wrap gap-1 text-sm font-medium">
                    {project.tech.map((tech, index) => (
                        <span key={index} className='border border-primary rounded-full px-3 py-[1.5px]' >{tech}</span>
                    ))}
                </div>

                <div className='flex items-center gap-4'>
                    {project.links.map((link, index) => (
                        <Link key={index} href={link.link} className='flex items-center gap-1'>
                            {
                                link.name === "Demo" ?
                                    <ArrowUpRight className='w-5 h-5 text-neutral-500' /> : link.name === "Code" ?
                                        <Github className='w-5 h-5 text-neutral-500' /> :
                                        <Smartphone className='w-5 h-5 text-neutral-500' />
                            }
                            <span className='text-blue-600'>{link.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            <div className='pl-4'>
                <ul className="text-base md:text-lg mb-4 py-4 list-disc">{
                    project.description.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))
                }</ul>
            </div>

            {/* <div className="flex">
          {project.demoLink && (
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mr-4 flex justify-start items-center">
              <div className='flex justify-center gap-2 items-center'>
                <img src="./images/Frame 1.svg" alt="" />
                <span>Demo</span>
              </div>
            </a>
          )}
  
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex justify-start items-center">
            <div className='flex justify-center gap-2 items-center'>
              <img src="./images/Frame 2.svg" alt="" />
              <span>Code</span>
            </div>
          </a>
        </div> */}
        </div>
    );
}

export default ProjectCard