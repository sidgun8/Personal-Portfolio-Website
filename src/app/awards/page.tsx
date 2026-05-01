import { Metadata } from "next";
import Heading from "../../components/Heading";
import { awardsData } from "../(constants)/awardsData";

export const metadata: Metadata = {
  title: "Awards",
  description: "Awards and recognitions",
};

export default function AwardsPage() {
  return (
    <section className="text-primary py-8 md:py-16" id="awards">
      <div className="container mx-auto w-[90%] md:w-8/12">
        <Heading name={"AWARDS"} heading_desc={"Recognitions and Milestones"} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {awardsData.map((item, index) => (
            <article
              key={index}
              className="rounded-2xl border border-brand/20 bg-white p-5 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                {item.issuer}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
