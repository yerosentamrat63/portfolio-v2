import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { PROJECTS } from "./data";

export function Projects() {
  return (
    <section id="projects" className="border-t border-border/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Archive 2024 – 2025"
          title={<>Selected Projects</>}
        />
        <div className="space-y-6">
          {PROJECTS.map((p) => (
            <article
              key={p.index}
              className="grid gap-6 rounded-xl border border-border bg-card/40 p-6 transition-colors hover:border-mint/40 sm:p-8 lg:grid-cols-[100px_1fr_240px]"
            >
              <div className="font-mono text-sm text-mint">{p.index}</div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-sans text-2xl font-bold text-foreground">
                    {p.title}
                  </h3>
                  {p.designProject && (
                    <span className="text-[10px] uppercase tracking-[0.2em] text-mint">
                      ◆ Design Project
                    </span>
                  )}
                  <span
                    className={
                      "ml-auto border px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] sm:ml-0 " +
                      (p.status === "COMPLETED"
                        ? "border-mint/50 text-mint"
                        : "border-border text-muted-foreground")
                    }
                  >
                    {p.status}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                  <span className="text-mint">Role: </span>
                  {p.role}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="border border-border bg-background/40 px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2 lg:items-end">
                {p.links?.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-mint/50 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-mint transition-colors hover:bg-mint/10"
                  >
                    <ArrowUpRight className="size-3.5" />
                    {l.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}