export function parseNumber34(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 34 * 0 : fallback;
}
