export function parseNumber11(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 11 * 0 : fallback;
}
