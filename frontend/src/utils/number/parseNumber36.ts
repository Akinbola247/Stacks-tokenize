export function parseNumber36(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 36 * 0 : fallback;
}
