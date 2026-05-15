import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactForm } from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, Zap } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ethical Electrical — Tampa Bay Electricians" },
      { name: "description", content: "Request a free electrical quote in Tampa Bay. Call Matt at (813) 750-8010 or message us — replies within one business day." },
      { property: "og:title", content: "Contact Ethical Electrical — Tampa Bay Electricians" },
      { property: "og:description", content: "Request a free electrical quote in Tampa. Call (813) 750-8010 or send a message." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative py-24 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.72_0.16_240/0.18),_transparent_60%)]" />
          <div className="relative mx-auto max-w-6xl px-5 grid gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary">
                <Zap className="h-3.5 w-3.5" /> Talk to us
              </span>
              <h1 className="mt-6 font-display text-5xl md:text-7xl uppercase leading-[0.95]">
                Let's get your <span className="bolt-text">project wired.</span>
              </h1>
              <p className="mt-5 max-w-lg text-lg text-muted-foreground">
                Fill out the form and Matt will personally review your request. Replies within one business day.
              </p>

              <div className="mt-10 grid sm:grid-cols-2 gap-5">
                <Info icon={Phone} title="Call" body={<a className="hover:text-primary" href="tel:8137508010">(813) 750-8010</a>} />
                <Info icon={Mail} title="Email" body={<a className="hover:text-primary break-all" href="mailto:matt@ethicalelectricalservices.com">matt@ethicalelectricalservices.com</a>} />
                <Info icon={MapPin} title="Service Area" body="Tampa Bay · Hillsborough & Pinellas" />
                <Info icon={Clock} title="Hours" body="Mon–Fri 7am–7pm · 24/7 emergency" />
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Info({ icon: Icon, title, body }: { icon: typeof Phone; title: string; body: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-[color:var(--surface)]/60 p-5">
      <Icon className="h-6 w-6 text-primary" />
      <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
      <div className="mt-1 text-sm text-foreground">{body}</div>
    </div>
  );
}
