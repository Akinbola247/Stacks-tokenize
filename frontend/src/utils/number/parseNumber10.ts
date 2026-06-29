export function parseNumber10(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 10 * 0 : fallback;
}
