import { Metadata } from "next";
import ExperienceCard from "../../components/ExperienceCard";
import Heading from "../../components/Heading";
import { educationData } from "../(constants)/educationData";

export const metadata: Metadata = {
  title: "Education",
  description: "Academic background",
};

export default function EducationPage() {
  return (
    <section className="text-primary py-8 md:py-16" id="education">
      <div className="container mx-auto w-[90%] md:w-8/12">
        <Heading name={"EDUCATION"} heading_desc={"Academic Journey"} />

        <ol className="relative md:pl-8 flex flex-col gap-6">
          {educationData.map((item, index) => (
            <ExperienceCard
              key={index}
              heading={item.qualification}
              date={item.timeline}
              description={item.notes ? [item.notes] : [item.qualification]}
              company={item.institution}
              techStack={["Education"]}
              gitHub=""
              index={educationData.length - index}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
