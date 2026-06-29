export function parseNumber9(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 9 * 0 : fallback;
}
