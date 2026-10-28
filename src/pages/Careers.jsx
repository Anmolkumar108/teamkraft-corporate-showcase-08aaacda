import { useState } from "react";
import { usePageTitle } from "@/router";
import { useSiteData } from "@/lib/site-context";
import { DEMO_NOTICE } from "@/data/seed";
import { PageHero } from "@/components/layout";
import { Alert, Badge, Btn, Field, Icon, Section, SectionHeading } from "@/components/ui";
import { uid } from "@/lib/storage";

const BLANK = { name: "", email: "", phone: "", position: "", experience: "", intro: "" };

export default function Careers() {
  usePageTitle("Careers");
  const { jobs } = useSiteData();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [applyingFor, setApplyingFor] = useState(null); // job id
  const [form, setForm] = useState(BLANK);
  const [errors, setErrors] = useState({});
  const [successId, setSuccessId] = useState("");

  const published = jobs.filter((j) => j.published);
  const categories = ["All", ...Array.from(new Set(published.map((j) => j.category)))];
  const filtered = published.filter((j) => {
    const matchesCategory = category === "All" || j.category === category;
    const q = search.trim().toLowerCase();
    const matchesSearch =
      !q ||
      j.title.toLowerCase().includes(q) ||
      j.description.toLowerCase().includes(q) ||
      j.location.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const set = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = "Full name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = "Enter a valid email address.";
    if (!form.phone.trim()) er.phone = "Phone number is required.";
    if (!form.position) er.position = "Select the position you are applying for.";
    setErrors(er);
    if (Object.keys(er).length > 0) return;

    const id = uid("APP");
    try {
      const existing = JSON.parse(window.localStorage.getItem("tk_applications") || "[]");
      const stored = Array.isArray(existing) ? existing : [];
      stored.push({
        id,
        jobId: form.position,
        position: published.find((j) => j.id === form.position)?.title || form.position,
        ...form,
        jobId: form.position,
        date: new Date().toISOString(),
        status: "New",
      });
      window.localStorage.setItem("tk_applications", JSON.stringify(stored));
    } catch {
      /* ignore */
    }
    setSuccessId(id);
    setForm(BLANK);
    setApplyingFor(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const jobTitle = (id) => published.find((j) => j.id === id)?.title || "";

  return (
    <>
      <PageHero
        title="Careers"
        sub="Opportunities in facility support, warehouse operations and operational coordination."
        image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1600&q=80"
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Working With Us"
              title="A Team Built on Dependability"
              sub="Our work is practical and people-focused — keeping premises well maintained and operations adequately staffed across Pune."
            />
            <p className="mt-4 text-sm text-ink-soft">
              Roles at Teamkraft are coordinated with clear schedules, defined responsibilities and direct
              communication with our operations team.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {["Clear role definitions", "Shift-wise scheduling", "On-site coordination", "Regular communication"].map(
              (t) => (
                <li key={t} className="flex items-center gap-3 rounded-lg border border-hairline bg-mist p-4 text-sm font-semibold text-navy">
                  <Icon name="check" className="h-5 w-5 text-teal" /> {t}
                </li>
              )
            )}
          </ul>
        </div>
      </Section>

      <Section tone="mist" id="openings">
        <SectionHeading
          eyebrow="Current Opportunities"
          title="Open Positions"
          sub="Sample listings shown below are demo vacancies until confirmed by the company."
        />

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Icon name="search" className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title, skill or location…"
              aria-label="Search job listings"
              className="w-full rounded-md border border-hairline bg-white py-2 pl-9 pr-3 text-sm focus:border-cobalt focus:outline-none"
            />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label="Filter by job category"
            className="rounded-md border border-hairline bg-white px-3 py-2 text-sm focus:border-cobalt focus:outline-none"
          >
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        {successId && (
          <div className="mt-6">
            <Alert tone="success" onClose={() => setSuccessId("")}>
              <span className="font-bold">Application {successId} submitted.</span> This demo application is
              stored in this browser only — it has not been sent to the company. {DEMO_NOTICE}
            </Alert>
          </div>
        )}

        {filtered.length === 0 ? (
          <p className="mt-10 rounded-lg border border-hairline bg-white p-8 text-center text-ink-soft">
            No matching vacancies right now. Try a different search or check back soon.
          </p>
        ) : (
          <div className="mt-8 space-y-4">
            {filtered.map((job) => (
              <article key={job.id} className="rounded-lg border border-hairline bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-navy">{job.title}</h3>
                    <p className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold text-ink-soft">
                      <span className="inline-flex items-center gap-1">
                        <Icon name="pin" className="h-3.5 w-3.5" /> {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Icon name="briefcase" className="h-3.5 w-3.5" /> {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Icon name="clipboard" className="h-3.5 w-3.5" /> {job.category}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    {job.sample && <Badge tone="warn">Sample demo vacancy</Badge>}
                    <Btn
                      variant={applyingFor === job.id ? "outline" : "primary"}
                      onClick={() => {
                        setApplyingFor(applyingFor === job.id ? null : job.id);
                        setForm((f) => ({ ...f, position: applyingFor === job.id ? "" : job.id }));
                        setSuccessId("");
                      }}
                      aria-expanded={applyingFor === job.id}
                    >
                      {applyingFor === job.id ? "Close Form" : "Apply Now"}
                    </Btn>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{job.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.skills.map((s) => (
                    <Badge key={s} tone="mist">
                      {s}
                    </Badge>
                  ))}
                </div>

                {applyingFor === job.id && (
                  <form onSubmit={submit} noValidate className="mt-5 rounded-lg border border-hairline bg-mist p-5">
                    <h4 className="font-bold text-navy">Apply for {job.title}</h4>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <Field label="Full Name" name="name" value={form.name} onChange={set} error={errors.name} />
                      <Field label="Email" name="email" type="email" value={form.email} onChange={set} error={errors.email} />
                      <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={set} error={errors.phone} />
                      <Field
                        label="Position Applied For"
                        name="position"
                        value={form.position}
                        onChange={(e) => setApplyingFor(e.target.value)}
                        options={published.map((j) => ({ label: j.title, value: j.id }))}
                        error={errors.position}
                      />
                      <div className="sm:col-span-2">
                        <Field
                          label="Relevant Experience"
                          name="experience"
                          textarea
                          required={false}
                          rows={2}
                          value={form.experience}
                          onChange={set}
                          placeholder="e.g. 2 years warehouse experience"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <Field
                          label="Short Introduction"
                          name="intro"
                          textarea
                          required={false}
                          value={form.intro}
                          onChange={set}
                          placeholder="Tell us briefly about yourself…"
                        />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-4">
                      <Badge tone="warn">Demo form — stored in this browser</Badge>
                      <Btn as="button" type="submit">
                        Submit Application
                      </Btn>
                    </div>
                  </form>
                )}
              </article>
            ))}
          </div>
        )}
        <p className="mt-6 text-center text-xs text-ink-soft">{DEMO_NOTICE}</p>
      </Section>
    </>
  );
}
