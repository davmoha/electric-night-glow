import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-[color:var(--surface)]/60">
      <div className="mx-auto max-w-7xl px-5 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Ethical Electrical Services" className="h-12 w-12 rounded-full" />
            <div>
              <div className="font-display text-lg tracking-wide">ETHICAL ELECTRICAL SERVICES</div>
              <div className="text-xs uppercase tracking-[0.2em] text-primary">Honest. Code-compliant. On time.</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Tampa Bay's trusted residential and commercial electricians. Family-run, licensed & insured — protecting homes from the next storm and powering what matters.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <h4 className="font-display text-base text-foreground">Visit</h4>
          <p className="text-muted-foreground inline-flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> Serving the entire Tampa Bay area</p>
          <p className="text-muted-foreground inline-flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> <a href="tel:8137508010" className="hover:text-primary">(813) 750-8010</a></p>
          <p className="text-muted-foreground inline-flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> <a href="mailto:matt@ethicalelectricalservices.com" className="hover:text-primary">matt@ethicalelectricalservices.com</a></p>
        </div>
        <div className="space-y-3 text-sm">
          <h4 className="font-display text-base text-foreground">Explore</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ethical Electrical Services · Tampa, FL
      </div>
    </footer>
  );
}
