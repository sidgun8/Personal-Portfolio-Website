import ExperienceCard from '../../components/ExperienceCard';
import Heading from '../../components/Heading';
import { experienceData } from '../(constants)/experienceData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "My Professional Voyage",
  description: "My Professional Voyage",
};

function Experience() {
  return (
    <section className=" text-primary py-8 md:py-16" id='experience'>
      <div className="container mx-auto w-[90%] md:w-8/12">
        <Heading name={'EXPERIENCE'} heading_desc={'My Professional Voyage'}/>

        <ol className="relative md:pl-8 flex flex-col gap-6">
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={index}
              heading={experience.title}
              date={experience.date}
              description={experience.description}
              company={experience.company}
              techStack={experience.techStack}
              gitHub={experience.gitHub || ""}
              demo={experience.demo}
              companyWebsite={experience.companyWebsite}
              index={experienceData.length - index}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;