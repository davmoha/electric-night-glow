import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-5 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Ethical Electrical Services logo" className="h-10 w-10 rounded-full ring-2 ring-primary/40 group-hover:ring-primary transition" />
          <div className="leading-tight hidden sm:block">
            <div className="font-display text-base tracking-wide text-foreground">ETHICAL ELECTRICAL</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-primary">Tampa Bay · Licensed & Insured</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href="tel:8137508010"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:shadow-[var(--shadow-bolt)] transition"
          >
            <Phone className="h-4 w-4" /> (813) 750-8010
          </a>
        </nav>

        <button className="md:hidden text-foreground" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col p-5 gap-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-base uppercase tracking-wider text-foreground"
              >
                {n.label}
              </Link>
            ))}
            <a href="tel:8137508010" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
              <Phone className="h-4 w-4" /> (813) 750-8010
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
