import { usePageTitle } from "@/router";
import { PageHero } from "@/components/layout";
import { Btn, Section, SectionHeading } from "@/components/ui";

export default function NotFound() {
  usePageTitle("Page Not Found");
  return (
    <>
      <PageHero title="Page Not Found" sub="The page you are looking for does not exist or has been moved." />
      <Section tone="mist" className="text-center">
        <SectionHeading align="center" title="Let's get you back on track" />
        <div className="mt-8 flex justify-center gap-3">
          <Btn to="/">Go Home</Btn>
          <Btn variant="outline" to="/contact">Contact Us</Btn>
        </div>
      </Section>
    </>
  );
}
