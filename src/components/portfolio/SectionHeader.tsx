export function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: React.ReactNode;
}) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
        <span className="h-px w-8 bg-border" />
        {eyebrow}
      </div>
      <h2 className="mt-4 font-sans text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}