export function Skeleton({ width = '100%', height = 16 }: { width?: string | number; height?: number }) {
  return (
    <div
      className="animate-pulse bg-[#434242] rounded"
      style={{ width, height }}
      aria-hidden
    />
  );
}
