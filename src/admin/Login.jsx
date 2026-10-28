import { useEffect, useState } from "react";
import { Link, useRouter, usePageTitle } from "@/router";
import { useSiteData } from "@/lib/site-context";
import { isAdminAuthed, setAdminAuthed } from "@/admin/auth";
import { BrandBlock } from "@/components/layout";
import { Alert, Btn } from "@/components/ui";

export default function AdminLogin() {
  usePageTitle("Admin Login");
  const { navigate } = useRouter();
  const { settings } = useSiteData();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAdminAuthed()) navigate("/admin/dashboard");
  }, [navigate]);

  const submit = (e) => {
    e.preventDefault();
    setError("");
    if (!username.trim() || !password) {
      setError("Enter both username and password.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const u = settings.adminUsername || "admin";
      const p = settings.adminPassword || "Teamkraft@123";
      if (username.trim() === u && password === p) {
        setAdminAuthed();
        navigate("/admin/dashboard");
      } else {
        setError("Invalid username or password.");
        setLoading(false);
      }
    }, 600);
  };

  const input = "w-full rounded-md border border-hairline px-3 py-2.5 text-sm focus:border-cobalt focus:outline-none";

  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-deep px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-6 flex justify-center"><BrandBlock light /></div>
        <form onSubmit={submit} noValidate className="rounded-lg bg-white p-7 shadow-xl">
          <h1 className="text-xl font-bold text-navy">Admin Login</h1>
          <p className="mt-1 text-sm text-ink-soft">Sign in to manage website content.</p>
          <div className="mt-6 space-y-4">
            {error && <Alert tone="error">{error}</Alert>}
            <div>
              <label htmlFor="u" className="mb-1.5 block text-sm font-semibold text-navy">Username</label>
              <input id="u" autoComplete="username" className={input} value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
              <label htmlFor="p" className="mb-1.5 block text-sm font-semibold text-navy">Password</label>
              <div className="relative">
                <input id="p" type={show ? "text" : "password"} autoComplete="current-password" className={`${input} pr-16`} value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="button" onClick={() => setShow((s) => !s)} className="absolute right-2 top-1/2 -translate-y-1/2 rounded px-2 py-1 text-xs font-semibold text-cobalt hover:bg-mist">
                  {show ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <Btn type="submit" className="w-full" disabled={loading}>{loading ? "Signing in…" : "Sign In"}</Btn>
          </div>
          <div className="mt-6 rounded-md border border-dashed border-hairline bg-mist p-4 text-xs text-ink-soft">
            <p className="font-bold text-navy">Demo Login Credentials</p>
            <p className="mt-1">Username: <code className="font-semibold text-ink">admin</code> · Password: <code className="font-semibold text-ink">Teamkraft@123</code></p>
            <p className="mt-2">Demo-only, browser-side login. Not secure production authentication.</p>
          </div>
        </form>
        <p className="mt-6 text-center text-sm"><Link to="/" className="text-white/70 hover:text-white">← Back to website</Link></p>
      </div>
    </div>
  );
}
