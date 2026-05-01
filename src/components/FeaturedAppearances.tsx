import Heading from "./Heading";

const featuredItems = [
  {
    label: "YouTube",
    title: "SidGun08 Channel",
    summary:
      "A quick entry point to Siddharth's public videos, walkthroughs, and practical explainers.",
    href: "https://www.youtube.com/@SidGun08",
    cta: "Watch on YouTube",
  },
  {
    label: "YouTube",
    title: "Featured Video",
    summary:
      "Specific featured YouTube appearance highlighted as part of the public content portfolio.",
    href: "https://www.youtube.com/watch?v=yjpNDDVLBco",
    cta: "Watch Featured Video",
  },
  {
    label: "Medium",
    title: "Featured Writing",
    summary:
      "Selected writing on Industrial AI, optimization strategy, infrastructure, and rapid prototyping.",
    href: "https://medium.com/@WellSidWrites",
    cta: "Read on Medium",
  },
  {
    label: "Google Reviews",
    title: "Public Review Presence",
    summary:
      "Snapshot of profile credibility and on-ground feedback trail through public reviews.",
    href: "https://www.google.com/maps/contrib/105841133264984381037/reviews/@17.713815,-42.7454139,3z/data=!3m1!4b1!4m3!8m2!3m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D",
    cta: "Open Google Reviews",
  },
  {
    label: "Instagram",
    title: "Featured Instagram Post",
    summary:
      "A spotlight post added to your public appearances and featured content collection.",
    href: "https://www.instagram.com/p/CX8gvq_FOEB/?img_index=1",
    cta: "View on Instagram",
  },
];

export default function FeaturedAppearances() {
  const getFeaturedPreviewStyle = (label: string) => {
    switch (label.toLowerCase()) {
      case "youtube":
        return "bg-gradient-to-br from-[#fee2e2] via-[#ffffff] to-[#fecaca] border border-brand/20";
      case "medium":
        return "bg-gradient-to-br from-[#fef3c7] via-[#ffffff] to-[#fef9c3] border border-[#f59e0b]/20";
      case "google reviews":
        return "bg-gradient-to-br from-[#dbeafe] via-[#ffffff] to-[#dcfce7] border border-[#3b82f6]/20";
      case "instagram":
        return "bg-gradient-to-br from-[#fce7f3] via-[#ffffff] to-[#ede9fe] border border-[#ec4899]/20";
      default:
        return "bg-gradient-to-br from-[#f5f5f5] via-[#ffffff] to-[#fee2e2] border border-brand/20";
    }
  };

  return (
    <section className="py-8 md:py-12 text-primary">
      <div className="container mx-auto w-[90%] md:w-8/12">
        <Heading
          name="APPEARANCES / FEATURED"
          heading_desc="Public mentions, channels, and featured content"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-brand/20 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className={`mb-4 rounded-xl p-4 min-h-28 flex flex-col justify-between ${getFeaturedPreviewStyle(item.label)}`}>
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-brand">
                    {item.label} Preview
                  </p>
                  <span className="text-sm font-bold text-primary/70">
                    {item.label === "YouTube" ? "YT" : item.label === "Medium" ? "M" : item.label === "Instagram" ? "IG" : "G"}
                  </span>
                </div>
                <p className="mt-1 text-sm font-semibold text-primary line-clamp-2">
                  {item.title}
                </p>
                <div className="mt-2 h-2 rounded-full bg-brand/20 overflow-hidden">
                  <div className="h-full w-2/3 bg-brand"></div>
                </div>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                {item.label}
              </p>
              <h3 className="mt-2 text-lg font-semibold leading-snug">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.summary}</p>
              <p className="mt-4 text-sm font-medium text-brand">{item.cta} -&gt;</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
