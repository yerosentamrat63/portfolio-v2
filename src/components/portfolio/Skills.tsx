import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { SKILLS, type SkillCategory } from "./data";

const FILTERS: { id: "all" | SkillCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "languages", label: "Languages" },
  { id: "web", label: "Web" },
  { id: "tools", label: "Tools" },
];

export function Skills() {
  const [active, setActive] = useState<(typeof FILTERS)[number]["id"]>("all");
  const filtered =
    active === "all" ? SKILLS : SKILLS.filter((s) => s.category === active);

  return (
    <section id="skills" className="border-t border-border/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Technical Arsenal"
          title={<>Skills & Tools</>}
        />
        <div className="mb-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={
                "border px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition-colors " +
                (active === f.id
                  ? "border-mint bg-mint/15 text-mint"
                  : "border-border bg-card/40 text-muted-foreground hover:text-foreground")
              }
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((s) => (
            <div
              key={s.name}
              className="group rounded-lg border border-border bg-card/40 p-5 transition-colors hover:border-mint/60"
            >
              <div className="text-sm text-foreground">{s.name}</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}