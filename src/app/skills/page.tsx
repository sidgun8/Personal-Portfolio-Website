import SkillCard from "@/components/SkillCard";
import Heading from "../../components/Heading";
import { skillsData } from "../(constants)/skillsData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills That Define Me",
  description: "Skills That Define Me",
};

function Skills() {
  const sections = [
    { tag: "language", label: "Programming" },
    { tag: "Simulation Softwares", label: "Simulation Tools" },
    { tag: "ENTERPRISE SOFTWARES", label: "Data & Infra Stack" },
    { tag: "others", label: "AI & ML" },
  ] as const;

  return (
    <section className=" text-primary py-8 md:py-16 relative" id='skills'>
      <div className="container mx-auto w-[90%] md:w-8/12">
        <Heading name={'SKILLS'} heading_desc={'Skills That Define Me'} />
        <div className="flex flex-col gap-4">
          {
            sections.map(({ tag, label }, index) => (
              <div key={index} className="flex w-full flex-col gap-1">
                <p className="text-sm">{label.toUpperCase()}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-2">
                {skillsData.filter(skill => skill.tag === tag).map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
              </div>
              </div>
            ))
          }
        </div>
      </div>
    </section >
  );
}

export default Skills;