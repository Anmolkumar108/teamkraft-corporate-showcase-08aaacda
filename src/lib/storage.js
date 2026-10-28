/** localStorage helpers: safe JSON reads, unique ids, CSV export. */

export function readStore(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    if (raw === null || raw === undefined) return fallback;
    const parsed = JSON.parse(raw);
    if (parsed === null || parsed === undefined) return fallback;
    return parsed;
  } catch {
    return fallback;
  }
}

export function writeStore(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function removeStore(key) {
  try {
    window.localStorage.removeItem(key);
  } catch {
    /* ignore */
  }
}

export const KEYS = {
  company: "tk_company",
  home: "tk_home",
  about: "tk_about",
  approach: "tk_approach",
  services: "tk_services",
  industries: "tk_industries",
  gallery: "tk_gallery",
  jobs: "tk_jobs",
  enquiries: "tk_enquiries",
  workforce: "tk_workforce",
  applications: "tk_applications",
  settings: "tk_settings",
};

/** Short readable demo reference id, e.g. ENQ-8F3K2. */
export function uid(prefix = "") {
  const alphabet = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 5; i += 1) {
    code += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return prefix ? `${prefix}-${code}` : code;
}

export function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

/** Download an array of objects as a CSV file (native browser functionality). */
export function downloadCSV(rows, filename) {
  if (!Array.isArray(rows) || rows.length === 0) return false;
  const headers = Object.keys(rows[0]);
  const escape = (v) => {
    const s = v === null || v === undefined ? "" : String(v);
    return `"${s.replace(/"/g, '""')}"`;
  };
  const lines = [headers.map(escape).join(",")];
  rows.forEach((row) => lines.push(headers.map((h) => escape(row[h])).join(",")));
  const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  return true;
}
