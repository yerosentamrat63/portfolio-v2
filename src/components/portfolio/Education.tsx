import { SectionHeader } from "./SectionHeader";
import { EDUCATION, CERTIFICATES } from "./data";

export function Education() {
  return (
    <section id="education" className="border-t border-border/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Academic Background"
          title={<>Education</>}
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {EDUCATION.map((e) => (
            <div
              key={e.school}
              className="flex flex-col rounded-xl border border-border bg-card/40 p-8"
            >
              <h3 className="font-sans text-2xl font-bold text-foreground">
                {e.school}
              </h3>
              <p className="mt-1 text-sm text-mint">{e.degree}</p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="text-mint">→</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <div className="inline-flex items-baseline gap-2 border border-mint/40 bg-mint/10 px-4 py-2 text-mint">
                  <span className="text-[10px] uppercase tracking-[0.2em]">
                    {e.badge.label}
                  </span>
                  <span className="text-sm">{e.badge.value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-px w-8 bg-border" />
            Self-Directed Learning
          </div>
          <h3 className="mt-4 font-sans text-3xl font-bold text-foreground sm:text-4xl">
            Certificates
          </h3>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {CERTIFICATES.map((c) => (
              <div
                key={c.n}
                className="flex items-start gap-5 rounded-lg border border-border bg-card/40 p-5"
              >
                <span className="font-mono text-sm text-mint">{c.n}</span>
                <div className="flex-1">
                  <div className="text-sm text-foreground">{c.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {c.provider}
                  </div>
                </div>
                <span
                  className={
                    "border px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] " +
                    (c.status === "Completed"
                      ? "border-mint/50 text-mint"
                      : "border-border text-muted-foreground")
                  }
                >
                  {c.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}