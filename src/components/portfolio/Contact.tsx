import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Mail, Phone, MapPin, ArrowUpRight, Send } from "lucide-react";
import { toast } from "sonner";
import { submitContactMessage } from "@/lib/contact.functions";
import { CONTACT } from "./data";

export function Contact() {
  const submit = useServerFn(submitContactMessage);
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    try {
      await submit({ data: form });
      toast.success("Message sent. I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "Failed to send message.";
      toast.error(msg);
    } finally {
      setBusy(false);
    }
  }

  return (
    <section id="contact" className="border-t border-border/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          <span className="h-px w-8 bg-border" />
          Ready to Build?
        </div>
        <h2 className="mt-4 max-w-4xl font-sans text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Let's engineer{" "}
          <span className="font-display italic font-normal text-mint">
            something great.
          </span>
        </h2>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Frontend developer and A2SV member open to internships, collaborative
          projects, and meaningful opportunities. Let's build something
          impactful together.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-3">
            <ContactRow
              icon={<Mail className="size-4" />}
              label={CONTACT.email}
              href={`mailto:${CONTACT.email}`}
            />
            <ContactRow
              icon={<Phone className="size-4" />}
              label={CONTACT.phone}
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            />
            <ContactRow
              icon={<MapPin className="size-4" />}
              label={CONTACT.location}
            />
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href={CONTACT.mailtoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-mint bg-mint/10 px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-mint transition-colors hover:bg-mint/20"
              >
                Send Email <ArrowUpRight className="size-3.5" />
              </a>
              <a
                href={CONTACT.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-border px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-card"
              >
                View Resume <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="space-y-4 rounded-xl border border-border bg-card/40 p-6"
          >
            <Field label="Name">
              <input
                required
                maxLength={120}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-border bg-background/60 px-3 py-2 text-sm text-foreground outline-none focus:border-mint"
              />
            </Field>
            <Field label="Email">
              <input
                required
                type="email"
                maxLength={254}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-border bg-background/60 px-3 py-2 text-sm text-foreground outline-none focus:border-mint"
              />
            </Field>
            <Field label="Message">
              <textarea
                required
                maxLength={2000}
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full resize-none border border-border bg-background/60 px-3 py-2 text-sm text-foreground outline-none focus:border-mint"
              />
            </Field>
            <button
              type="submit"
              disabled={busy}
              className="inline-flex w-full items-center justify-center gap-2 border border-mint bg-mint/15 px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-mint transition-colors hover:bg-mint/25 disabled:opacity-60"
            >
              {busy ? "Sending…" : (<>Send Message <Send className="size-3.5" /></>)}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4 border border-border bg-card/40 px-4 py-3 text-sm text-foreground transition-colors hover:border-mint/50">
      <span className="text-mint">{icon}</span>
      <span>{label}</span>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer">
      {inner}
    </a>
  ) : (
    inner
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}