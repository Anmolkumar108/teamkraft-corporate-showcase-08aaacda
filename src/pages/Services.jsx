import { Link } from "@/router";
import { usePageTitle, useRouter } from "@/router";
import { useSiteData } from "@/lib/site-context";
import { PageHero } from "@/components/layout";
import { Badge, Btn, Icon, Img, Section, SectionHeading } from "@/components/ui";

export default function Services() {
  usePageTitle("Services");
  const { services, home } = useSiteData();
  const published = services.filter((s) => s.published);

  return (
    <>
      <PageHero
        title="Our Services"
        sub={home.servicesSub}
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80"
      />
      <Section tone="mist">
        <SectionHeading
          eyebrow="What We Do"
          title="Service Categories"
          sub="Each service can be explored in detail. Descriptions are proposed content and remain editable until confirmed by the company."
          align="center"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {published.map((svc) => (
            <article
              key={svc.id}
              className="flex flex-col overflow-hidden rounded-lg border border-hairline bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <Img src={svc.image} alt={svc.title} className="aspect-[16/10] w-full object-cover" />
              <div className="flex flex-1 flex-col p-5">
                <Badge tone="teal" className="mb-3 self-start">
                  {svc.category}
                </Badge>
                <h2 className="text-lg font-bold text-navy">{svc.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{svc.overview}</p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <Link
                    to={`/services/${svc.id}`}
                    className="inline-flex items-center gap-1 text-sm font-bold text-cobalt hover:text-navy"
                  >
                    View Details <Icon name="arrowRight" className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="text-sm font-bold text-teal hover:text-navy"
                    aria-label={`Enquire about ${svc.title}`}
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        {published.length === 0 && (
          <p className="mt-10 text-center text-ink-soft">
            Services will appear here once they are published from the admin panel.
          </p>
        )}
      </Section>
      <Section tone="navy" className="text-center">
        <h2 className="mx-auto max-w-2xl text-2xl font-extrabold text-white sm:text-3xl">
          Need a Service Tailored to Your Site?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/75">
          Tell us about your premises, timings and workforce requirements — we will propose a suitable approach.
        </p>
        <div className="mt-8">
          <Btn variant="teal" to="/contact">
            Enquire About a Service
          </Btn>
        </div>
      </Section>
    </>
  );
}

export function ServiceDetail({ id }) {
  usePageTitle("Service Details");
  const { navigate } = useRouter();
  const { services } = useSiteData();
  const svc = services.find((s) => s.id === id);

  if (!svc || !svc.published) {
    return (
      <Section className="text-center">
        <h1 className="text-2xl font-bold text-navy">Service not found</h1>
        <p className="mt-3 text-ink-soft">This service may have been unpublished or removed.</p>
        <div className="mt-8">
          <Btn variant="outline" to="/services">
            Back to All Services
          </Btn>
        </div>
      </Section>
    );
  }

  const others = services.filter((s) => s.published && s.id !== id).slice(0, 3);

  return (
    <>
      <PageHero title={svc.title} sub={svc.short} image={svc.image} />
      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow={svc.category} title="Service Overview" />
            <p className="mt-6 leading-relaxed text-ink-soft">{svc.overview}</p>

            <h2 className="mt-10 text-xl font-bold text-navy">Key Responsibilities</h2>
            <ul className="mt-4 space-y-3">
              {svc.responsibilities.map((r) => (
                <li key={r} className="flex gap-3 text-sm text-ink-soft">
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <aside className="space-y-6">
            <div className="rounded-lg border border-hairline bg-mist p-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-navy">Suitable Industries</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {svc.industries.map((i) => (
                  <Badge key={i} tone="mist">
                    {i}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-hairline bg-mist p-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-navy">Interested?</h2>
              <p className="mt-2 text-sm text-ink-soft">
                Share your site details and requirements — we will respond with a suitable service approach.
              </p>
              <Btn className="mt-4 w-full" to="/contact">
                Enquire About This Service
              </Btn>
            </div>
          </aside>
        </div>
      </Section>
      <Section tone="mist">
        <SectionHeading eyebrow="More Services" title="Other Ways We Can Support You" />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {others.map((o) => (
            <button
              key={o.id}
              onClick={() => navigate(`/services/${o.id}`)}
              className="rounded-lg border border-hairline bg-white p-5 text-left shadow-sm transition-shadow hover:shadow-md"
            >
              <Badge tone="teal">{o.category}</Badge>
              <h3 className="mt-3 font-bold text-navy">{o.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-ink-soft">{o.short}</p>
            </button>
          ))}
        </div>
      </Section>
    </>
  );
}
