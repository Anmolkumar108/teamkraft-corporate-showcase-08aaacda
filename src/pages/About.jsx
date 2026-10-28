import { usePageTitle } from "@/router";
import { useSiteData } from "@/lib/site-context";
import { PageHero } from "@/components/layout";
import { Badge, Btn, Icon, Img, Section, SectionHeading } from "@/components/ui";

export default function About() {
  usePageTitle("About Us");
  const { about, company } = useSiteData();

  return (
    <>
      <PageHero
        title="About Us"
        sub="A Pune-based facility services and workforce solutions company."
        image={about.heroImage}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Introduction" title="Who We Are" />
            <p className="mt-6 leading-relaxed text-ink-soft">{about.intro}</p>
            {about.overview.map((para, i) => (
              <p key={i} className="mt-4 leading-relaxed text-ink-soft">
                {para}
              </p>
            ))}
          </div>
          <aside className="rounded-lg border border-hairline bg-mist p-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-navy">Company Summary</h2>
            <dl className="mt-4 space-y-3 text-sm">
              {about.summary.map((row) => (
                <div key={row.label}>
                  <dt className="font-semibold text-navy">{row.label}</dt>
                  <dd className="text-ink-soft">{row.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 border-t border-hairline pt-4">
              <Btn variant="outline" to="/company-details" className="w-full">
                Full Company Details
              </Btn>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="mist">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-hairline bg-white p-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-cobalt/10 text-cobalt">
              <Icon name="shield" className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-xl font-bold text-navy">Our Mission</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">{about.mission}</p>
          </div>
          <div className="rounded-lg border border-hairline bg-white p-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-teal/10 text-teal">
              <Icon name="eye" className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-xl font-bold text-navy">Our Vision</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">{about.vision}</p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What Guides Us"
          title="Core Values"
          sub="The principles behind how we coordinate people and deliver services."
          align="center"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {about.values.map((v) => (
            <div key={v.title} className="rounded-lg border border-hairline bg-mist p-6">
              <h3 className="font-bold text-navy">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <SectionHeading eyebrow="Our Philosophy" title="Facility & Workforce Support Philosophy" />
            <p className="mt-6 leading-relaxed text-ink-soft">{about.philosophy}</p>
            <h3 className="mt-8 font-bold text-navy">Operational Coordination Approach</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">{about.coordination}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Facility Support", "Workforce Coordination", "Regular Review"].map((b) => (
                <Badge key={b} tone="teal">
                  {b}
                </Badge>
              ))}
            </div>
          </div>
          <Img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
            alt="A service coordination discussion with a client team"
            className="aspect-[4/3] w-full self-start rounded-lg object-cover shadow-md"
          />
        </div>
      </Section>

      <Section tone="navy" className="text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold text-white">
          Interested in Working With Us?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/75">
          {company.serviceArea}. Share your requirements and we will respond with a suitable service approach.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Btn variant="teal" to="/contact">
            Contact Us
          </Btn>
          <Btn variant="ghostLight" to="/services">
            Explore Services
          </Btn>
        </div>
      </Section>
    </>
  );
}
