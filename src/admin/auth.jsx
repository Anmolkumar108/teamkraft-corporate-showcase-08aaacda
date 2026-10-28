import { useEffect } from "react";
import { useRouter } from "@/router";

export const AUTH_KEY = "tk_admin_auth";

export function isAdminAuthed() {
  try {
    return window.sessionStorage.getItem(AUTH_KEY) === "1";
  } catch {
    return false;
  }
}

export function setAdminAuthed() {
  try {
    window.sessionStorage.setItem(AUTH_KEY, "1");
  } catch {
    /* ignore */
  }
}

export function clearAdminAuth() {
  try {
    window.sessionStorage.removeItem(AUTH_KEY);
  } catch {
    /* ignore */
  }
}

/** Redirects to /admin/login unless the demo session flag is set. */
export function useRequireAdmin() {
  const { navigate } = useRouter();
  useEffect(() => {
    if (!isAdminAuthed()) navigate("/admin/login");
  }, [navigate]);
  return isAdminAuthed();
}
