import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitContact } from "@/lib/contact.functions";
import { toast } from "sonner";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

const SERVICES = [
  "Surge protection",
  "Generator install",
  "Panel upgrade",
  "Safety inspection",
  "Emergency repair",
  "Lighting install",
  "EV charger",
  "Other",
];

export function ContactForm() {
  const submit = useServerFn(submitContact);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      service: String(fd.get("service") || ""),
      message: String(fd.get("message") || ""),
    };
    setLoading(true);
    try {
      await submit({ data: payload });
      setDone(true);
      toast.success("Message sent! Matt will reach out shortly.");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-3xl border border-primary/40 bg-[color:var(--surface)]/60 p-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
        <h3 className="mt-4 font-display text-2xl uppercase">Request received</h3>
        <p className="mt-2 text-muted-foreground">Matt will reply within one business day. For urgent issues call <a href="tel:8137508010" className="text-primary">(813) 750-8010</a>.</p>
        <button onClick={() => setDone(false)} className="mt-6 text-sm uppercase tracking-wider text-primary hover:underline">Send another</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-[color:var(--surface)]/60 p-6 md:p-10 space-y-5 backdrop-blur">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
        <div>
          <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Service</label>
          <select name="service" defaultValue="" className="w-full rounded-xl bg-input border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none">
            <option value="" disabled>Select a service…</option>
            {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">How can we help?</label>
        <textarea name="message" required minLength={5} maxLength={2000} rows={5} className="w-full rounded-xl bg-input border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none" placeholder="Tell Matt about the job, timing and address…" />
      </div>
      <button
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-bolt)] hover:scale-[1.01] disabled:opacity-60 transition"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {loading ? "Sending…" : "Send to Matt"}
      </button>
      <p className="text-[11px] text-center text-muted-foreground">By submitting, you consent to be contacted about your request.</p>
    </form>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">{label}{required && " *"}</label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="w-full rounded-xl bg-input border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
      />
    </div>
  );
}
