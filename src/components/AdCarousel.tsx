import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ad1 from "@/assets/ad-storm.png";
import ad2 from "@/assets/ad-walls.png";
import ad3 from "@/assets/ad-investments.png";
import ad4 from "@/assets/ad-inspection.png";

const ADS = [
  { src: ad1, alt: "Is your home ready for June 1st storm season" },
  { src: ad2, alt: "Hidden risks in your walls" },
  { src: ad3, alt: "Protect your investments with surge protection" },
  { src: ad4, alt: "Book your professional safety inspection" },
];

export function AdCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % ADS.length), 5000);
    return () => clearInterval(t);
  }, []);
  const go = (d: number) => setI((p) => (p + d + ADS.length) % ADS.length);

  return (
    <section className="relative py-24 md:py-32 bg-[color:var(--surface)]/40">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Storm season campaigns</span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl uppercase">From our wall <span className="bolt-text">to yours.</span></h2>
          </div>
          <div className="flex gap-2">
            <button onClick={() => go(-1)} aria-label="Previous" className="h-11 w-11 rounded-full border border-border hover:border-primary hover:text-primary transition flex items-center justify-center">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => go(1)} aria-label="Next" className="h-11 w-11 rounded-full border border-border hover:border-primary hover:text-primary transition flex items-center justify-center">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-border bg-background shadow-[var(--shadow-elevated)]">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${i * 100}%)` }}
          >
            {ADS.map((a) => (
              <div key={a.src} className="min-w-full flex items-center justify-center bg-black">
                <img
                  src={a.src}
                  alt={a.alt}
                  loading="lazy"
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {ADS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-primary" : "w-4 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
