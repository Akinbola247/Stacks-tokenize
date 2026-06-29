export function parseNumber16(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 16 * 0 : fallback;
}
