import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HeroLightning } from "@/components/HeroLightning";
import { ServicesGrid } from "@/components/ServicesGrid";
import { AdCarousel } from "@/components/AdCarousel";
import { TampaMapSection } from "@/components/TampaMapSection";
import { ContactForm } from "@/components/ContactForm";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ethical Electrical Services — Tampa's Licensed Electricians" },
      { name: "description", content: "Storm-ready surge protection, generators, panel upgrades and 24/7 emergency electrical service in Tampa Bay. Family-run. Call (813) 750-8010." },
      { property: "og:title", content: "Ethical Electrical Services — Tampa's Licensed Electricians" },
      { property: "og:description", content: "Storm-ready surge protection, generators and 24/7 emergency electrical service across Tampa Bay." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroLightning />
        <ServicesGrid />
        <AdCarousel />
        <TampaMapSection />

        <section id="contact" className="relative py-24 md:py-32 bg-[color:var(--surface)]/40">
          <div className="mx-auto max-w-5xl px-5 grid gap-10 md:grid-cols-2 items-start">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-primary">Get in touch</span>
              <h2 className="mt-3 font-display text-4xl md:text-6xl uppercase leading-tight">Send Matt <span className="bolt-text">a message.</span></h2>
              <p className="mt-5 text-muted-foreground">Tell us about the job. We'll review and respond within one business day with honest, flat-rate pricing.</p>
              <div className="mt-8 space-y-3 text-sm text-muted-foreground">
                <div>📞 <a href="tel:8137508010" className="text-foreground hover:text-primary">(813) 750-8010</a></div>
                <div>✉️ <a href="mailto:matt@ethicalelectricalservices.com" className="text-foreground hover:text-primary">matt@ethicalelectricalservices.com</a></div>
                <div>⚡ Tampa Bay · Hillsborough & Pinellas County</div>
              </div>
              <Link to="/services" className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-wider text-primary hover:underline">
                See all services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
