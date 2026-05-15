import { Link } from "@tanstack/react-router";
import { Zap, ArrowRight } from "lucide-react";
import hero from "@/assets/hero-lightning.jpg";

export function HeroLightning() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={hero}
        alt="Tampa night sky with lightning"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_var(--background)_85%)]" />
      <div className="lightning-overlay" />

      <div className="relative mx-auto max-w-7xl px-5 pt-24 pb-32 md:pt-36 md:pb-44">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary">
            <Zap className="h-3.5 w-3.5" /> Storm Season Ready · Tampa Bay
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.95] text-foreground">
            When the lights go out, <span className="bolt-text">we keep you on.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Surge protection, generator hookups, panel upgrades and 24/7 emergency service. Ethical Electrical is the licensed Tampa team homeowners call before — and after — the storm.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-bolt)] hover:scale-[1.02] transition"
            >
              Book a free quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:8137508010"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-foreground hover:border-primary hover:text-primary transition"
            >
              Call (813) 750-8010
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md text-center">
            {[
              { v: "20+", l: "Years experience" },
              { v: "24/7", l: "Emergency service" },
              { v: "100%", l: "Code-compliant" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-primary">{s.v}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
