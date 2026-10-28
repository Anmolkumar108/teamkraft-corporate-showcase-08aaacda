import { createContext, useCallback, useContext, useEffect, useState } from "react";

const RouterContext = createContext({ path: "/", navigate: () => {} });

export function RouterProvider({ children }) {
  const [path, setPath] = useState(window.location.pathname || "/");

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname || "/");
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = useCallback((to) => {
    if (to === window.location.pathname) {
      window.scrollTo({ top: 0 });
      return;
    }
    window.history.pushState({}, "", to);
    setPath(to);
    window.scrollTo({ top: 0 });
  }, []);

  return <RouterContext.Provider value={{ path, navigate }}>{children}</RouterContext.Provider>;
}

export function useRouter() {
  return useContext(RouterContext);
}

export function Link({ to, children, className, ariaLabel, onClick, ...rest }) {
  const { navigate } = useRouter();
  return (
    <a
      href={to}
      aria-label={ariaLabel}
      className={className}
      onClick={(e) => {
        if (onClick) onClick(e);
        if (e.defaultPrevented) return;
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        navigate(to);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}

/** Sets the browser tab title; call from every page component. */
export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Teamkraft Facility Services` : "Teamkraft Facility Services";
    return () => {
      document.title = "Teamkraft Facility Services Private Limited | Pune";
    };
  }, [title]);
}
