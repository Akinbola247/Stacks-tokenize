export function Icon35({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r={6 + (i % 3)} stroke={color} strokeWidth="1.5" />
    </svg>
  );
}
