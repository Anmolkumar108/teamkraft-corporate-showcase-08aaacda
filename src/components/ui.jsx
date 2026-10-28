import { useEffect, useState } from "react";
import { Link } from "@/router";

/* ---------- Buttons & links ---------- */

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60";

export const btnVariants = {
  primary: "bg-cobalt text-white hover:bg-navy",
  navy: "bg-navy text-white hover:bg-navy-deep",
  teal: "bg-teal text-white hover:bg-navy",
  outline: "border border-hairline bg-white text-ink hover:bg-mist",
  ghostLight: "border border-white/40 text-white hover:bg-white/10",
};

export function Btn({ variant = "primary", className = "", as = "button", to, children, ...rest }) {
  const cls = `${btnBase} ${btnVariants[variant] || btnVariants.primary} ${className}`;
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  const Tag = as;
  return (
    <Tag className={cls} {...rest}>
      {children}
    </Tag>
  );
}

/* ---------- Layout helpers ---------- */

export function Section({ className = "", children, tone = "light", id }) {
  const tones = {
    light: "bg-white",
    mist: "bg-mist",
    navy: "bg-navy text-white",
  };
  return (
    <section id={id} className={`${tones[tone]} py-16 sm:py-20 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, sub, align = "left" }) {
  const alignCls = align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl";
  return (
    <div className={alignCls}>
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-teal">{eyebrow}</p>
      )}
      <h2 className="text-2xl font-bold text-navy sm:text-3xl">{title}</h2>
      {sub && <p className="mt-3 text-ink-soft">{sub}</p>}
      <div className={`mt-4 h-1 w-14 rounded-full bg-teal ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}

export function Badge({ tone = "mist", className = "", children }) {
  const tones = {
    mist: "bg-mist text-navy border border-hairline",
    teal: "bg-teal/10 text-teal border border-teal/30",
    navy: "bg-navy text-white",
    success: "bg-success/10 text-success border border-success/30",
    warn: "bg-amber-50 text-amber-700 border border-amber-200",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export function Alert({ tone = "success", children, onClose }) {
  const tones = {
    success: "bg-success/10 text-success border-success/40",
    error: "bg-red-50 text-red-700 border-red-300",
    info: "bg-mist text-navy border-hairline",
  };
  return (
    <div
      role="status"
      className={`mb-4 flex items-start justify-between gap-3 rounded-md border px-4 py-3 text-sm ${tones[tone]}`}
    >
      <div>{children}</div>
      {onClose && (
        <button onClick={onClose} aria-label="Dismiss message" className="text-base leading-none opacity-60 hover:opacity-100">
          ×
        </button>
      )}
    </div>
  );
}

/* ---------- Image with graceful fallback ---------- */

export function Img({ src, alt, className = "", loading = "lazy", ...rest }) {
  const [failed, setFailed] = useState(false);
  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-navy-deep text-ink-soft ${className}`}
      >
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      onError={() => setFailed(true)}
      className={className}
      {...rest}
    />
  );
}

/* ---------- Modal & confirm ---------- */

export function Modal({ open, onClose, title, children, wide = false }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={title}>
      <div className="absolute inset-0 bg-navy-deep/70" onClick={onClose} />
      <div
        className={`relative max-h-[90vh] w-full overflow-y-auto rounded-lg bg-white p-5 shadow-xl sm:p-6 ${
          wide ? "max-w-3xl" : "max-w-xl"
        }`}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="text-lg font-bold text-navy">{title}</h3>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="rounded p-1 text-xl leading-none text-ink-soft hover:bg-mist hover:text-ink"
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export function ConfirmDialog({ open, title, message, confirmLabel = "Delete", onConfirm, onCancel }) {
  return (
    <Modal open={open} onClose={onCancel} title={title}>
      <p className="text-sm text-ink-soft">{message}</p>
      <div className="mt-5 flex justify-end gap-3">
        <Btn variant="outline" onClick={onCancel}>
          Cancel
        </Btn>
        <button
          onClick={onConfirm}
          className="rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
        >
          {confirmLabel}
        </button>
      </div>
    </Modal>
  );
}

/* ---------- Form fields ---------- */

export function Field({ label, name, type = "text", value, onChange, error, placeholder, options, textarea, rows = 4, required = true, ...rest }) {
  const inputCls = `w-full rounded-md border bg-white px-3 py-2 text-sm text-ink placeholder:text-ink-soft/70 focus:border-cobalt focus:outline-none ${
    error ? "border-red-400" : "border-hairline"
  }`;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-semibold text-navy">
        {label} {required && <span className="text-red-500" aria-hidden="true">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={inputCls}
        />
      ) : options ? (
        <select id={name} name={name} value={value} onChange={onChange} className={inputCls}>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={inputCls}
          {...rest}
        />
      )}
      {error && <p className="text-xs font-medium text-red-600">{error}</p>}
    </div>
  );
}

/* ---------- Icons (inline SVG) ---------- */

export function Icon({ name, className = "h-5 w-5", ...rest }) {
  const paths = {
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    close: <path d="M6 6l12 12M6 18L18 6" />,
    check: <path d="M4 12l5 5L20 6" />,
    arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
    phone: <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.9a2 2 0 01-.5 2.1L8 10a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.9.3 1.9.6 2.9.7a2 2 0 011.7 2z" />,
    mail: <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm18 3l-10 6L2 7" />,
    pin: <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0zm-9 3a3 3 0 100-6 3 3 0 000 6z" />,
    chevronUp: <path d="M18 15l-6-6-6 6" />,
    chevronDown: <path d="M6 9l6 6 6-6" />,
    search: <path d="M21 21l-4.3-4.3M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />,
    download: <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />,
    plus: <path d="M12 5v14M5 12h14" />,
    edit: <path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />,
    trash: <path d="M3 6h18M8 6V4a1 1 0 011-1h6a1 1 0 011 1v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14zM10 11v6M14 11v6" />,
    eye: <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12zm11 3a3 3 0 100-6 3 3 0 000 6z" />,
    users: <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm14 10v-2a4 4 0 00-3-3.9M16 3.1a4 4 0 010 7.8" />,
    briefcase: <path d="M20 7h-4V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zm-6 0h-4V5h4v2z" />,
    grid: <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />,
    settings: <path d="M12 15a3 3 0 100-6 3 3 0 000 6zm7.4-3a7.4 7.4 0 00-.1-1.2l2-1.5-2-3.5-2.4 1a7.5 7.5 0 00-2-1.2L14.5 3h-4l-.4 2.6a7.5 7.5 0 00-2 1.2l-2.4-1-2 3.5 2 1.5a7.4 7.4 0 000 2.4l-2 1.5 2 3.5 2.4-1a7.5 7.5 0 002 1.2l.4 2.6h4l.4-2.6a7.5 7.5 0 002-1.2l2.4 1 2-3.5-2-1.5c.1-.4.1-.8.1-1.2z" />,
    logout: <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />,
    home: <path d="M3 10.5L12 3l9 7.5M5 9.5V21h14V9.5" />,
    image: <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM8.5 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM21 15l-5-5-11 9" />,
    clipboard: <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 6h8m-8 4h5" />,
    inbox: <path d="M22 12h-6l-2 3h-4l-2-3H2m1.5-5L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-1.5-5a2 2 0 00-1.9-1.4H5.4A2 2 0 003.5 7z" />,
    shield: <path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10z" />,
    file: <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zm0 0v6h6" />,
    info: <path d="M12 22a10 10 0 100-20 10 10 0 000 20zm0-14v.01M12 11v5" />,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...rest}>
      {paths[name] || paths.info}
    </svg>
  );
}

/* ---------- Brand text logo ---------- */

export function LogoMark({ className = "h-9 w-9" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="6" fill="#17324D" />
      <path d="M11 12h18M20 12v17" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M20 20l8-8" stroke="#168C88" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
