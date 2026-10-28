import { useState } from "react";
import { usePageTitle } from "@/router";
import { useSiteData } from "@/lib/site-context";
import { DEMO_NOTICE } from "@/data/seed";
import { PageHero } from "@/components/layout";
import { Alert, Badge, Btn, Field, Icon, Img, Section, SectionHeading } from "@/components/ui";
import { uid } from "@/lib/storage";

const CATEGORY_OPTIONS = [
  "Warehouse Associate",
  "Picker / Packer",
  "Housekeeping Staff",
  "Facility Support Staff",
  "Material Handling / Helper",
  "Operations Support",
  "Other (specify in requirements)",
];

const BLANK = {
  company: "",
  contactPerson: "",
  email: "",
  phone: "",
  category: CATEGORY_OPTIONS[0],
  headcount: "",
  location: "",
  startDate: "",
  requirements: "",
};

export default function WorkforceSolutions() {
  usePageTitle("Workforce Solutions");
  const { company, addItem } = useSiteData();
  const [form, setForm] = useState(BLANK);
  const [errors, setErrors] = useState({});
  const [successId, setSuccessId] = useState("");

  const set = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!form.company.trim()) er.company = "Company name is required.";
    if (!form.contactPerson.trim()) er.contactPerson = "Contact person is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = "Enter a valid email address.";
    if (!form.phone.trim()) er.phone = "Phone number is required.";
    if (!form.headcount.trim() || Number(form.headcount) < 1)
      er.headcount = "Enter the number of personnel required.";
    if (!form.location.trim()) er.location = "Work location is required.";
    setErrors(er);
    if (Object.keys(er).length > 0) return;

    const id = uid("WFE");
    addItem("workforce", {
      ...form,
      id,
      headcount: Number(form.headcount),
      date: new Date().toISOString(),
      status: "New",
    });
    setSuccessId(id);
    setForm(BLANK);
    window.scrollTo({ top: document.getElementById("workforce-form")?.offsetTop ?? 0, behavior: "smooth" });
  };

  const blocks = [
    {
      title: "Workforce Supply & Staffing",
      text: "Reliable supply of personnel for facility, housekeeping, warehouse and operational support roles — matched to your requirements and coordinated from deployment onward.",
      points: ["Sourcing and screening", "Deployment coordination", "Attendance and shift coordination"],
    },
    {
      title: "Warehouse & Logistics Workforce",
      text: "Dependable warehouse personnel covering loading and unloading, material movement, inventory support activities and general warehouse upkeep.",
      points: ["Warehouse associates", "Material handling support", "Shift-wise coordination"],
    },
    {
      title: "Picker / Packer Roles",
      text: "Trained pickers and packers for fulfilment centres, distribution hubs and retail backrooms, with attention to accuracy and handling care.",
      points: ["Order picking", "Packing and labelling", "Peak-season scaling"],
    },
    {
      title: "Facility Support Personnel",
      text: "Housekeeping and everyday facility support staff for commercial, industrial and mixed-use premises, aligned to your site schedule.",
      points: ["Office housekeeping", "Common-area upkeep", "Front-of-house assistance"],
    },
    {
      title: "Operations Coordination",
      text: "Structured coordination across mixed teams — scheduling, role allocation, attendance oversight and a single point of contact for workforce matters.",
      points: ["Shift planning", "Reporting", "Issue escalation"],
    },
  ];

  return (
    <>
      <PageHero
        title="Workforce Solutions"
        sub="Workforce supply, recruitment support and operational coordination for commercial, industrial and logistics operations."
        image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80"
      />
      <Section tone="mist">
        <div className="grid gap-6 lg:grid-cols-3">
          {blocks.map((b) => (
            <div key={b.title} className="rounded-lg border border-hairline bg-white p-6 shadow-sm">
              <h2 className="font-bold text-navy">{b.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{b.text}</p>
              <ul className="mt-3 space-y-1.5">
                {b.points.map((p) => (
                  <li key={p} className="flex gap-2 text-xs font-semibold text-teal">
                    <Icon name="check" className="h-4 w-4" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div id="workforce-form" className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Enquiry"
              title="Tell Us Your Workforce Requirement"
              sub="Share your requirement details and we will respond with a suitable workforce approach."
            />
            <Img
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80"
              alt="Organised warehouse racking"
              className="mt-8 aspect-[4/3] w-full rounded-lg object-cover shadow-md"
            />
            <div className="mt-6 rounded-lg border border-hairline bg-mist p-5 text-sm">
              <p className="flex gap-2 font-semibold text-navy">
                <Icon name="info" className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" />
                Demo notice
              </p>
              <p className="mt-2 text-ink-soft">{DEMO_NOTICE}</p>
            </div>
          </div>

          <form onSubmit={submit} noValidate className="lg:col-span-3">
            {successId && (
              <Alert tone="success" onClose={() => setSuccessId("")}>
                <span className="font-bold">Enquiry {successId} recorded.</span> This demo enquiry is stored
                in this browser only and is visible in the admin dashboard. {company.phone || "Contact details will be shared once provided by the company."}
              </Alert>
            )}
            <div className="grid gap-5 rounded-lg border border-hairline bg-white p-6 shadow-sm sm:grid-cols-2">
              <Field label="Company Name" name="company" value={form.company} onChange={set} error={errors.company} />
              <Field label="Contact Person" name="contactPerson" value={form.contactPerson} onChange={set} error={errors.contactPerson} />
              <Field label="Email" name="email" type="email" value={form.email} onChange={set} error={errors.email} />
              <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={set} error={errors.phone} />
              <Field
                label="Required Workforce Category"
                name="category"
                value={form.category}
                onChange={set}
                options={CATEGORY_OPTIONS}
                error={errors.category}
              />
              <Field
                label="Number of Personnel"
                name="headcount"
                type="number"
                min="1"
                value={form.headcount}
                onChange={set}
                error={errors.headcount}
              />
              <Field label="Work Location" name="location" value={form.location} onChange={set} error={errors.location} />
              <Field
                label="Preferred Start Date"
                name="startDate"
                type="date"
                required={false}
                value={form.startDate}
                onChange={set}
              />
              <div className="sm:col-span-2">
                <Field
                  label="Additional Requirements"
                  name="requirements"
                  textarea
                  required={false}
                  value={form.requirements}
                  onChange={set}
                  placeholder="Shift timings, site details, duration, any specific skills…"
                />
              </div>
              <div className="flex items-center justify-between gap-4 sm:col-span-2">
                <Badge tone="warn">Frontend demo form</Badge>
                <Btn as="button" type="submit">
                  Submit Workforce Enquiry
                </Btn>
              </div>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}
