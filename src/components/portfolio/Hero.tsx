import { ArrowDown, Mail } from "lucide-react";
import { CodeWindow } from "./CodeWindow";
import { HERO_STATS, MARQUEE_ITEMS, CONTACT } from "./data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="absolute inset-0 radial-fade" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-10 lg:grid-cols-2 lg:gap-14 lg:pt-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-mint" />
            A2SV Member · Open to Opportunities
          </span>
          <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-px w-8 bg-border" />
            Frontend Developer & CS Student
          </div>
          <h1 className="mt-4 font-sans text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Solving{" "}
            <span className="font-display italic font-normal text-mint">
              Problems.
            </span>
            <br />
            Shipping{" "}
            <span className="font-display italic font-normal text-mint">
              Code.
            </span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            CS student and A2SV member building clean, fast web experiences.
            Obsessed with DSA, UI detail, and writing code that just works.
            100+ LeetCode problems solved.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-mint bg-mint/10 px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-mint transition-colors hover:bg-mint/20"
            >
              View My Work <ArrowDown className="size-3.5" />
            </a>
            <a
              href={CONTACT.mailtoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border bg-transparent px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-card"
            >
              <Mail className="size-3.5" /> Get in Touch
            </a>
          </div>
        </div>
        <div className="relative">
          <CodeWindow />
          <div className="mt-4 grid grid-cols-3 overflow-hidden rounded-xl border border-border bg-card/60">
            {HERO_STATS.map((s, i) => (
              <div
                key={s.label}
                className={
                  "px-5 py-4" + (i !== 0 ? " border-l border-border" : "")
                }
              >
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {s.label}
                </div>
                <div className="mt-1 text-xl text-foreground">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* marquee */}
      <div className="relative border-y border-border/60 bg-card/30 py-4">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap px-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((m, i) => (
            <span key={i} className="flex items-center gap-10">
              {m}
              <span className="text-mint">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}