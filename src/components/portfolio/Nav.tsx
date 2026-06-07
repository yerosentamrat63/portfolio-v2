import { NAV_LINKS } from "./data";

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="text-sm font-medium tracking-wide text-foreground">
          Yerosen Tamrat
        </a>
        <nav className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}