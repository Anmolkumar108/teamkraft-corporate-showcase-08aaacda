import { usePageTitle } from "@/router";
import { useSiteData } from "@/lib/site-context";
import { PageHero } from "@/components/layout";
import { Btn, Icon, Section, SectionHeading } from "@/components/ui";

export default function CompanyDetails() {
  usePageTitle("Company Details");
  const { company } = useSiteData();

  const rows = [
    { label: "Company Name", value: company.name },
    { label: "Corporate Identification Number (CIN)", value: company.cin },
    { label: "Registered Office", value: company.address },
    { label: "Directors / Key Management", value: company.directors },
    { label: "Business Category", value: company.category },
    { label: "Service Area", value: company.serviceArea },
    { label: "Phone", value: company.phone, placeholder: company.phonePlaceholder },
    { label: "Email", value: company.email, placeholder: company.emailPlaceholder },
  ];

  return (
    <>
      <PageHero
        title="Company Details"
        sub="Registered information for Teamkraft Facility Services Private Limited."
        image="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=80"
      />
      <Section tone="mist">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Corporate Information" title="Company Profile at a Glance" />
            <dl className="mt-8 overflow-hidden rounded-lg border border-hairline bg-white shadow-sm">
              {rows.map((r, i) => (
                <div
                  key={r.label}
                  className={`grid gap-1 px-5 py-4 sm:grid-cols-3 sm:gap-4 ${i % 2 ? "bg-mist/60" : ""}`}
                >
                  <dt className="text-sm font-semibold text-navy">{r.label}</dt>
                  <dd className="text-sm text-ink sm:col-span-2">
                    {r.value || <span className="italic text-ink-soft">{r.placeholder || "To be provided"}</span>}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs text-ink-soft">
              Details not supplied by the company (such as phone and email) are shown as placeholders and can be
              updated from the admin panel.
            </p>
          </div>
          <aside className="h-fit rounded-lg bg-navy p-6 text-white shadow-md">
            <Icon name="briefcase" className="h-8 w-8 text-teal" />
            <h2 className="mt-4 text-xl font-bold">Discuss Your Requirements</h2>
            <p className="mt-2 text-sm text-white/75">
              Reach out to discuss facility support, workforce supply or operational coordination for your site in Pune.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Btn to="/contact" variant="teal">Contact Us</Btn>
              <Btn to="/services" variant="ghostLight">View Services</Btn>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
