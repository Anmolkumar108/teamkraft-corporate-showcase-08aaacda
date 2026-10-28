import { Link } from "@/router";
import { usePageTitle } from "@/router";
import { useSiteData } from "@/lib/site-context";
import { PageHero } from "@/components/layout";
import { Badge, Btn, Icon, Img, Section, SectionHeading } from "@/components/ui";

export default function Industries() {
  usePageTitle("Industries We Serve");
  const { industries } = useSiteData();

  return (
    <>
      <PageHero
        title="Industries We Serve"
        sub="Relevant service categories for the environments our workforce supports across Pune — presented as service categories, not confirmed client engagements."
        image="https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=1600&q=80"
      />
      <Section>
        <div className="space-y-16">
          {industries.map((ind, idx) => (
            <div
              key={ind.id}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Img
                src={ind.image}
                alt={ind.title}
                className="aspect-[16/10] w-full rounded-lg object-cover shadow-md"
              />
              <div>
                <Badge tone="teal">Industry</Badge>
                <h2 className="mt-3 text-2xl font-bold text-navy">{ind.title}</h2>
                <p className="mt-3 leading-relaxed text-ink-soft">{ind.intro}</p>
                <h3 className="mt-6 text-sm font-bold uppercase tracking-wider text-navy">
                  Typical Workforce & Facility Support Requirements
                </h3>
                <ul className="mt-3 space-y-2">
                  {ind.requirements.map((r) => (
                    <li key={r} className="flex gap-2.5 text-sm text-ink-soft">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                      {r}
                    </li>
                  ))}
                </ul>
                <h3 className="mt-6 text-sm font-bold uppercase tracking-wider text-navy">Related Services</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {ind.related.map((r) => (
                    <Badge key={r} tone="mist">
                      {r}
                    </Badge>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Btn to="/contact">Enquire About This Industry</Btn>
                  <Btn variant="outline" to="/services">
                    Related Services
                  </Btn>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section tone="navy" className="text-center">
        <SectionHeading
          title="Operating in Another Environment?"
          sub="These are the industries we focus on most. If your premises have different requirements, we are happy to discuss them."
          align="center"
        />
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Btn variant="teal" to="/contact">
            Contact Our Team
          </Btn>
          <Btn variant="ghostLight" to="/workforce-solutions">
            Workforce Enquiry
          </Btn>
        </div>
      </Section>
    </>
  );
}
