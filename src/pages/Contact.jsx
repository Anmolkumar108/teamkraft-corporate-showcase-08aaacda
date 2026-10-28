import { useState } from "react";
import { usePageTitle } from "@/router";
import { useSiteData } from "@/lib/site-context";
import { DEMO_NOTICE } from "@/data/seed";
import { PageHero } from "@/components/layout";
import { Alert, Badge, Btn, Field, Icon, Section, SectionHeading } from "@/components/ui";
import { uid } from "@/lib/storage";

const BLANK = { name: "", company: "", email: "", phone: "", service: "", subject: "", message: "" };
const WF_BLANK = { company: "", contactPerson: "", email: "", phone: "", category: "Warehouse Associate", headcount: "", location: "" };
const WF_CATS = ["Warehouse Associate", "Picker / Packer", "Housekeeping Staff", "Facility Support Staff", "Operations Support", "Other"];
const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function Contact() {
  usePageTitle("Contact Us");
  const { company, services, addItem } = useSiteData();
  const serviceOptions = ["General enquiry", "Request a Quote", ...services.filter((s) => s.published).map((s) => s.title)];
  const [tab, setTab] = useState("contact");
  const [form, setForm] = useState({ ...BLANK, service: serviceOptions[0] });
  const [wf, setWf] = useState(WF_BLANK);
  const [errors, setErrors] = useState({});
  const [msg, setMsg] = useState(null);

  const onChange = (setter) => (e) => {
    const { name, value } = e.target;
    setter((f) => ({ ...f, [name]: value }));
    setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const submitContact = (e) => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = "Full name is required.";
    if (!emailOk(form.email)) er.email = "Enter a valid email address.";
    if (!form.phone.trim()) er.phone = "Phone number is required.";
    if (!form.subject.trim()) er.subject = "Subject is required.";
    if (form.message.trim().length < 10) er.message = "Please write at least 10 characters.";
    setErrors(er);
    if (Object.keys(er).length) {
      setMsg({ tone: "error", text: "Please correct the highlighted fields." });
      return;
    }
    const id = uid(form.service === "Request a Quote" ? "QTE" : "ENQ");
    addItem("enquiries", { ...form, id, date: new Date().toISOString(), status: "New" });
    setMsg({ tone: "success", text: `Thank you. Your demo enquiry ${id} has been recorded in this browser and is visible in the admin dashboard.` });
    setForm({ ...BLANK, service: serviceOptions[0] });
  };

  const submitWorkforce = (e) => {
    e.preventDefault();
    const er = {};
    if (!wf.company.trim()) er.company = "Company name is required.";
    if (!wf.contactPerson.trim()) er.contactPerson = "Contact person is required.";
    if (!emailOk(wf.email)) er.email = "Enter a valid email address.";
    if (!wf.phone.trim()) er.phone = "Phone number is required.";
    if (!(Number(wf.headcount) >= 1)) er.headcount = "Enter number of personnel.";
    if (!wf.location.trim()) er.location = "Work location is required.";
    setErrors(er);
    if (Object.keys(er).length) {
      setMsg({ tone: "error", text: "Please correct the highlighted fields." });
      return;
    }
    const id = uid("WFE");
    addItem("workforce", { ...wf, id, headcount: Number(wf.headcount), date: new Date().toISOString(), status: "New" });
    setMsg({ tone: "success", text: `Workforce enquiry ${id} recorded in this browser and visible in the admin dashboard.` });
    setWf(WF_BLANK);
  };

  const switchTab = (t, service) => {
    setTab(t);
    setErrors({});
    setMsg(null);
    if (service) setForm((f) => ({ ...f, service }));
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        sub="Share your facility or workforce requirements and our team will get back to you."
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80"
      />
      <Section tone="mist">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <SectionHeading eyebrow="Get in Touch" title="Contact Information" />
            <ul className="space-y-4 rounded-lg border border-hairline bg-white p-6 shadow-sm">
              <li className="flex gap-3 text-sm">
                <Icon name="pin" className="h-5 w-5 shrink-0 text-teal" />
                <span><span className="block font-semibold text-navy">Registered Office</span>{company.address}</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Icon name="phone" className="h-5 w-5 shrink-0 text-teal" />
                <span><span className="block font-semibold text-navy">Phone</span>{company.phone || <em className="text-ink-soft">{company.phonePlaceholder}</em>}</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Icon name="mail" className="h-5 w-5 shrink-0 text-teal" />
                <span><span className="block font-semibold text-navy">Email</span>{company.email || <em className="text-ink-soft">{company.emailPlaceholder}</em>}</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Icon name="grid" className="h-5 w-5 shrink-0 text-teal" />
                <span><span className="block font-semibold text-navy">Service Area</span>{company.serviceArea}</span>
              </li>
            </ul>
            <div className="rounded-lg bg-navy p-6 text-white">
              <h2 className="text-lg font-bold">Request a Quote</h2>
              <p className="mt-2 text-sm text-white/75">
                Tell us about your site, the services needed and expected start date to receive a proposed service approach.
              </p>
              <Btn variant="teal" className="mt-4" onClick={() => switchTab("contact", "Request a Quote")}>
                Start a Quote Request
              </Btn>
            </div>
            <div className="rounded-lg border border-hairline bg-white p-5 text-sm text-ink-soft">
              <p className="flex gap-2 font-semibold text-navy"><Icon name="info" className="h-4 w-4 text-cobalt" /> Demo notice</p>
              <p className="mt-2">{DEMO_NOTICE}</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div role="tablist" className="mb-4 flex gap-2">
              {[["contact", "Contact Enquiry"], ["workforce", "Workforce Requirement"]].map(([k, l]) => (
                <button
                  key={k}
                  role="tab"
                  aria-selected={tab === k}
                  onClick={() => switchTab(k)}
                  className={`rounded-md px-4 py-2 text-sm font-semibold ${tab === k ? "bg-navy text-white" : "border border-hairline bg-white text-navy hover:bg-mist"}`}
                >
                  {l}
                </button>
              ))}
            </div>
            {msg && <Alert tone={msg.tone} onClose={() => setMsg(null)}>{msg.text}</Alert>}

            {tab === "contact" ? (
              <form onSubmit={submitContact} noValidate className="grid gap-5 rounded-lg border border-hairline bg-white p-6 shadow-sm sm:grid-cols-2">
                <Field label="Full Name" name="name" value={form.name} onChange={onChange(setForm)} error={errors.name} />
                <Field label="Company Name" name="company" required={false} value={form.company} onChange={onChange(setForm)} />
                <Field label="Email" name="email" type="email" value={form.email} onChange={onChange(setForm)} error={errors.email} />
                <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={onChange(setForm)} error={errors.phone} />
                <Field label="Service Interested In" name="service" options={serviceOptions} value={form.service} onChange={onChange(setForm)} />
                <Field label="Subject" name="subject" value={form.subject} onChange={onChange(setForm)} error={errors.subject} />
                <div className="sm:col-span-2">
                  <Field label="Message" name="message" textarea value={form.message} onChange={onChange(setForm)} error={errors.message} />
                </div>
                <div className="flex items-center justify-between gap-4 sm:col-span-2">
                  <Badge tone="warn">Frontend demo form</Badge>
                  <Btn type="submit">Send Enquiry</Btn>
                </div>
              </form>
            ) : (
              <form onSubmit={submitWorkforce} noValidate className="grid gap-5 rounded-lg border border-hairline bg-white p-6 shadow-sm sm:grid-cols-2">
                <Field label="Company Name" name="company" value={wf.company} onChange={onChange(setWf)} error={errors.company} />
                <Field label="Contact Person" name="contactPerson" value={wf.contactPerson} onChange={onChange(setWf)} error={errors.contactPerson} />
                <Field label="Email" name="email" type="email" value={wf.email} onChange={onChange(setWf)} error={errors.email} />
                <Field label="Phone" name="phone" type="tel" value={wf.phone} onChange={onChange(setWf)} error={errors.phone} />
                <Field label="Workforce Category" name="category" options={WF_CATS} value={wf.category} onChange={onChange(setWf)} />
                <Field label="Number of Personnel" name="headcount" type="number" min="1" value={wf.headcount} onChange={onChange(setWf)} error={errors.headcount} />
                <div className="sm:col-span-2">
                  <Field label="Work Location" name="location" value={wf.location} onChange={onChange(setWf)} error={errors.location} />
                </div>
                <div className="flex items-center justify-between gap-4 sm:col-span-2">
                  <Badge tone="warn">Frontend demo form</Badge>
                  <Btn type="submit">Submit Requirement</Btn>
                </div>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
