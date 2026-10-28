import { Link } from "@/router";
import { useSiteData } from "@/lib/site-context";
import { PageHero } from "@/components/layout";
import { Badge, Btn, Icon, Img, Section, SectionHeading } from "@/components/ui";

export default function Home() {
  const data = useSiteData();
  const { home, company, services, industries, gallery, jobs, approach } = data;
  const publishedServices = services.filter((s) => s.published).slice(0, 6);
  const publishedGallery = gallery.filter((g) => g.published).slice(0, 6);
  const publishedJobs = jobs.filter((j) => j.published).slice(0, 4);

  return (
    <>
      {/* A. Hero */}
      <div className="relative overflow-hidden bg-navy-deep">
        <Img
          src={home.heroImage}
          alt="Modern commercial building maintained by professional facility services"
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative">
          <div className="container-x flex min-h-[520px] flex-col justify-center py-20">
            <div className="max-w-2xl">
              <div className="mb-5 flex flex-wrap gap-2">
                {home.heroBadges.map((b) => (
                  <Badge key={b} tone="navy" className="border-white/25 bg-white/10 text-white">
                    {b}
                  </Badge>
                ))}
              </div>
              <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                {home.heroHeadline}
              </h1>
              <p className="mt-5 max-w-xl text-lg text-white/80">{home.heroSubtitle}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Btn variant="teal" to="/services">
                  Explore Our Services
                </Btn>
                <Btn variant="ghostLight" to="/contact">
                  Request a Quote
                </Btn>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* B. Company introduction */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Who We Are" title={home.introTitle} />
            <p className="mt-6 leading-relaxed text-ink-soft">{home.introText}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Btn variant="navy" to="/about">
                Learn More About Us
              </Btn>
              <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                {company.serviceArea}
              </span>
            </div>
          </div>
          <Img
            src={home.introImage}
            alt="The Teamkraft team coordinating facility and workforce operations"
            className="aspect-[4/3] w-full rounded-lg object-cover shadow-md"
          />
        </div>
      </Section>

      {/* C. Services overview */}
      <Section tone="mist">
        <SectionHeading
          eyebrow="What We Do"
          title={home.servicesHeading}
          sub={home.servicesSub}
          align="center"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {publishedServices.map((svc) => (
            <article
              key={svc.id}
              className="flex flex-col overflow-hidden rounded-lg border border-hairline bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <Img src={svc.image} alt={svc.title} className="aspect-[16/10] w-full object-cover" />
              <div className="flex flex-1 flex-col p-5">
                <Badge tone="teal" className="mb-3 self-start">
                  {svc.category}
                </Badge>
                <h3 className="text-lg font-bold text-navy">{svc.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{svc.short}</p>
                <Link
                  to={`/services/${svc.id}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-cobalt hover:text-navy"
                >
                  Explore Service <Icon name="arrowRight" className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Btn variant="outline" to="/services">
            View All Services
          </Btn>
        </div>
      </Section>

      {/* D. Why choose Teamkraft */}
      <Section>
        <SectionHeading eyebrow="Our Strengths" title={home.whyTitle} sub={home.whyIntro} align="center" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {home.whyItems.map((item) => (
            <div key={item.title} className="rounded-lg border border-hairline bg-mist p-6">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-teal/10 text-teal">
                <Icon name="check" className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* E. Industries */}
      <Section tone="mist">
        <SectionHeading
          eyebrow="Sectors"
          title={home.industriesHeading}
          sub={home.industriesSub}
          align="center"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <Link
              key={ind.id}
              to="/industries"
              className="group overflow-hidden rounded-lg border border-hairline bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative">
                <Img src={ind.image} alt={ind.title} className="aspect-[16/9] w-full object-cover" />
                <div className="absolute inset-0 bg-navy-deep/0 transition-colors group-hover:bg-navy-deep/20" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-navy group-hover:text-cobalt">{ind.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-ink-soft">{ind.intro}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* F. Our approach preview */}
      <Section>
        <SectionHeading
          eyebrow="How We Work"
          title="A Clear, Four-Step Approach"
          sub="From the first conversation to ongoing review, our process keeps expectations aligned and delivery consistent."
          align="center"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {approach.steps.map((step) => (
            <div key={step.no} className="rounded-lg border border-hairline bg-white p-6 shadow-sm">
              <span className="text-3xl font-extrabold text-teal/40">{step.no}</span>
              <h3 className="mt-2 font-bold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Btn variant="navy" to="/our-approach">
            See Our Full Approach
          </Btn>
        </div>
      </Section>

      {/* G. Workforce solutions banner */}
      <div className="relative overflow-hidden bg-navy-deep">
        <Img
          src={home.workforceBanner.image}
          alt="Warehouse operations environment with coordinated workforce"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative container-x py-16 sm:py-20">
          <h2 className="max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">
            {home.workforceBanner.headline}
          </h2>
          <p className="mt-4 max-w-xl text-white/75">{home.workforceBanner.text}</p>
          <div className="mt-8">
            <Btn variant="teal" to="/workforce-solutions">
              {home.workforceBanner.ctaText}
            </Btn>
          </div>
        </div>
      </div>

      {/* H. Gallery preview */}
      <Section tone="mist">
        <SectionHeading
          eyebrow="Gallery"
          title={home.galleryHeading}
          sub={home.gallerySub}
          align="center"
        />
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {publishedGallery.map((g) => (
            <figure key={g.id} className="overflow-hidden rounded-lg shadow-sm">
              <Img
                src={g.image}
                alt={g.description}
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Btn to="/gallery">View Full Gallery</Btn>
        </div>
      </Section>

      {/* I. Careers preview */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Careers" title={home.careersHeading} sub={home.careersText} />
            <ul className="mt-6 divide-y divide-hairline rounded-lg border border-hairline bg-mist">
              {publishedJobs.map((job) => (
                <li key={job.id} className="flex items-center justify-between gap-3 px-4 py-3">
                  <div>
                    <p className="font-semibold text-navy">{job.title}</p>
                    <p className="text-xs text-ink-soft">
                      {job.location} · {job.type}
                    </p>
                  </div>
                  <Badge tone="warn">Sample vacancy</Badge>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Btn to="/careers">View Opportunities</Btn>
            </div>
          </div>
          <Img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
            alt="Team members collaborating at a workplace"
            className="aspect-[4/3] w-full rounded-lg object-cover shadow-md"
          />
        </div>
      </Section>

      {/* J. Contact CTA */}
      <Section tone="navy" className="text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold text-white">
          {home.contactCta.headline}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/75">{home.contactCta.text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Btn variant="teal" to="/contact">
            Request a Quote
          </Btn>
          <Btn variant="ghostLight" to="/contact">
            Contact Our Team
          </Btn>
        </div>
      </Section>
    </>
  );
}
