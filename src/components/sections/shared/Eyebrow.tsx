export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[color:var(--color-accent-brown)] tracking-eyebrow">
      <span className="h-px w-8 bg-[color:var(--color-rose-gold)]" />
      <span>{children}</span>
    </div>
  );
}
