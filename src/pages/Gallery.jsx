import { useEffect, useMemo, useState } from "react";
import { usePageTitle } from "@/router";
import { useSiteData } from "@/lib/site-context";
import { PageHero } from "@/components/layout";
import { Btn, Icon, Img, Modal, Section } from "@/components/ui";

export default function Gallery() {
  usePageTitle("Gallery");
  const { gallery } = useSiteData();
  const published = gallery.filter((g) => g.published);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(published.map((g) => g.category)))],
    [published]
  );
  const [filter, setFilter] = useState("All");
  const items = filter === "All" ? published : published.filter((g) => g.category === filter);

  const [lightbox, setLightbox] = useState(null); // index within items
  const current = lightbox !== null ? items[lightbox] : null;

  useEffect(() => {
    if (lightbox === null) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i + 1) % items.length);
      if (e.key === "ArrowLeft") setLightbox((i) => (i - 1 + items.length) % items.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, items.length]);

  return (
    <>
      <PageHero
        title="Gallery"
        sub="Facilities, offices, warehouse operations and industrial workplaces we support."
        image="https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=1600&q=80"
      />
      <Section tone="mist">
        <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter gallery by category">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => {
                setFilter(c);
                setLightbox(null);
              }}
              aria-pressed={filter === c}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                filter === c
                  ? "bg-navy text-white"
                  : "border border-hairline bg-white text-ink hover:border-cobalt hover:text-cobalt"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {items.length === 0 ? (
          <p className="mt-12 text-center text-ink-soft">
            No images in this category yet. Check back soon.
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((g, i) => (
              <figure key={g.id} className="group">
                <button
                  onClick={() => setLightbox(i)}
                  className="block w-full overflow-hidden rounded-lg border border-hairline bg-white shadow-sm transition-shadow hover:shadow-md"
                  aria-label={`Open image: ${g.title}`}
                >
                  <div className="relative">
                    <Img
                      src={g.image}
                      alt={`${g.title} — ${g.description}`}
                      className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute right-2 top-2 rounded bg-navy-deep/70 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white opacity-0 transition-opacity group-hover:opacity-100">
                      View
                    </span>
                  </div>
                  <figcaption className="p-3">
                    <p className="text-sm font-bold text-navy">{g.title}</p>
                    <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-teal">
                      {g.category}
                    </p>
                  </figcaption>
                </button>
              </figure>
            ))}
          </div>
        )}
      </Section>

      <Modal open={current !== null} onClose={() => setLightbox(null)} title={current?.title || ""} wide>
        {current && (
          <div>
            <Img
              src={current.image}
              alt={`${current.title} — ${current.description}`}
              loading="eager"
              className="max-h-[60vh] w-full rounded-md object-contain"
            />
            <p className="mt-3 text-sm text-ink-soft">{current.description}</p>
            <div className="mt-5 flex items-center justify-between">
              <Btn
                variant="outline"
                as="button"
                onClick={() => setLightbox((i) => (i - 1 + items.length) % items.length)}
              >
                <Icon name="chevronDown" className="h-4 w-4 rotate-90" /> Previous
              </Btn>
              <span className="text-xs font-semibold text-ink-soft">
                {(lightbox ?? 0) + 1} / {items.length}
              </span>
              <Btn variant="outline" as="button" onClick={() => setLightbox((i) => (i + 1) % items.length)}>
                Next <Icon name="chevronDown" className="h-4 w-4 -rotate-90" />
              </Btn>
            </div>
          </div>
        )}
      </Modal>

      <Section tone="navy" className="text-center">
        <h2 className="mx-auto max-w-2xl text-2xl font-extrabold text-white sm:text-3xl">
          Want to See These Standards at Your Site?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/75">
          Discuss your facility and workforce requirements with our team.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Btn variant="teal" to="/contact">
            Contact Us
          </Btn>
          <Btn variant="ghostLight" to="/workforce-solutions">
            Workforce Enquiry
          </Btn>
        </div>
      </Section>
    </>
  );
}
