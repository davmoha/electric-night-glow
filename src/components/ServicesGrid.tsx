import { Zap, ShieldCheck, Battery, Home, Lightbulb, AlertTriangle } from "lucide-react";

const SERVICES = [
  { icon: ShieldCheck, title: "Whole-Home Surge Protection", desc: "Stop spikes before they reach your lights, AC and tech." },
  { icon: Battery, title: "Generator & Transfer Switches", desc: "Stay powered through hurricane outages — automatic or portable." },
  { icon: Zap, title: "Panel Upgrades & Rewires", desc: "Modern 200A panels and aging-wire replacement, permitted and inspected." },
  { icon: Home, title: "Residential Service", desc: "Outlets, ceiling fans, EV chargers, smart switches — done right." },
  { icon: Lightbulb, title: "Lighting Design & Install", desc: "Indoor, landscape and security lighting that elevates your home." },
  { icon: AlertTriangle, title: "24/7 Emergency Repairs", desc: "Sparking outlets, dead circuits, post-storm faults — we respond fast." },
] as const;

export function ServicesGrid() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">What we do</span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl uppercase leading-tight">
              Electrical work, <span className="bolt-text">done ethically.</span>
            </h2>
          </div>
          <p className="md:max-w-sm text-muted-foreground">
            One licensed crew. Fair flat-rate pricing. Every job left cleaner than we found it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-[color:var(--surface)]/60 p-7 hover:border-primary/60 transition"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
              <s.icon className="h-9 w-9 text-primary" />
              <h3 className="mt-5 font-display text-xl uppercase">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
