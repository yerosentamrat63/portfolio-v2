export function CodeWindow() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-border bg-card/80 shadow-2xl backdrop-blur-sm">
      {/* title bar */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="size-3 rounded-full bg-[oklch(0.68_0.19_25)]" aria-hidden />
        <span className="size-3 rounded-full bg-[oklch(0.82_0.15_90)]" aria-hidden />
        <span className="size-3 rounded-full bg-[oklch(0.78_0.16_145)]" aria-hidden />
        <span className="ml-auto text-xs text-muted-foreground">yerosen.ts</span>
      </div>
      <pre className="overflow-x-auto px-4 py-5 text-[13px] leading-6 sm:text-sm">
        <code className="font-mono">
          <Line n={1}><span className="text-[var(--code-comment)] italic">// Frontend Developer & A2SV Member</span></Line>
          <Line n={2}> </Line>
          <Line n={3}>
            <Kw>const</Kw> <Var>engineer</Var> <Op>=</Op> <Op>{"{"}</Op>
          </Line>
          <Field n={4} k="name" v="'Yerosen Tamrat'" />
          <Field n={5} k="location" v="'Addis Ababa, ET'" />
          <Field n={6} k="gpa" v="'3.93 / 4.0'" />
          <Field n={7} k="community" v="'A2SV Member'" />
          <Line n={8}>
            {"  "}<Prop>focus</Prop><Op>:</Op>{" "}<Op>[</Op>
            <Str>'DSA'</Str><Op>,</Op> <Str>'Web Dev'</Str><Op>,</Op> <Str>'UI/UX'</Str>
            <Op>],</Op>
          </Line>
          <Line n={9}>
            {"  "}<Prop>languages</Prop><Op>:</Op>{" "}<Op>[</Op>
            <Str>'HTML'</Str><Op>,</Op> <Str>'CSS'</Str><Op>,</Op> <Str>'JS'</Str><Op>,</Op>{" "}
            <Str>'Python'</Str><Op>,</Op> <Str>'C++'</Str><Op>]</Op><Op>,</Op>
          </Line>
          <Field n={10} k="tools" v="'Git · Figma · Adobe Illustrator · Linux'" />
          <Field n={11} k="leetcode" v="'100+ solved'" last />
          <Line n={12}><Op>{"};"}</Op></Line>
          <Line n={13}> </Line>
          <Line n={14}>
            <span className="inline-block h-4 w-2 translate-y-[2px] bg-mint animate-caret" aria-hidden />
          </Line>
        </code>
      </pre>
    </div>
  );
}

function Line({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="w-6 select-none text-right text-[var(--code-comment)]">{n}</span>
      <span className="flex-1 whitespace-pre">{children}</span>
    </div>
  );
}

function Field({ n, k, v, last }: { n: number; k: string; v: string; last?: boolean }) {
  return (
    <Line n={n}>
      {"  "}<Prop>{k}</Prop><Op>:</Op>{" "}<Str>{v}</Str>{!last && <Op>,</Op>}
    </Line>
  );
}

const Kw = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[var(--code-purple)]">{children}</span>
);
const Var = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[var(--code-blue)]">{children}</span>
);
const Prop = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[var(--code-blue)]">{children}</span>
);
const Str = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[var(--code-green)]">{children}</span>
);
const Op = ({ children }: { children: React.ReactNode }) => (
  <span className="text-foreground/70">{children}</span>
);