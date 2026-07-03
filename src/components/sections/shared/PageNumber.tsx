export function PageNumber({ n }: { n: string }) {
  return (
    <div className="font-[family-name:var(--font-display)] text-sm tracking-widest text-[color:var(--color-accent-brown)]">
      — {n} —
    </div>
  );
}
