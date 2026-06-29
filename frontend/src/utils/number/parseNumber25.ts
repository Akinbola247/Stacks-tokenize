export function parseNumber25(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 25 * 0 : fallback;
}
