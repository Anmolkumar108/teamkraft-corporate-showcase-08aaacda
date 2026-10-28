import { usePageTitle } from "@/router";
import { useSiteData } from "@/lib/site-context";
import { PageHero } from "@/components/layout";
import { Badge, Section } from "@/components/ui";

export default function PrivacyPolicy() {
  usePageTitle("Privacy Policy");
  const { settings, company } = useSiteData();
  const paras = Array.isArray(settings.privacyText) ? settings.privacyText : [];
  return (
    <>
      <PageHero title="Privacy Policy" sub="How this demonstration website handles information." />
      <Section>
        <div className="mx-auto max-w-3xl">
          <Badge tone="warn">Demo policy — not legal advice</Badge>
          <div className="mt-6 space-y-5 leading-relaxed text-ink">
            {paras.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-8 border-t border-hairline pt-6 text-sm text-ink-soft">
            {company.name} · {company.address}
          </p>
        </div>
      </Section>
    </>
  );
}
