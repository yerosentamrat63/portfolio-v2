import { ABOUT_STATS } from "./data";

export function About() {
  return (
    <section id="about" className="border-t border-border/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          <span className="h-px w-8 bg-border" />
          Who I Am
        </div>
        <h2 className="mt-4 max-w-4xl font-sans text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Crafting the web<br />
          with{" "}
          <span className="font-display italic font-normal text-mint">
            clean code
          </span>
          <br />&{" "}
          <span className="font-display italic font-normal text-mint">
            sharp logic.
          </span>
        </h2>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT_STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-card/40 p-6"
            >
              <div className="font-sans text-4xl font-bold text-foreground">
                {s.value}
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[200px_1fr]">
          <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            <span className="text-mint">◆</span> My Story
          </div>
          <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I'm a Computer Science student at the American College of
              Technology in Addis Ababa, passionate about building clean,
              well-crafted web interfaces and solving hard problems through code.
            </p>
            <p>
              During an intensive summer session I dove deep into Data
              Structures and Algorithms, solving over 100 problems on LeetCode
              under guided instruction. That discipline now shapes how I
              approach every engineering challenge.
            </p>
            <p>
              As an A2SV member I sharpen my problem-solving and collaboration
              skills alongside a community of Africa's top engineers — working
              toward software that creates real, lasting impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}