import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ArrowRight, Zap } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Electrical Services in Tampa Bay — Ethical Electrical" },
      { name: "description", content: "Residential & commercial electrical services in Tampa: surge protection, generators, panel upgrades, EV chargers, lighting and 24/7 emergency repairs." },
      { property: "og:title", content: "Electrical Services in Tampa Bay — Ethical Electrical" },
      { property: "og:description", content: "Surge protection, generators, panels, EV chargers, lighting and 24/7 emergency repairs across Tampa Bay." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.72_0.16_240/0.18),_transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary">
              <Zap className="h-3.5 w-3.5" /> Tampa Bay
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl uppercase leading-[0.95]">
              Every wire, <span className="bolt-text">handled right.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              From a single outlet to a full whole-home rewire — every job is permitted, inspected and finished with a written guarantee.
            </p>
          </div>
        </section>
        <ServicesGrid />
        <section className="py-20 bg-[color:var(--surface)]/40">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h2 className="font-display text-3xl md:text-5xl uppercase">Need something not listed?</h2>
            <p className="mt-4 text-muted-foreground">If it's electrical, we probably do it. Send Matt a quick note and we'll get back the same day.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-bolt)]">
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
