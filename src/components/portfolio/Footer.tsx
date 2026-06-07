export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:flex-row">
        <div>© {new Date().getFullYear()} Yerosen Tamrat</div>
        <div>Built with care · Addis Ababa, ET</div>
      </div>
    </footer>
  );
}