"use client"

import { ExternalLink } from "lucide-react";

interface ExperienceCardProps {
  heading: string;
  date: string;
  description: string[];
  company: string;
  techStack: string[];
  gitHub: string;
  demo?: string;
  companyWebsite?: string;
  index: number;
}


function ExperienceCard({ heading, date, description, company, techStack, gitHub, demo, companyWebsite, index }: ExperienceCardProps) {


  return (
    <li className="mb-6 sm:mb-8 md:mb-10 md:ml-6 border p-6 rounded-xl text-primary shadow-md">
      <div className="absolute hidden md:block h-full w-[1px] md:w-1  left-0 top-12 bg-gradient-to-b from-primary/20 to-transparent" />

      <span className="absolute hidden z-10 md:flex items-center justify-center w-6 h-6 md:w-14 md:h-14 rounded-full -left-[26px]">
        <div className='text-2xl bg-secondary rounded-full w-10 h-10 text-primary font-black flex items-center justify-center'>
          {index}
        </div>
        <div className="-z-10 w-9 h-9 absolute bg-stone-700 bg-opacity-90 rounded-full blur-lg" />
      </span>


      <div className='flex flex-col gap-2 pb-2 border-b'>
        <div className='flex flex-col gap-1'>
          <h3 className="flex items-end text-xl font-semibold  md:text-2xl lg:text-3xl">
            {heading}
          </h3>
          <h2 className='text-lg md:text-xl flex items-end gap-1'>
            {company} .
            <p className="text-base md:text-lg text-gray-500">
              {date}
            </p>
          </h2>

          <div className='flex items-center gap-4'>
            {demo && (
              <span className='w-fit'>
                <a href={demo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mr-4 flex justify-start items-center">
                  <div className='flex justify-center gap-2 items-center'>
                    <img src="./images/Frame 1.svg" alt="" className='w-5 md:w-6' />
                    <span>Demo</span>
                  </div>
                </a>
              </span>
            )
            }
            {companyWebsite && (
              <span className='w-fit'>
                <a href={companyWebsite} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mr-4 flex justify-start items-center">
                  <div className='flex justify-center gap-2 items-center'>
                    <ExternalLink className='w-5 md:w-5 text-[rgb(113,113,113)]'/>
                    <span>Company</span>
                  </div>
                </a>
              </span>
            )
            }
            {gitHub && (
              <span className='w-fit'>
                <a href={gitHub} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex justify-start items-center">
                  <div className='flex justify-center gap-2 items-center'>
                    <img src="./images/Frame 2.svg" alt="" className='w-5 md:w-6' />
                    <span>Code</span>
                  </div>
                </a>
              </span>
            )
            }
          </div>
        </div>
      </div>

      <div className="mb-4 mt-4">
        <ul className="flex flex-wrap justify-start md:justify-start w-full text-xs md:text-sm gap-2">
          {techStack.map((tech, index) => (
            <li key={index} className='border rounded-full px-3 py-[2px]' >{tech}</li>
          ))}
        </ul>
      </div>
      <div className='pl-4'>
        <ul className="mb-2 list-disc sm:mb-3 md:mb-4 text-base md:text-lg font-normal">
          {description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default ExperienceCard;