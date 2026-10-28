import { usePageTitle } from "@/router";
import { useSiteData } from "@/lib/site-context";
import { PageHero } from "@/components/layout";
import { Btn, Icon, Img, Section, SectionHeading } from "@/components/ui";

export default function OurApproach() {
  usePageTitle("Our Approach");
  const { approach } = useSiteData();

  return (
    <>
      <PageHero
        title="Our Approach"
        sub={approach.intro}
        image={approach.heroImage}
      />

      <Section>
        <SectionHeading
          eyebrow="Process"
          title="Four Steps, One Consistent Standard"
          sub="Our engagement process keeps requirements, planning, coordination and review clearly separated — so nothing is left to assumption."
          align="center"
        />

        {/* Horizontal timeline on desktop */}
        <div className="relative mt-14 hidden lg:block">
          <div className="absolute left-0 right-0 top-9 h-0.5 bg-hairline" aria-hidden="true" />
          <ol className="relative grid grid-cols-4 gap-8">
            {approach.steps.map((step) => (
              <li key={step.no} className="text-center">
                <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-full border-4 border-white bg-navy text-lg font-extrabold text-white shadow-md" style={{ height: 72, width: 72 }}>
                  {step.no}
                </div>
                <h3 className="mt-4 font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.text}</p>
                <Img
                  src={step.image}
                  alt={step.title}
                  className="mt-4 aspect-[16/10] w-full rounded-lg object-cover shadow-sm"
                />
              </li>
            ))}
          </ol>
        </div>

        {/* Vertical timeline on mobile / tablet */}
        <ol className="relative mt-10 space-y-8 lg:hidden">
          {approach.steps.map((step, i) => (
            <li key={step.no} className="relative flex gap-5">
              {i < approach.steps.length - 1 && (
                <div
                  className="absolute left-[27px] top-14 bottom-0 w-0.5 bg-hairline"
                  aria-hidden="true"
                />
              )}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy font-extrabold text-white">
                {step.no}
              </div>
              <div className="min-w-0 flex-1 rounded-lg border border-hairline bg-mist p-5">
                <h3 className="font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.text}</p>
                <Img
                  src={step.image}
                  alt={step.title}
                  className="mt-3 aspect-[16/9] w-full rounded-md object-cover"
                />
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="mist">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80"
            alt="Warehouse staff coordinating daily operations"
            className="aspect-[4/3] w-full rounded-lg object-cover shadow-md"
          />
          <div>
            <SectionHeading
              eyebrow="In Practice"
              title="What This Means for Your Operations"
            />
            <ul className="mt-6 space-y-4">
              {[
                "Requirements are documented before any personnel are deployed.",
                "Service plans are agreed in advance, covering roles and schedules.",
                "Personnel are briefed on site expectations before starting.",
                "Progress is reviewed at regular intervals with your team.",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-sm text-ink-soft">
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn to="/contact">Start With Step 01</Btn>
              <Btn variant="outline" to="/services">
                Explore Services
              </Btn>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
