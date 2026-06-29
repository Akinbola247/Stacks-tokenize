export function parseNumber20(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 20 * 0 : fallback;
}
