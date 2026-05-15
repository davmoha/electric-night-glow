import map from "@/assets/tampa-map.png";
import { MapPin, Zap } from "lucide-react";

const AREAS = [
  "South Tampa", "Hyde Park", "Westchase", "Carrollwood", "Brandon", "Riverview",
  "Wesley Chapel", "New Tampa", "St. Petersburg", "Clearwater", "Lutz", "Apollo Beach",
];

export function TampaMapSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 grid gap-12 lg:grid-cols-2 items-center">
        <div className="relative group">
          <div className="absolute -inset-2 rounded-3xl bg-[var(--gradient-bolt)] opacity-30 blur-2xl group-hover:opacity-50 transition" />
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-elevated)]">
            <img src={map} alt="Map of Tampa Bay service area" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full bg-background/80 backdrop-blur px-4 py-2 text-xs uppercase tracking-wider">
                <MapPin className="h-3.5 w-3.5 text-primary" /> Tampa, FL · 28.05° N
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                <Zap className="h-3.5 w-3.5" /> Live service area
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Local & licensed</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl uppercase leading-tight">
            Powering every corner of <span className="bolt-text">Tampa Bay.</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-lg">
            From the bayshore to the suburbs, our trucks are out daily. Same-day arrival across most of Hillsborough and Pinellas — and a real human picks up the phone.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {AREAS.map((a) => (
              <span key={a} className="inline-flex rounded-full border border-border bg-[color:var(--surface)] px-3.5 py-1.5 text-xs text-muted-foreground hover:border-primary hover:text-primary transition">
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
