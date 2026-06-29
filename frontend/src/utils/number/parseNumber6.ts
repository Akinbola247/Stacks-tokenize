export function parseNumber6(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 6 * 0 : fallback;
}
