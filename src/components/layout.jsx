import { useEffect, useState } from "react";
import { Link, useRouter } from "@/router";
import { useSiteData } from "@/lib/site-context";
import { Btn, Icon, Img, LogoMark } from "@/components/ui";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Our Approach", to: "/our-approach" },
  { label: "Industries", to: "/industries" },
  { label: "Gallery", to: "/gallery" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export function BrandBlock({ light = false, compact = false }) {
  const { company } = useSiteData();
  const nameCls = light ? "text-white" : "text-navy";
  return (
    <Link to="/" className="flex items-center gap-3" aria-label={`${company.name} — home`}>
      {company.logoUrl ? (
        <img
          src={company.logoUrl}
          alt={`${company.shortName} logo`}
          className={`${compact ? "h-8" : "h-10"} w-auto rounded`}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      ) : (
        <LogoMark className={compact ? "h-8 w-8" : "h-10 w-10"} />
      )}
      <span className="leading-tight">
        <span className={`block text-lg font-extrabold tracking-tight ${nameCls}`}>
          {company.shortName || "Teamkraft"}
        </span>
        <span
          className={`block text-[10px] font-semibold uppercase tracking-[0.18em] ${
            light ? "text-white/60" : "text-ink-soft"
          }`}
        >
          Facility Services Pvt. Ltd.
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const { path } = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  const linkCls = (to) =>
    `border-b-2 py-1 text-sm font-semibold transition-colors ${
      path === to
        ? "border-teal text-white"
        : "border-transparent text-white/80 hover:border-white/40 hover:text-white"
    }`;

  return (
    <header
      className={`sticky top-0 z-40 bg-navy transition-shadow ${scrolled ? "shadow-lg shadow-navy-deep/40" : ""}`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <BrandBlock />
        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link key={item.to} to={item.to} className={linkCls(item.to)}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Btn variant="teal" to="/contact" className="px-4 py-2">
            Request a Quote
          </Btn>
        </div>
        <button
          className="rounded p-2 text-white hover:bg-white/10 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-navy lg:hidden">
          <nav aria-label="Mobile navigation" className="container-x flex flex-col py-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded px-2 py-2.5 text-sm font-semibold ${
                  path === item.to ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 px-2 pb-2">
              <Btn variant="teal" to="/contact" className="w-full">
                Request a Quote
              </Btn>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const { company, settings } = useSiteData();
  const quickLinks = [
    ["Home", "/"],
    ["About Us", "/about"],
    ["Services", "/services"],
    ["Our Approach", "/our-approach"],
    ["Industries", "/industries"],
    ["Gallery", "/gallery"],
    ["Careers", "/careers"],
    ["Company Details", "/company-details"],
    ["Contact Us", "/contact"],
    ["Privacy Policy", "/privacy-policy"],
  ];
  const phone = company.phone || company.phonePlaceholder;
  const email = company.email || company.emailPlaceholder;

  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <BrandBlock light compact />
          <p className="mt-4 text-sm leading-relaxed">{company.footerAbout || company.shortDescription}</p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-white/50">
            CIN: {company.cin}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:grid-cols-1">
            {quickLinks.map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Registered Office</h3>
          <p className="mt-4 flex gap-2 text-sm">
            <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
            {company.address}
          </p>
          <p className="mt-4 flex gap-2 text-sm">
            <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
            {phone}
          </p>
          <p className="mt-2 flex gap-2 text-sm">
            <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
            {email}
          </p>
          <p className="mt-4 text-sm">
            <span className="font-semibold text-white">Service Area:</span> {company.serviceArea}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">About</h3>
          <p className="mt-4 text-sm">{settings.footerText}</p>
          {settings.socials && (settings.socials.linkedin || settings.socials.instagram || settings.socials.facebook) ? (
            <div className="mt-4 flex gap-3 text-sm">
              {["linkedin", "instagram", "facebook"].map((s) =>
                settings.socials[s] ? (
                  <a
                    key={s}
                    href={settings.socials[s]}
                    target="_blank"
                    rel="noreferrer"
                    className="capitalize hover:text-white"
                  >
                    {s}
                  </a>
                ) : null
              )}
            </div>
          ) : null}
          <div className="mt-6 border-t border-white/10 pt-4">
            <Link to="/admin/login" className="text-xs font-semibold text-white/50 hover:text-white">
              Admin Login
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-x flex flex-col items-center justify-between gap-2 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>{company.credit}</p>
        </div>
      </div>
    </footer>
  );
}

/** Shared inner-page banner. */
export function PageHero({ title, sub, image, tone = "navy" }) {
  return (
    <div className="relative overflow-hidden bg-navy-deep">
      {image ? (
        <Img
          src={image}
          alt=""
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
      ) : null}
      <div className={image ? "hero-overlay absolute inset-0" : ""} />
      <div className="relative">
        <div className="container-x py-16 sm:py-20">
          <nav aria-label="Breadcrumb" className="mb-3 text-xs font-semibold text-white/60">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-1.5">/</span>
            <span className="text-teal">{title}</span>
          </nav>
          <h1 className="max-w-3xl text-3xl font-extrabold text-white sm:text-4xl">{title}</h1>
          {sub && <p className="mt-4 max-w-2xl text-white/75">{sub}</p>}
        </div>
      </div>
    </div>
  );
}
