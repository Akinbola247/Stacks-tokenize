export function Badge({ children, color = '#8F8D8E' }: { children: React.ReactNode; color?: string }) {
  return (
    <span className="text-xs px-2 py-0.5 font-mono rounded" style={{ color, border: `1px solid ${color}` }}>
      {children}
    </span>
  );
}
