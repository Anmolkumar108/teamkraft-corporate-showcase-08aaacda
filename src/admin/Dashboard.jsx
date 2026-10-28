import { useEffect, useMemo, useState } from "react";
import { Link, useRouter, usePageTitle } from "@/router";
import { useSiteData } from "@/lib/site-context";
import { clearAdminAuth, useRequireAdmin } from "@/admin/auth";
import { BrandBlock } from "@/components/layout";
import { Alert, Badge, Btn, ConfirmDialog, Icon, Img, Modal } from "@/components/ui";
import { downloadCSV, formatDate, uid } from "@/lib/storage";

const MODULES = [
  ["overview", "Dashboard Overview", "grid"],
  ["company", "Company Profile", "briefcase"],
  ["home", "Homepage Content", "home"],
  ["about", "About Us", "info"],
  ["services", "Services", "clipboard"],
  ["approach", "Our Approach", "check"],
  ["industries", "Industries", "shield"],
  ["workforce", "Workforce Enquiries", "users"],
  ["gallery", "Gallery", "image"],
  ["jobs", "Careers & Jobs", "briefcase"],
  ["applications", "Job Applications", "file"],
  ["enquiries", "Contact Enquiries", "inbox"],
  ["details", "Company Details", "file"],
  ["settings", "SEO & Settings", "settings"],
];

const inputCls = "w-full rounded-md border border-hairline bg-white px-3 py-2 text-sm text-ink focus:border-cobalt focus:outline-none";
const humanize = (k) => k.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());

/* ---------- Generic recursive object editor ---------- */

function ValueEditor({ label, value, onChange, path }) {
  const id = path.join("-");
  if (typeof value === "boolean") {
    return (
      <label className="flex items-center gap-2 text-sm font-semibold text-navy">
        <input type="checkbox" checked={value} onChange={(e) => onChange(e.target.checked)} /> {label}
      </label>
    );
  }
  if (Array.isArray(value) && value.every((v) => typeof v === "string")) {
    return (
      <div>
        <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-navy">{label} <span className="font-normal text-ink-soft">(one per line)</span></label>
        <textarea id={id} rows={Math.max(3, value.length + 1)} className={inputCls} value={value.join("\n")} onChange={(e) => onChange(e.target.value.split("\n"))} />
      </div>
    );
  }
  if (Array.isArray(value)) {
    return (
      <fieldset className="rounded-md border border-hairline p-4">
        <legend className="px-1 text-sm font-bold text-navy">{label}</legend>
        <div className="space-y-4">
          {value.map((item, i) => (
            <div key={i} className="rounded-md bg-mist p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-ink-soft">Item {i + 1}</span>
                <button type="button" className="text-xs font-semibold text-red-600" onClick={() => onChange(value.filter((_, j) => j !== i))}>Remove</button>
              </div>
              <ValueEditor label="" value={item} path={[...path, i]} onChange={(v) => onChange(value.map((x, j) => (j === i ? v : x)))} />
            </div>
          ))}
          {value.length > 0 && (
            <button type="button" className="text-sm font-semibold text-cobalt" onClick={() => onChange([...value, blankLike(value[0])])}>+ Add item</button>
          )}
        </div>
      </fieldset>
    );
  }
  if (value && typeof value === "object") {
    const inner = (
      <div className="grid gap-4 sm:grid-cols-2">
        {Object.entries(value).map(([k, v]) => (
          <div key={k} className={typeof v === "string" && v.length < 90 && !Array.isArray(v) ? "" : "sm:col-span-2"}>
            <ValueEditor label={humanize(k)} value={v} path={[...path, k]} onChange={(nv) => onChange({ ...value, [k]: nv })} />
          </div>
        ))}
      </div>
    );
    return label ? (
      <fieldset className="rounded-md border border-hairline p-4"><legend className="px-1 text-sm font-bold text-navy">{label}</legend>{inner}</fieldset>
    ) : inner;
  }
  const str = value == null ? "" : String(value);
  const isImg = /image|logo|favicon/i.test(String(path[path.length - 1]));
  return (
    <div>
      {label && <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-navy">{label}</label>}
      {str.length > 90 ? (
        <textarea id={id} rows={4} className={inputCls} value={str} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input id={id} className={inputCls} value={str} onChange={(e) => onChange(e.target.value)} />
      )}
      {isImg && str && <Img src={str} alt="Preview" className="mt-2 h-24 w-40 rounded object-cover" />}
    </div>
  );
}

function blankLike(sample) {
  if (typeof sample === "string") return "";
  if (Array.isArray(sample)) return [];
  if (sample && typeof sample === "object") {
    return Object.fromEntries(Object.entries(sample).map(([k, v]) => [k, typeof v === "boolean" ? v : blankLike(v)]));
  }
  return "";
}

function ObjectModule({ dataKey, title, intro, previewTo, only }) {
  const data = useSiteData();
  const source = data[dataKey];
  const pick = (obj) => (only ? Object.fromEntries(only.map((k) => [k, obj[k] ?? ""])) : obj);
  const [draft, setDraft] = useState(() => pick(source));
  const [saved, setSaved] = useState(false);
  useEffect(() => setDraft(pick(source)), [source]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <ModuleHeader title={title} intro={intro} />
      {saved && <Alert onClose={() => setSaved(false)}>Changes saved. The public website has been updated.</Alert>}
      <div className="rounded-lg border border-hairline bg-white p-5 shadow-sm">
        <ValueEditor label="" value={draft} path={[dataKey]} onChange={setDraft} />
        <div className="mt-6 flex flex-wrap gap-3 border-t border-hairline pt-5">
          <Btn onClick={() => { data.patch(dataKey, draft); setSaved(true); }}>Save Changes</Btn>
          <Btn variant="outline" onClick={() => setDraft(pick(source))}>Cancel</Btn>
          {previewTo && <a href={previewTo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 text-sm font-semibold text-cobalt"><Icon name="eye" className="h-4 w-4" /> Preview page</a>}
        </div>
      </div>
    </div>
  );
}

function ModuleHeader({ title, intro, children }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-navy">{title}</h1>
        {intro && <p className="mt-1 text-sm text-ink-soft">{intro}</p>}
      </div>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

/* ---------- Generic collection CRUD ---------- */

function CollectionModule({ dataKey, title, intro, template, prefix, columns, filterField }) {
  const data = useSiteData();
  const list = data[dataKey];
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState("All");
  const [editing, setEditing] = useState(null);
  const [isNew, setIsNew] = useState(false);
  const [confirm, setConfirm] = useState(null);
  const [notice, setNotice] = useState("");

  const options = filterField ? ["All", ...new Set(list.map((x) => x[filterField]).filter(Boolean))] : [];
  const shown = list.filter((x) => {
    const okQ = !q || JSON.stringify(x).toLowerCase().includes(q.toLowerCase());
    const okF = filter === "All" || x[filterField] === filter;
    return okQ && okF;
  });

  const save = () => {
    if (!String(editing.title || "").trim()) { setNotice("Title is required."); return; }
    if (isNew) data.addItem(dataKey, editing);
    else data.updateItem(dataKey, editing.id, editing);
    setEditing(null);
    setNotice(isNew ? "Item created." : "Changes saved.");
  };

  return (
    <div>
      <ModuleHeader title={title} intro={intro}>
        <Btn onClick={() => { setEditing({ ...structuredClone(template), id: uid(prefix).toLowerCase() }); setIsNew(true); }}>
          <Icon name="plus" className="h-4 w-4" /> Add New
        </Btn>
      </ModuleHeader>
      {notice && <Alert tone={notice.includes("required") ? "error" : "success"} onClose={() => setNotice("")}>{notice}</Alert>}
      <div className="mb-4 flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Icon name="search" className="absolute left-3 top-2.5 h-4 w-4 text-ink-soft" />
          <input aria-label="Search" placeholder="Search…" className={`${inputCls} pl-9`} value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        {filterField && (
          <select aria-label="Filter" className={`${inputCls} w-auto`} value={filter} onChange={(e) => setFilter(e.target.value)}>
            {options.map((o) => <option key={o}>{o}</option>)}
          </select>
        )}
      </div>
      {shown.length === 0 ? (
        <Empty text="No items match." />
      ) : (
        <ul className="space-y-3">
          {shown.map((item) => {
            const idx = list.findIndex((x) => x.id === item.id);
            return (
              <li key={item.id} className="flex flex-col gap-3 rounded-lg border border-hairline bg-white p-4 shadow-sm sm:flex-row sm:items-center">
                {item.image !== undefined && <Img src={item.image} alt={item.title} className="h-16 w-24 shrink-0 rounded object-cover" />}
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-navy">{item.title}</p>
                  <p className="truncate text-xs text-ink-soft">{columns.map((c) => item[c]).filter(Boolean).join(" · ")}</p>
                </div>
                {"published" in item && (
                  <button onClick={() => data.updateItem(dataKey, item.id, { published: !item.published })} title="Toggle publish status">
                    <Badge tone={item.published ? "success" : "warn"}>{item.published ? "Published" : "Draft"}</Badge>
                  </button>
                )}
                <div className="flex gap-1">
                  <IconBtn icon="chevronUp" label="Move up" disabled={idx === 0} onClick={() => data.moveItem(dataKey, item.id, "up")} />
                  <IconBtn icon="chevronDown" label="Move down" disabled={idx === list.length - 1} onClick={() => data.moveItem(dataKey, item.id, "down")} />
                  <IconBtn icon="edit" label="Edit" onClick={() => { setEditing(structuredClone(item)); setIsNew(false); }} />
                  <IconBtn icon="trash" label="Delete" danger onClick={() => setConfirm(item)} />
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <Modal open={!!editing} onClose={() => setEditing(null)} title={isNew ? `Add ${title}` : `Edit: ${editing?.title || ""}`} wide>
        {editing && (
          <>
            <ValueEditor label="" value={Object.fromEntries(Object.entries(editing).filter(([k]) => k !== "id"))} path={[dataKey]} onChange={(v) => setEditing({ ...v, id: editing.id })} />
            <div className="mt-6 flex justify-end gap-3">
              <Btn variant="outline" onClick={() => setEditing(null)}>Cancel</Btn>
              <Btn onClick={save}>Save</Btn>
            </div>
          </>
        )}
      </Modal>
      <ConfirmDialog
        open={!!confirm}
        title="Delete item?"
        message={`"${confirm?.title}" will be permanently removed from this browser's demo data.`}
        onCancel={() => setConfirm(null)}
        onConfirm={() => { data.deleteItem(dataKey, confirm.id); setConfirm(null); setNotice("Item deleted."); }}
      />
    </div>
  );
}

function IconBtn({ icon, label, onClick, disabled, danger }) {
  return (
    <button aria-label={label} title={label} disabled={disabled} onClick={onClick}
      className={`rounded-md border border-hairline p-2 disabled:opacity-30 ${danger ? "text-red-600 hover:bg-red-50" : "text-navy hover:bg-mist"}`}>
      <Icon name={icon} className="h-4 w-4" />
    </button>
  );
}

function Empty({ text }) {
  return <div className="rounded-lg border border-dashed border-hairline bg-white p-10 text-center text-sm text-ink-soft">{text}</div>;
}

/* ---------- Submissions (enquiries / workforce / applications) ---------- */

function RecordsModule({ dataKey, title, statuses, fields, nameField, companyField, serviceField, filename }) {
  const data = useSiteData();
  const list = data[dataKey] || [];
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("All");
  const [view, setView] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const [notice, setNotice] = useState("");

  const shown = [...list].reverse().filter((r) =>
    (status === "All" || r.status === status) && (!q || JSON.stringify(r).toLowerCase().includes(q.toLowerCase())));

  return (
    <div>
      <ModuleHeader title={title} intro="Demo submissions stored in this browser only.">
        <Btn variant="outline" onClick={() => setNotice(downloadCSV(list, filename) ? "CSV downloaded." : "No records to export.")}>
          <Icon name="download" className="h-4 w-4" /> Export CSV
        </Btn>
      </ModuleHeader>
      {notice && <Alert tone="info" onClose={() => setNotice("")}>{notice}</Alert>}
      <div className="mb-4 flex flex-wrap gap-3">
        <input aria-label="Search records" placeholder="Search by name, ID, company…" className={`${inputCls} flex-1 min-w-[200px]`} value={q} onChange={(e) => setQ(e.target.value)} />
        <select aria-label="Filter by status" className={`${inputCls} w-auto`} value={status} onChange={(e) => setStatus(e.target.value)}>
          {["All", ...statuses].map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      {shown.length === 0 ? <Empty text="No submissions yet. Submit a form on the public website to see it here." /> : (
        <div className="overflow-x-auto rounded-lg border border-hairline bg-white shadow-sm">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-mist text-xs uppercase text-ink-soft">
              <tr>{["ID", "Name", "Company", "Contact", "Service / Role", "Date", "Status", "Actions"].map((h) => <th key={h} className="px-4 py-3 font-semibold">{h}</th>)}</tr>
            </thead>
            <tbody>
              {shown.map((r) => (
                <tr key={r.id} className="border-t border-hairline">
                  <td className="px-4 py-3 font-mono text-xs">{r.id}</td>
                  <td className="px-4 py-3 font-semibold text-navy">{r[nameField]}</td>
                  <td className="px-4 py-3">{r[companyField] || "—"}</td>
                  <td className="px-4 py-3 text-xs">{r.email}<br />{r.phone}</td>
                  <td className="px-4 py-3">{r[serviceField]}</td>
                  <td className="px-4 py-3 text-xs">{formatDate(r.date)}</td>
                  <td className="px-4 py-3">
                    <select aria-label="Status" className="rounded border border-hairline px-2 py-1 text-xs" value={r.status} onChange={(e) => data.updateItem(dataKey, r.id, { status: e.target.value })}>
                      {statuses.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1">
                      <IconBtn icon="eye" label="View" onClick={() => setView(r)} />
                      <IconBtn icon="trash" label="Delete" danger onClick={() => setConfirm(r)} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Modal open={!!view} onClose={() => setView(null)} title={`Record ${view?.id || ""}`}>
        {view && (
          <dl className="space-y-2 text-sm">
            {fields.concat(["status", "date"]).map((f) => (
              <div key={f} className="grid grid-cols-3 gap-2 border-b border-hairline pb-2">
                <dt className="font-semibold text-navy">{humanize(f)}</dt>
                <dd className="col-span-2 whitespace-pre-wrap">{f === "date" ? formatDate(view[f]) : String(view[f] ?? "—") || "—"}</dd>
              </div>
            ))}
          </dl>
        )}
      </Modal>
      <ConfirmDialog open={!!confirm} title="Delete record?" message={`Record ${confirm?.id} will be removed.`}
        onCancel={() => setConfirm(null)} onConfirm={() => { data.deleteItem(dataKey, confirm.id); setConfirm(null); }} />
    </div>
  );
}

/* ---------- Overview ---------- */

function Overview({ go }) {
  const d = useSiteData();
  const stats = [
    ["Total Services", d.services.length, "services"],
    ["Gallery Images", d.gallery.length, "gallery"],
    ["Published Jobs", d.jobs.filter((j) => j.published).length, "jobs"],
    ["Contact Enquiries", d.enquiries.length, "enquiries"],
    ["Workforce Enquiries", d.workforce.length, "workforce"],
    ["Job Applications", d.applications.length, "applications"],
  ];
  const recent = [
    ...d.enquiries.map((e) => ({ ...e, kind: "Contact", who: e.name })),
    ...d.workforce.map((e) => ({ ...e, kind: "Workforce", who: e.contactPerson })),
    ...d.applications.map((e) => ({ ...e, kind: "Application", who: e.name })),
  ].sort((a, b) => String(b.date).localeCompare(String(a.date))).slice(0, 6);

  return (
    <div>
      <ModuleHeader title="Dashboard Overview" intro="Live counts calculated from this browser's demo data." />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map(([l, n, k]) => (
          <button key={l} onClick={() => go(k)} className="rounded-lg border border-hairline bg-white p-5 text-left shadow-sm hover:border-cobalt">
            <p className="text-sm text-ink-soft">{l}</p>
            <p className="mt-2 text-3xl font-extrabold text-navy">{n}</p>
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="rounded-lg border border-hairline bg-white p-5 shadow-sm lg:col-span-2">
          <h2 className="font-bold text-navy">Recent Submissions</h2>
          {recent.length === 0 ? <p className="mt-4 text-sm text-ink-soft">No submissions yet.</p> : (
            <ul className="mt-3 divide-y divide-hairline">
              {recent.map((r) => (
                <li key={r.id} className="flex items-center justify-between gap-3 py-3 text-sm">
                  <span><span className="font-semibold text-navy">{r.who}</span> <span className="text-ink-soft">· {r.id}</span></span>
                  <span className="flex items-center gap-2"><Badge tone="teal">{r.kind}</Badge><span className="text-xs text-ink-soft">{formatDate(r.date)}</span></span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="rounded-lg border border-hairline bg-white p-5 shadow-sm">
          <h2 className="font-bold text-navy">Quick Actions</h2>
          <div className="mt-4 flex flex-col gap-2">
            <Btn variant="outline" onClick={() => go("services")}>Manage Services</Btn>
            <Btn variant="outline" onClick={() => go("gallery")}>Manage Gallery</Btn>
            <Btn variant="outline" onClick={() => go("jobs")}>Post a Job</Btn>
            <Btn variant="outline" onClick={() => go("home")}>Edit Homepage</Btn>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingsModule() {
  const { resetAll } = useSiteData();
  const [confirm, setConfirm] = useState(false);
  const [done, setDone] = useState(false);
  return (
    <div className="space-y-8">
      <ObjectModule dataKey="settings" title="SEO & Website Settings" intro="Site title, meta description, brand colours (hex), favicon, footer text, social links, privacy policy text and demo credentials." previewTo="/" />
      <div className="rounded-lg border border-red-200 bg-red-50 p-5">
        <h2 className="font-bold text-red-700">Reset Demo Data</h2>
        <p className="mt-1 text-sm text-red-700/80">Restores all content to the original seed data and deletes all demo submissions in this browser.</p>
        {done && <p className="mt-2 text-sm font-semibold text-success">Demo data has been reset.</p>}
        <button onClick={() => setConfirm(true)} className="mt-4 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Reset Demo Data</button>
      </div>
      <ConfirmDialog open={confirm} title="Reset all demo data?" message="All edits and submissions stored in this browser will be permanently removed." confirmLabel="Reset"
        onCancel={() => setConfirm(false)} onConfirm={() => { resetAll(); setConfirm(false); setDone(true); }} />
    </div>
  );
}

/* ---------- Shell ---------- */

const SERVICE_TPL = { title: "", category: "", image: "", short: "", overview: "", responsibilities: [""], industries: [""], published: false };
const GALLERY_TPL = { title: "", description: "", category: "Facility Management", image: "", published: true };
const JOB_TPL = { title: "", location: "Pune, Maharashtra", type: "Full-time", category: "", description: "", skills: [""], published: false, sample: true };
const IND_TPL = { title: "", image: "", intro: "", requirements: [""], related: [""] };

export default function AdminDashboard() {
  usePageTitle("Admin Dashboard");
  const authed = useRequireAdmin();
  const { navigate } = useRouter();
  const [mod, setMod] = useState("overview");
  const [open, setOpen] = useState(false);
  const go = (k) => { setMod(k); setOpen(false); window.scrollTo({ top: 0 }); };
  const logout = () => { clearAdminAuth(); navigate("/admin/login"); };

  const content = useMemo(() => {
    switch (mod) {
      case "company": return <ObjectModule dataKey="company" title="Company Profile" intro="Name, descriptions, logo URL, address, CIN, directors, contact details and footer credit." previewTo="/" />;
      case "home": return <ObjectModule dataKey="home" title="Homepage Content" previewTo="/" />;
      case "about": return <ObjectModule dataKey="about" title="About Us" previewTo="/about" />;
      case "approach": return <ObjectModule dataKey="approach" title="Our Approach" previewTo="/our-approach" />;
      case "details": return <ObjectModule dataKey="company" title="Company Details" intro="Fields shown on the Company Details page." previewTo="/company-details" only={["name", "cin", "address", "directors", "category", "serviceArea", "phone", "email", "phonePlaceholder", "emailPlaceholder"]} />;
      case "services": return <CollectionModule dataKey="services" title="Services" template={SERVICE_TPL} prefix="svc" columns={["category", "short"]} filterField="category" />;
      case "industries": return <CollectionModule dataKey="industries" title="Industries" template={IND_TPL} prefix="ind" columns={["intro"]} />;
      case "gallery": return <CollectionModule dataKey="gallery" title="Gallery" template={GALLERY_TPL} prefix="gal" columns={["category", "description"]} filterField="category" />;
      case "jobs": return <CollectionModule dataKey="jobs" title="Job Listings" template={JOB_TPL} prefix="job" columns={["location", "type", "category"]} filterField="category" />;
      case "enquiries": return <RecordsModule dataKey="enquiries" title="Contact Enquiries" statuses={["New", "In Progress", "Resolved"]} fields={["name", "company", "email", "phone", "service", "subject", "message"]} nameField="name" companyField="company" serviceField="service" filename="contact-enquiries.csv" />;
      case "workforce": return <RecordsModule dataKey="workforce" title="Workforce Enquiries" statuses={["New", "In Progress", "Resolved"]} fields={["company", "contactPerson", "email", "phone", "category", "headcount", "location", "startDate", "requirements"]} nameField="contactPerson" companyField="company" serviceField="category" filename="workforce-enquiries.csv" />;
      case "applications": return <RecordsModule dataKey="applications" title="Job Applications" statuses={["New", "Reviewing", "Shortlisted", "Closed"]} fields={["name", "email", "phone", "position", "experience", "intro"]} nameField="name" companyField="experience" serviceField="position" filename="job-applications.csv" />;
      case "settings": return <SettingsModule />;
      default: return <Overview go={go} />;
    }
  }, [mod]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!authed) return null;

  return (
    <div className="min-h-screen bg-mist lg:flex">
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 overflow-y-auto bg-navy-deep text-white transition-transform lg:static lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="border-b border-white/10 p-5"><BrandBlock light compact /></div>
        <nav className="p-3" aria-label="Admin">
          {MODULES.map(([k, l, ic]) => (
            <button key={k} onClick={() => go(k)} aria-current={mod === k ? "page" : undefined}
              className={`mb-1 flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm ${mod === k ? "bg-cobalt font-semibold" : "text-white/75 hover:bg-white/10"}`}>
              <Icon name={ic} className="h-4 w-4" /> {l}
            </button>
          ))}
          <button onClick={logout} className="mt-4 flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm text-white/75 hover:bg-white/10">
            <Icon name="logout" className="h-4 w-4" /> Logout
          </button>
        </nav>
      </aside>
      {open && <div className="fixed inset-0 z-30 bg-navy-deep/60 lg:hidden" onClick={() => setOpen(false)} />}
      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-hairline bg-white px-4 py-3 sm:px-6">
          <button className="rounded p-2 text-navy lg:hidden" aria-label="Open menu" onClick={() => setOpen(true)}><Icon name="menu" /></button>
          <Badge tone="warn">Demo admin · browser storage only</Badge>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-sm font-semibold text-cobalt">View Website</Link>
            <Btn variant="navy" className="!px-3 !py-1.5" onClick={logout}>Logout</Btn>
          </div>
        </header>
        <main className="p-4 sm:p-6 lg:p-8">{content}</main>
      </div>
    </div>
  );
}
