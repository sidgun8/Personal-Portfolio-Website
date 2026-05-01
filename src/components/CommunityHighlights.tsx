import {
  googleReviewPreviewCards,
  mediumPreviewCards,
} from "@/app/(constants)/communityHighlights";
import Heading from "./Heading";

const cardStyles =
  "rounded-2xl border border-brand/20 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md";

const getPreviewStyle = (kind: "medium" | "google") =>
  kind === "medium"
    ? "bg-gradient-to-br from-[#fef3c7] via-[#ffffff] to-[#fee2e2] border border-[#f59e0b]/30"
    : "bg-gradient-to-br from-[#dbeafe] via-[#ffffff] to-[#fee2e2] border border-[#3b82f6]/30";

export default function CommunityHighlights() {
  return (
    <section className="py-8 md:py-14 text-primary">
      <div className="container mx-auto w-[90%] md:w-8/12 flex flex-col gap-10">
        <div>
          <Heading
            name="MEDIUM PREVIEWS"
            heading_desc="Featured writing highlights from WellSidWrites"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mediumPreviewCards.map((card, index) => (
              <a
                key={index}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardStyles}
              >
                <div className={`mb-4 rounded-xl p-4 min-h-28 flex flex-col justify-between ${getPreviewStyle("medium")}`}>
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-bold uppercase tracking-wide text-brand">Article Preview</p>
                    <img src="./images/Icons/Social/Medium.svg" alt="medium" className="w-5 h-5" />
                  </div>
                  <p className="mt-2 text-sm font-semibold text-primary line-clamp-2">{card.title}</p>
                  <div className="mt-2 h-2 rounded-full bg-brand/20 overflow-hidden">
                    <div className="h-full w-2/3 bg-brand"></div>
                  </div>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                  Medium
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-snug">{card.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{card.summary}</p>
                <p className="mt-4 text-sm font-medium text-brand">{card.cta} -></p>
              </a>
            ))}
          </div>
        </div>

        <div>
          <Heading
            name="GOOGLE REVIEW PREVIEWS"
            heading_desc="Quick look at review focus areas before opening the full profile"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {googleReviewPreviewCards.map((card, index) => (
              <a
                key={index}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardStyles}
              >
                <div className={`mb-4 rounded-xl p-4 min-h-28 flex flex-col justify-between ${getPreviewStyle("google")}`}>
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-bold uppercase tracking-wide text-brand">Review Preview</p>
                    <span className="text-sm font-bold text-blue-600">G</span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-primary line-clamp-2">{card.title}</p>
                  <div className="mt-2 h-2 rounded-full bg-blue-200 overflow-hidden">
                    <div className="h-full w-3/4 bg-blue-500"></div>
                  </div>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                  Google Reviews
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-snug">{card.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{card.summary}</p>
                <p className="mt-4 text-sm font-medium text-brand">{card.cta} -></p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
