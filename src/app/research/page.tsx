import { Metadata } from "next";
import Heading from "../../components/Heading";
import { researchData } from "../(constants)/researchData";

export const metadata: Metadata = {
  title: "Research",
  description: "Research interests and work",
};

export default function ResearchPage() {
  return (
    <section className="text-primary py-8 md:py-16" id="research">
      <div className="container mx-auto w-[90%] md:w-8/12">
        <Heading name={"RESEARCH"} heading_desc={"Applied Research Focus"} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {researchData.map((item, index) => (
            <article
              key={index}
              className="rounded-2xl border border-brand/20 bg-white p-5 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                {item.area}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
