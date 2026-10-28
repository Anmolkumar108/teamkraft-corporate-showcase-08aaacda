import { useEffect } from "react";
import { RouterProvider, useRouter, Link } from "@/router";
import { SiteDataProvider, useSiteData } from "@/lib/site-context";
import { Header, Footer, PageHero } from "@/components/layout";
import { Btn, Section, SectionHeading } from "@/components/ui";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services, { ServiceDetail } from "@/pages/Services";
import OurApproach from "@/pages/OurApproach";
import Industries from "@/pages/Industries";
import WorkforceSolutions from "@/pages/WorkforceSolutions";
import Gallery from "@/pages/Gallery";
import Careers from "@/pages/Careers";
import CompanyDetails from "@/pages/CompanyDetails";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import NotFound from "@/pages/NotFound";
import AdminLogin from "@/admin/Login";
import AdminDashboard from "@/admin/Dashboard";

function NotFoundPage() {
  return (
    <>
      <PageHero
        title="Page Not Found"
        sub="The page you are looking for does not exist or has been moved."
      />
      <Section tone="mist" className="text-center">
        <SectionHeading
          align="center"
          title="Let's get you back on track"
          sub="Head to the homepage to explore our services, industries and career opportunities."
        />
        <div className="mt-8 flex justify-center gap-3">
          <Btn to="/">Go Home</Btn>
          <Btn variant="outline" to="/contact">
            Contact Us
          </Btn>
        </div>
      </Section>
    </>
  );
}

function PublicRoutes() {
  const { path } = useRouter();
  let page = null;

  if (path === "/" || path === "/index.html") page = <Home />;
  else if (path === "/about") page = <About />;
  else if (path === "/services") page = <Services />;
  else if (path.startsWith("/services/")) page = <ServiceDetail id={path.split("/")[2]} />;
  else if (path === "/our-approach") page = <OurApproach />;
  else if (path === "/industries") page = <Industries />;
  else if (path === "/workforce-solutions") page = <WorkforceSolutions />;
  else if (path === "/gallery") page = <Gallery />;
  else if (path === "/careers") page = <Careers />;
  else if (path === "/company-details") page = <CompanyDetails />;
  else if (path === "/contact") page = <Contact />;
  else if (path === "/privacy-policy") page = <PrivacyPolicy />;
  else page = <NotFoundPage />;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        {page}
      </main>
      <Footer />
    </div>
  );
}

function AdminRoutes() {
  const { path } = useRouter();
  if (path === "/admin/dashboard") return <AdminDashboard />;
  if (path === "/admin/login" || path === "/admin") return <AdminLogin />;
  return <NotFoundPage />;
}

/** Applies SEO settings (site title / meta description / favicon) to the document. */
function useApplySettings() {
  const { settings } = useSiteData();
  useEffect(() => {
    const rootTitle = settings.siteTitle || "Teamkraft Facility Services Private Limited";
    document.title = rootTitle;
    let meta = document.querySelector('meta[name="description"]');
    if (meta && settings.metaDescription) meta.setAttribute("content", settings.metaDescription);
    if (settings.faviconUrl) {
      let link = document.querySelector('link[rel="icon"]');
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      link.href = settings.faviconUrl;
    }
  }, [settings.siteTitle, settings.metaDescription, settings.faviconUrl]);
}

function AppShell() {
  const { path } = useRouter();
  useApplySettings();
  const isAdmin = path.startsWith("/admin");
  return isAdmin ? <AdminRoutes /> : <PublicRoutes />;
}

export default function App() {
  return (
    <SiteDataProvider>
      <RouterProvider>
        <AppShell />
      </RouterProvider>
    </SiteDataProvider>
  );
}
